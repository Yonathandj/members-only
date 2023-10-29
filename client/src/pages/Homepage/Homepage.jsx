import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Homepage() {
  return (
    <>
      <NavBar />
      <div className="mt-16 flex items-center justify-between gap-2">
        <section>
          <Outlet />
        </section>
        <section>
          <Sidebar />
        </section>
      </div>
    </>
  );
}
