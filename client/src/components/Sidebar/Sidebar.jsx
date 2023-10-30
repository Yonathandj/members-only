import { useContext } from "react";
import { authContext } from "../../contexts/AuthProvider";

import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
import SidebarUser from "../SidebarUser/SidebarUser";

export default function Sidebar() {
  const { user } = useContext(authContext);
  return (
    <div className="flex flex-col gap-y-8">
      {user.userId && <SidebarAdmin />}
      <SidebarUser />
    </div>
  );
}
