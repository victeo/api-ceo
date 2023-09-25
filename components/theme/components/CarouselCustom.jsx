import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "./src/img/slide1.jpg";
import Slide2 from "./src/img/slide2.jpg";

function CarouselCustom() {

    return (
        <Carousel>
            <Carousel.Item>
                <img src={Slide1.src} alt="" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Slide2.src} alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
    
        </Carousel>
    );
}

export default CarouselCustom;