import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";

import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>description</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'><Image src={meter1} />
                                    <h5>Web developement</h5>

                                </div>
                                <div className='item'><Image src={meter2} />
                                    <h5>Web design</h5>

                                </div>
                                <div className='item'><Image src={meter3} />
                                    <h5>Brand identity</h5>

                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image className='background-image-left' src={colorSharp}
            />
        </section>)
}
