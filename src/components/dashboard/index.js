import ImgCarousel from "./carousel"
import Projects from "./projects"

export default function Dashboard() {

  return (
    <div className="container max-w-screen-hd w-full">
      <div className="m-0 w-full">
        <ImgCarousel />
      </div>
      <Projects />
    </div>
)
}