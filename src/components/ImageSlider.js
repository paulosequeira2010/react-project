import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function ImageSliderImageSlider() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="../../ImageSlider/Slide1.png"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="../../ImageSlider/Slide2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../ImageSlider/Slide3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
