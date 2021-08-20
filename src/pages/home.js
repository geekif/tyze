import Header from "../components/header"
import Footer from "../components/footer"
import Dashboard from "../components/dashboard/"

export default function Home() {

  return (
    <div className="container flex flex-col w-full h-full max-w-screen-hd overflow-x-hidden overflow-y-auto">
        <Header /> 
        <Dashboard />
        <Footer />
    </div>
  )
}