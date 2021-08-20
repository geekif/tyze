import Card from "./card"

export default function Projects() {

  return (
    <div className="container flex w-full flex-col max-w-screen-hd items-center justify-center mb-5">
        <div className="flex flex-col w-full justify-center items-center m-5">
            <h1 className="font-body text-4xl select-none h-10 px-10 pb-14 text-black border-b-4 border-crimson text-center justify-center">
                Featured
            </h1>
            <div className="flex flex-wrap flex-shrink w-full gap-6 mt-10 items-center justify-center">
                <Card imgSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <Card imgSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <Card imgSrc="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <Card imgSrc="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
            </div> 
        </div>
        <div className="flex flex-col w-full justify-center items-center m-5">
            <h1 className="font-body text-4xl select-none h-10 px-10 pb-14 text-black border-b-4 border-crimson text-center justify-center">
                Recent
            </h1>
            <div className="flex flex-wrap flex-shrink w-full gap-6 mt-10 items-center justify-center">
                <Card imgSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <Card imgSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <Card imgSrc="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <Card imgSrc="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
            </div> 
        </div>
        
    </div>
)
};