import { Link } from "react-router-dom";

import {
  UserCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <header>
      <nav className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-around items-center p-6">
        <Link to={"/"} className="text-3xl font-bold flex gap-2">
          <span className="text-purple-600">Members</span>
          <span>Only</span>
        </Link>
        <ul>
          <li className="flex gap-6">
            <Link
              to={"sign-up"}
              className="flex items-center justify-center gap-2"
            >
              <UserCircleIcon className="w-7 h-7" />
              <span className="text-purple-600">Sign Up</span>
            </Link>
            {/*  */}
            <Link
              to={"sign-in"}
              className="flex items-center justify-center gap-2"
            >
              <ArrowRightCircleIcon className="w-7 h-7" />
              <span className="text-purple-600">Sign In</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
