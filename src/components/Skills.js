import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";

import meter1 from "../assets/img/skill-front.svg"
import meter2 from "../assets/img/skill-backend.svg"
import meter3 from "../assets/img/skill-design.svg"
import meter4 from "../assets/img/skill-devops.svg"
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
                            <Row  className='skill-items d-flex align-item-center p-10'>
                            <Col sm={12} md={3} className='item'><Image width={20} src={meter1} />
                                    <h5>Front end </h5>

                                </Col>
                                <Col sm={12} md={3} className='item'><Image src={meter2} />
                                    <h5>Back end</h5>

                                </Col>
                                <Col sm={12} md={3} className='item'><Image src={meter3} />
                                    <h5>Web design</h5>

                                </Col>
                                <Col sm={12} md={3} className='item'><Image src={meter4} />
                                    <h5>Devops</h5>

                                </Col>
                         
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image className='background-image-left' src={colorSharp}
            />
        </section>)
}
