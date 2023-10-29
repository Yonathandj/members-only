import { Link } from "react-router-dom";
import {
  UserCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { authContext } from "../../contexts/AuthProvider";
import { useContext } from "react";
import Logout from "../Logout/Logout";

export default function NavBar() {
  const { user } = useContext(authContext);
  return (
    <header>
      <nav className="flex flex-col items-center justify-around gap-6 p-6 sm:flex-row sm:gap-0">
        <Link className="flex gap-2 text-4xl font-bold" to={""}>
          <span className="text-purple-600">Members</span>
          <span>Only</span>
        </Link>
        <ul>
          <li className="flex gap-6">
            {user.userId ? (
              <Logout />
            ) : (
              <>
                <Link
                  to={"sign-up"}
                  className="flex items-center justify-center gap-2"
                >
                  <UserCircleIcon className="w-6" />
                  <span className="text-purple-600">Sign Up</span>
                </Link>
                <Link
                  to={"sign-in"}
                  className="flex items-center justify-center gap-2"
                >
                  <ArrowRightCircleIcon className="w-6" />
                  <span className="text-purple-600">Sign In</span>
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
