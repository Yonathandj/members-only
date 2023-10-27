import {
  PlusCircleIcon,
  ArrowPathIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

import useCrudRoom from "../../hooks/useCrudRoom";

export default function CRUDRoom() {
  const { response, loading, error, setError, postRoom, putRoom, deleteRoom } =
    useCrudRoom();

  const [rooms, setRooms] = useState({});

  useEffect(() => {
    const handlegetRooms = async () => {
      const response = await fetch("http://localhost:5172/rooms", {
        mode: "cors",
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      const options = {};
      res.rooms.map((room) => {
        options[room._id] = room.name;
      });
      setRooms(options);
    };
    const timeInterval = setTimeout(() => {
      handlegetRooms();
    }, 500);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const handleAddRoom = async () => {
    const { value: name } = await Swal.fire({
      title: "Create new room",
      input: "text",
      inputLabel: "Enter new room name",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Please enter valid new room name!";
        }
      },
    });
    if (name) {
      await postRoom({ name });
    }
  };
  const handleUpdateRoom = async () => {
    const { value: idRoom } = await Swal.fire({
      title: "Select room to update",
      input: "select",
      inputOptions: rooms,
      inputPlaceholder: "Select a room",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (!value) {
            resolve("You need to select room");
          } else {
            resolve();
          }
        });
      },
    });
    if (idRoom) {
      const { value: updatedName } = await Swal.fire({
        title: `Update room ${rooms[idRoom]}`,
        input: "text",
        inputLabel: "Enter new room name",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Please enter valid new room name!";
          }
        },
      });
      if (updatedName) {
        await putRoom({ name: updatedName }, idRoom);
      }
    }
  };

  const handleDeleteRoom = async () => {
    const { value: idRoom } = await Swal.fire({
      title: "Select room to delete",
      input: "select",
      inputOptions: rooms,
      inputPlaceholder: "Select a room",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (!value) {
            resolve("You need to select room");
          } else {
            resolve();
          }
        });
      },
    });
    if (idRoom) {
      await deleteRoom(idRoom);
    }
  };

  if (response) {
    Swal.fire({
      icon: "success",
      title: "Action successfully",
      text: response.message,
    }).then(() => {
      location.reload();
    });
  }
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Something went wrong!",
      text: error,
    });
    setError(null);
  }
  if (loading) {
    Swal.fire({
      title: "Loading...",
      text: "Please wait",
      showConfirmButton: false,
    });
  }

  return (
    <section className="mt-5 flex items-center justify-center text-center sm:mt-10">
      <ul className="flex gap-12">
        <button className="flex gap-2" onClick={handleAddRoom}>
          <PlusCircleIcon className="w-6" />
          <h2 className="text-lg">Create Room</h2>
        </button>
        <button className="flex gap-2" onClick={handleUpdateRoom}>
          <ArrowPathIcon className="w-6" />
          <h2 className="text-lg">Update Room</h2>
        </button>
        <button className="flex gap-2" onClick={handleDeleteRoom}>
          <TrashIcon className="w-6" />
          <h2 className="text-lg">Delete Room</h2>
        </button>
      </ul>
    </section>
  );
}
