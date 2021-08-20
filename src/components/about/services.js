export default function Services() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col lg:flex-row w-full justify-between ">
        <div className="bg-grey-dark text-white flex flex-col py-10 px-10 space-y-2 w-full">
          <h1 className="text-3xl">Sample Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="bg-grey-primary text-grey-dark flex flex-col h-full w-full">
          <img className="object-contain" src="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80" />
        </div>
        <div className="bg-grey-dark text-white flex flex-col py-10 px-10 space-y-2 w-full">
          <h1 className="text-3xl">Sample Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>

      <div className="bg-white text-black flex flex-row py-20 flex-shrink justify-items-center align-center justify-around w-full">
        <div className="flex flex-col align-center">
          <h1 className="text-2xl text-center">350</h1>
          <p>Happy Customers</p>
        </div>
        <div className="flex flex-col align-center">
          <h1 className="text-2xl text-center">350</h1>
          <p>Happy Customers</p>
        </div>
        <div className="flex flex-col align-center">
          <h1 className="text-2xl text-center">350</h1>
          <p>Happy Customers</p>
        </div>
        <div className="flex flex-col align-center">
          <h1 className="text-2xl text-center">350</h1>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
}
