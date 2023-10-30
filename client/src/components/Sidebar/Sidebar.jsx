import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../contexts/AuthProvider";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";

export default function Sidebar() {
  const { user } = useContext(authContext);

  return (
    <div className="flex flex-col gap-y-8">
      {user.userId && <SidebarAdmin />}
      <section className="flex gap-2">
        <div className="h-40 w-[2px] bg-slate-600"></div>
        <section className="flex flex-col justify-center gap-y-6">
          <Link className="flex items-center gap-2">
            <ChatBubbleLeftRightIcon className="w-6" />
            <p className="text-purple-600">Programming</p>
          </Link>
        </section>
      </section>
    </div>
  );
}
