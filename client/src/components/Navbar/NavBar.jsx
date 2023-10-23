import { Link } from "react-router-dom";

import {
  UserCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-around items-center p-6">
        <Link to={"/"} className="text-3xl font-bold flex gap-2">
          <h3 className="text-purple-600">Members</h3>
          <h3>Only</h3>
        </Link>
        <ul>
          <li className="flex gap-6">
            <Link
              to={"sign-up"}
              className="flex items-center justify-center gap-2"
            >
              <UserCircleIcon className="w-6" />
              <span className="font-medium text-purple-600">Sign Up</span>
            </Link>
            {/*  */}
            <Link
              to={"sign-in"}
              className="flex items-center justify-center gap-2"
            >
              <ArrowRightCircleIcon className="w-6" />
              <span className="font-medium text-purple-600">Sign In</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
