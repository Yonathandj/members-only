import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  LockOpenIcon,
  UserCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import { authContext } from "../../context/AuthProvider";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, handleDeleteUser } = useContext(authContext);
  const { response, loading, error, setError, logOut } = useAuth();

  const handleLogOut = async () => {
    await logOut({ userId: user.userId });
  };

  if (response) {
    Swal.fire({
      icon: "success",
      title: "Success to logout",
      text: "See you next time, brother!",
    });
    handleDeleteUser();
    navigate("/");
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
      title: "Logout...",
      text: "Please wait to logout!",
      showConfirmButton: false
    });
  }

  return (
    <header>
      <nav className="flex flex-col items-center justify-around gap-6 p-6 sm:flex-row sm:gap-0">
        <Link to={user.userId ? "" : '/'} className="flex gap-2 text-3xl font-bold">
          <span className="text-purple-600">Members</span>
          <span>Only</span>
        </Link>
        <ul>
          {user.userId ? (
            <button
              className="flex items-center justify-center gap-2"
              onClick={handleLogOut}
              disabled={loading}
            >
              <LockOpenIcon className="h-7 w-7" />
              <span
                className={`${loading ? "text-purple-400" : "text-purple-600"}`}
              >
                Logout
              </span>
            </button>
          ) : (
            <li className="flex gap-6">
              <Link
                to={"sign-up"}
                className="flex items-center justify-center gap-2"
              >
                <UserCircleIcon className="h-7 w-7" />
                <span className="text-purple-600">Sign Up</span>
              </Link>
              <Link
                to={"sign-in"}
                className="flex items-center justify-center gap-2"
              >
                <ArrowRightCircleIcon className="h-7 w-7" />
                <span className="text-purple-600">Sign In</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
