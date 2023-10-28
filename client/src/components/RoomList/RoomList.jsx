import { useEffect, useState } from "react";

export default function RoomList({ setSelectRoom }) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getRooms = async () => {
      try {
        const response = await fetch("http://localhost:5172/rooms", {
          mode: "cors",
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          const res = await response.json();
          throw new Error(res);
        }
        const res = await response.json();
        setResponse(res.rooms);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const interval = setTimeout(() => {
      getRooms();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-8">
      {response ? (
        response.map((room) => (
          <section
            onClick={() => setSelectRoom({ isSelected: true, roomId: room._id })}
            key={room._id}
            className="w-2/4 cursor-pointer rounded-md bg-slate-50 p-2 shadow-2xl shadow-purple-800"
          >
            <h2 className="text-center text-2xl text-slate-800">{room.name}</h2>
          </section>
        ))
      ) : loading ? (
        <section className="w-2/4 rounded-md bg-slate-50 p-2 shadow-2xl shadow-purple-800">
          <h2 className="text-center text-2xl text-slate-800">
            Please wait...
          </h2>
        </section>
      ) : (
        <section className="w-2/4 rounded-md bg-slate-50 p-2 shadow-2xl shadow-purple-800">
          <h2 className="text-center text-2xl text-slate-800">
            Something went wrong. Refresh the page! {error}
          </h2>
        </section>
      )}
    </div>
  );
}
