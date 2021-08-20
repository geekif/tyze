import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Footer() {
  return (
    <div class="container flex w-full max-w-screen-hd bg-grey-dark text-white overflow-x-hidden overflow-y-auto">
      <div className="flex px-5 py-5 w-full flex-col justify-between ">
        <div className="flex w-full justify-between">
          <div className="flex flex-col space-y-3">
            <Link to={ROUTES.HOME}>
              <h1 className="text-2xl font-body">Tyze</h1>
            </Link>
            <p className="align-left text-sm">Your Growth Partner</p>
          </div>

          <div className="flex flex-col gap-2 float-right ">
            <p className="text-sm">36/727 Q, First Floor,</p>
            <p className="text-sm">E.K Tower, Muttippalam, Manjeri PO,</p>
            <p className="text-sm">Malappuram, Kerala, 676121, India</p>
          </div>

          <div className="flex flex-col space-y-2 pl-10">
            <h1>Lets Connect!</h1>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f8f8ffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row mt-4 gap-8 items-center justify-center">
          <a href="#" className="text-sm mt-2 mx-10">
            About
          </a>
          <a href="#" className="text-sm mt-2 mx-10">
            FAQ
          </a>
          <a href="#" className="text-sm mt-2 mx-10">
            Privacy and Policy
          </a>
          <a href="#" className="text-sm mt-2 mx-10">
            Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
}
