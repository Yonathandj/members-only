import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Homepage() {
  return (
    <>
      <NavBar />
      <div className="mt-8 flex justify-between gap-2">
        <section className="w-3/4">
          <Outlet />
        </section>
        <section>
          <Sidebar />
        </section>
      </div>
    </>
  );
}
