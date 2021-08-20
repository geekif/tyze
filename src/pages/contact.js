import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="flex flex-col w-full max-w-screen-hd overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="items-center flex flex-col w-full">
        <div className="flex flex-col w-full h-64 bg-black items-center justify-center">
          <h1 className="flex text-white text-4xl">Contact Us</h1>
          <p className="flex text-grey-primary">
            Feel free to contact us anytime
          </p>
        </div>
        <div className="flex flex-col md:flex-row bg-grey-primary w-full md:h-80 max-h-screen justify-around items-center ">
          <div className="flex flex-col items-center p-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-map-pin"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#C72E2E"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <h3 className="text-2xl items-center pt-2">Visit our office</h3>
            <p>E.K Tower,Malappuram, Kerala, 676121, India</p>
          </div>
          <div className="flex flex-col items-center p-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#C72E2E"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <h3 className="text-2xl items-center pt-2">Call us on</h3>
            <p>+91 1234567890</p>
          </div>
          <div className="flex flex-col items-center p-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#C72E2E"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <h3 className="text-2xl items-center pt-2">Email Us</h3>
            <p>example@yourdomain.com</p>
          </div>
        </div>
        <div className="bg-grey-dark w-full">
          <div className="flex w-full min-h-screen justify-center items-center">
            <div className="flex flex-col bg-grey-primary rounded-xl shadow-lg max-w-screen md:w-96 md:h-96">
              <form action="" className="flex flex-col p-8 space-y-2">
                <div>
                  <label for="" class="text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-grey-primary rounded-md w-full px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-crimson"
                  />
                </div>
                <div>
                  <label for="" class="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-grey-primary rounded-md w-full px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-crimson"
                  />
                </div>
                <div>
                  <label for="" class="text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="ring-1 ring-grey-primary rounded-md w-full h-full px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-crimson"
                  />
                </div>
                <button className="uppercase text-sm bg-grey-dark hover:bg-grey-primary text-white hover:text-black">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
