import {
  PuzzlePieceIcon,
  ArrowPathIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import useSwalFire from "../../hooks/useSwalFire";
import { globalStateContext } from "../../contexts/GlobalStateProvider";

export default function SidebarAdmin() {
  const { rooms } = useContext(globalStateContext);

  const { swalFireAlert, swalFireInputText, swalFireInputSelect } =
    useSwalFire();
  const { response, loading, error, setError, fetcher } = useFetch();

  const handleAddRoom = async () => {
    const roomName = await swalFireInputText("Create new room");
    roomName &&
      (await fetcher({
        url: "http://localhost:3200/rooms",
        method: "POST",
        credentials: "include",
        data: { name: roomName },
      }));
  };

  const handleUpdateRoom = async () => {
    const options = {};
    rooms.map((room) => {
      options[room._id] = room.name;
    });
    const selectedRoomId = await swalFireInputSelect(options);
    if (selectedRoomId) {
      const newRoomName = await swalFireInputText(
        `Update room - ${options[selectedRoomId]}`,
      );
      newRoomName &&
        (await fetcher({
          url: `http://localhost:3200/rooms/${selectedRoomId}`,
          method: "PUT",
          credentials: "include",
          data: { name: newRoomName },
        }));
    }
  };

  swalFireAlert(
    response,
    error,
    loading,
    {
      title: "Loading...",
      text: "Your operation is being processed",
    },
    setError,
  );

  return (
    <section className="flex gap-2">
      <div className="h-40 w-[2px] bg-slate-600"></div>
      <section className="flex flex-col justify-center gap-y-6">
        <button className="flex items-center gap-2" onClick={handleAddRoom}>
          <PuzzlePieceIcon className="w-6" />
          <p className="text-purple-600">Add room</p>
        </button>
        <button className="flex items-center gap-2" onClick={handleUpdateRoom}>
          <ArrowPathIcon className="w-6" />
          <p className="text-purple-600">Update room</p>
        </button>
        <button className="flex items-center gap-2">
          <TrashIcon className="w-6" />
          <p className="text-purple-600">Delete room</p>
        </button>
      </section>
    </section>
  );
}
