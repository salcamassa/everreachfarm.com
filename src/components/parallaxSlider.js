import React from "react"
import { Link } from "gatsby"

import { Carousel, CarouselItem } from "react-bootstrap"

const ParallaxSlider = ({ pageInfo }) => {
  return (
    <>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://place-hold.it/500x250&text=1st"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://place-hold.it/500x250&text=2nd"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://place-hold.it/500x250&text=3rd"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default ParallaxSlider
