import Carousel from "react-bootstrap/Carousel";
import { cycle, hike, running } from "../assets/index";

function Layoutcarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={cycle} alt="First slide" />
        <Carousel.Caption>
          <p className='carousel-text-one'>SOMETHING LIKE SOMETHING YOU NEED</p>
          <p>TAKE ACTION</p>
          <p>TODAY !</p>
          <button className='carousel-btn'>GET READY</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hike} alt="Second slide" />
        <Carousel.Caption>
          <p className='carousel-text-one'>GIVE YOUR BODY THE BEST FORM</p>
          <p>SHAPING YOUR</p>
          <p>MUSCLES </p>
          <button className='carousel-btn'>GET READY</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={running} alt="Third slide" />

        <Carousel.Caption>
          <p className='carousel-text-one'>BE YOU! JUST STRONGER POWER IS IN YOU</p>
          <p>TODAY IS THE BEST DAY TO</p>
          <p>START</p>
          <button className='carousel-btn'>GET READY</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Layoutcarousel;
