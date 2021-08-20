import { useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "alpinejs";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="h-16 flex w-full max-w-screen-hd bg-white items-center justify-between">
      {/* <div className="flex justify-between mt-2"> */}
      <div className="text-gray-700 w-full max-w-screen-hd text-center flex items-center align-items cursor-pointer">
        <Link to={ROUTES.HOME}>
          <h1 className="font-body text-3xl md:text-4xl select-none w-20 text-black ml-3">
            Tyze
          </h1>
        </Link>
      </div>
      <button type="button" className="block sm:hidden mr-5" onClick={() => {setisOpen(!isOpen)}}>
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen && (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          )}
          {!isOpen && (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>

      <nav className="hidden flex-col sm:flex-row items-center sm:flex lg:space-x-6 w-full sm:w-auto bg-grey-primary sm:bg-white align-items">
        <Link
          to={ROUTES.HOME}
          className="flex m-3 text-lg text-black font-light tracking-wider"
        >
          Home
        </Link>
        <Link
          to={ROUTES.PROJECTS}
          className="flex m-3 text-lg text-black font-light tracking-wider"
        >
          Projects
        </Link>
        <Link
          to={ROUTES.ABOUT}
          className="flex m-3 text-lg text-black font-light tracking-wider"
        >
          About
        </Link>
        <Link
          to={ROUTES.CONTACT}
          className="flex m-3 text-lg text-black font-light tracking-wider"
        >
          Contact
        </Link>
        <div className="flex mr-5 w-60 justify-evenly">
          <Link to={ROUTES.LOGIN}>
            <button className="text-lg font-normal text-white bg-crimson h-8 w-24 rounded tracking-widest">
              login
            </button>
          </Link>
          <Link to={ROUTES.SIGNUP}>
            <button className="text-lg font-normal text-black bg-yellow-bright h-8 w-24 rounded tracking-widest">
              signup
            </button>
          </Link>
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
}
