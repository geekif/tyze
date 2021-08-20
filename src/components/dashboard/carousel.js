import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function ImgCarousel() {
  return (
      // <section className="max-h-96 mb-5">
        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={5}
          totalSlides={4}
          isPlaying={"true"}
          interval={2500}
          infinite={"true"}
          className=""
        >
          <ButtonBack className="hidden">Back</ButtonBack>
          <ButtonNext className="hidden">Next</ButtonNext>
          <Slider className="relative">
            <Slide index={0}>
              <img
                className="max-h-desktop filter brightness-75 blur"
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=100"
                alt="1"
              />
            </Slide>
            <Slide index={1}>
              <img
                className="max-h-desktop filter brightness-75 blur"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=100"
                alt="2"
              />
            </Slide>
            <Slide index={3}>
              <img
                className="max-h-screen-desktop filter brightness-75 blur"
                src="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=100"
                alt="3"
              />
            </Slide>
            <Slide index={2}>
              <img
                className="max-h-screen-desktop h-auto filter brightness-75 blur"
                src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=100"
                alt="4"
              />
            </Slide>
          </Slider>
          <DotGroup />
        </CarouselProvider>
      // </section>
  );
}
