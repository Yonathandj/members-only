import { Link } from "react-router-dom";

import {
  UserCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <header>
      <nav className="flex flex-col items-center justify-around gap-6 p-6 sm:flex-row sm:gap-0">
        <Link to={"/"} className="flex gap-2 text-3xl font-bold">
          <span className="text-purple-600">Members</span>
          <span>Only</span>
        </Link>
        <ul>
          <li className="flex gap-6">
            <Link
              to={"sign-up"}
              className="flex items-center justify-center gap-2"
            >
              <UserCircleIcon className="h-7 w-7" />
              <span className="text-purple-600">Sign Up</span>
            </Link>
            {/*  */}
            <Link
              to={"sign-in"}
              className="flex items-center justify-center gap-2"
            >
              <ArrowRightCircleIcon className="h-7 w-7" />
              <span className="text-purple-600">Sign In</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
