import { useContext } from "react";

import CRUDRoom from "../../components/CRUDRoom/CRUDRoom";
import NavBar from "../../components/Navbar/NavBar";

import { authContext } from "../../context/AuthProvider";

export default function Homepage() {
  const { user } = useContext(authContext);

  return (
    <>
      <NavBar />
      <section>
        <h2 className="mx-auto mt-10 text-center text-5xl font-bold text-purple-600 sm:text-7xl">
          Members Only
        </h2>
        <h2 className="mx-auto mt-2 text-center text-5xl font-bold text-purple-600 sm:text-7xl">
          Room Chat
        </h2>
        <p className="mt-6 text-center text-purple-600 sm:text-lg">
          Welcome Home, Yonathan Dawang
        </p>
      </section>
      {user.isAdmin === true && <CRUDRoom />}
    </>
  );
}
