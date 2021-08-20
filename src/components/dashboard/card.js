export default function Card({imgSrc}) {
  return (
    <div className="flex max-w-xs p-2 flex-grow flex-col rounded-2xl shadow-lg border border-grey-primary ">
      <div className="flex flex-grow flex-wrap">
        <div className="flex items-center justify-center max-w-xs bg-gray-400 rounded-2xl">
          <img
            src={imgSrc}
            alt=""
            className="flex object-contain rounded-xl m-3 max-h-48 "
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl w-40 mb-4 ml-3 text-black">Project Title</h1>
          <p className="text-grey-dark font-md ml-2 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>
      </div>
      <div>
        {/* <progress className="h-1 w-full px-5 rounded crimson "></progress> */}
          <div className="overflow-hidden h-2 mx-4 mt-4 mb-6 text-xs flex rounded border border-crimson bg-white">
            <div
              style={{ width: "30%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-crimson"
            ></div>
        </div>
      </div>
    </div>
  );
}
