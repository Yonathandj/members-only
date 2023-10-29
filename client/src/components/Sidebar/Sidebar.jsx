import { Link } from "react-router-dom";
import {
  PuzzlePieceIcon,
  ArrowPathIcon,
  TrashIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { authContext } from "../../contexts/AuthProvider";

export default function Sidebar() {
  const { user } = useContext(authContext);
  return (
    <div className="flex flex-col gap-y-8">
      {user.userId && (
        <section className="flex gap-2">
          <div className="h-40 w-[2px] bg-slate-600"></div>
          <section className="flex flex-col justify-center gap-y-6">
            <button className="flex items-center gap-2">
              <PuzzlePieceIcon className="w-6" />
              <p className="text-purple-600">Add room</p>
            </button>
            <button className="flex items-center gap-2">
              <ArrowPathIcon className="w-6" />
              <p className="text-purple-600">Update room</p>
            </button>
            <button className="flex items-center gap-2">
              <TrashIcon className="w-6" />
              <p className="text-purple-600">Delete room</p>
            </button>
          </section>
        </section>
      )}
      <section className="flex gap-2">
        <div className="h-40 w-[2px] bg-slate-600"></div>
        <section className="flex flex-col justify-center gap-y-6">
          <Link className="flex items-center gap-2">
            <ChatBubbleLeftRightIcon className="w-6" />
            <p className="text-purple-600">Programming</p>
          </Link>
          <Link className="flex items-center gap-2">
            <ChatBubbleLeftRightIcon className="w-6" />
            <p className="text-purple-600">Pets</p>
          </Link>
          <Link className="flex items-center gap-2">
            <ChatBubbleLeftRightIcon className="w-6" />
            <p className="text-purple-600">Environment</p>
          </Link>
        </section>
      </section>
    </div>
  );
}
