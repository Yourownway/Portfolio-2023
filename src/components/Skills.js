import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";

import meter1 from "../assets/img/skill-front.svg"
import meter2 from "../assets/img/skill-backend.svg"
import meter3 from "../assets/img/skill-design.svg"
import meter4 from "../assets/img/skill-devops.svg"
import colorSharp from "../assets/img/color-sharp.png"
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import {
    chromeLogo,
    cypressLogo,
    graphqlLogo,
    javascriptLogo,
    nextLogo,
    reactjsLogo,
    reduxLogo,
    storybookLogo,
    typescriptLogo
} from "../assets/img/skills/front"
import {
    jestLogo,
    mangodbLogo,
    mysqlLogo,
    nodejsLogo,
    sequelizeLogo
} from '../assets/img/skills/backend';
import { figmaLogo } from '@/assets/img/skills/design';
import { creativeLogo, logicLogo } from '@/assets/img/skills/other';
export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const frontLogo = [
        {
            img: javascriptLogo,
            name: 'Javascript'
        },
        {
            img: typescriptLogo,
            name: 'Typescript'
        },
        {
            img: reactjsLogo,
            name: "React.js"
        }, {
            img: nextLogo,
            name: "Next.js"
        },
        {
            img: reduxLogo,
            name: "Redux.js"
        },
        {
            img: graphqlLogo,
            name: 'GraphQL'
        },
        {
            img: storybookLogo,
            name: "Storybook"
        }, {
            img: chromeLogo,
            name: 'Chrome extension'
        },
        {
            img: cypressLogo,
            name: "Cypress"
        }
    ]

    const backLogo = [
        {
            img: nodejsLogo,
            name: 'Node.js'
        },
        {
            img: mysqlLogo,
            name: "MySQL"
        },
        {
            img: mangodbLogo,
            name: "MangoDb"
        },
        {
            img: sequelizeLogo, name:
                "Sequelize"
        }]

    const designLogo = [
        {
            img: figmaLogo,
            name: "Figma"
        }
    ]

    const otherLogo = [
        { img: creativeLogo, name: "Creativité" }, { img: logicLogo, name:"Logique"}
    ]


    return (
        <section className='skill' id="skills">

            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Tab.Container >

                                <Carousel responsive={responsive} infinite={true} className="nav owl-carousel owl-theme skill-slider">
                                    <Nav.Item>
                                        <Nav.Link className='item' eventKey="front">
                                            <Image width={20} src={meter1} />
                                            <h5>Front end </h5></Nav.Link>
                                    </Nav.Item>

                                    {/*     <div className='item'>
                                            <Image width={20} src={meter1} />
                                            <h5>Front end </h5>

                                        </div> */}
                                    <Nav.Link className='item' eventKey="back"><Image src={meter2} />
                                        <h5>Back end</h5>

                                    </Nav.Link>
                                    <Nav.Link className='item' eventKey="design"><Image src={meter3} />
                                        <h5>Web design</h5>

                                    </Nav.Link>
                                    <Nav.Link className='item' eventKey="other"><Image src={meter4} />
                                        <h5>Other</h5>

                                    </Nav.Link>
                                </Carousel>
                                <div className='row'>
                                    <div className='col-12'>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="front">
                                                <Row>
                                                    <Col className='d-flex justify-content-around flex-wrap p-4'>
                                                        {
                                                            frontLogo.map(e => (
                                                                <div className='d-flex flex-column align-items-center p-2'>
                                                                    <Image src={e.img} style={{ width: "40px" }} alt={`${e.name} logo`} />
                                                                    <span style={{
                                                                        width: "80px",
                                                                        wordBreak: "keep-all",
                                                                        textAlign: "center"
                                                                    }} className='p-2'>{e.name}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="back">
                                                <Row>
                                                    <Col className='d-flex justify-content-around flex-wrap p-4'>
                                                        {
                                                            backLogo.map(e => (
                                                                <div className='d-flex flex-column align-items-center p-2'>
                                                                    <Image src={e.img} style={{ width: "40px" }} alt={`${e.name} logo`} />
                                                                    <span style={{
                                                                        width: "80px",
                                                                        wordBreak: "keep-all",
                                                                        textAlign: "center"
                                                                    }} className='p-2'>{e.name}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="design">
                                            <Row>
                                                    <Col className='d-flex justify-content-around flex-wrap p-4'>
                                                        {
                                                            designLogo.map(e => (
                                                                <div className='d-flex flex-column align-items-center p-2'>
                                                                    <Image src={e.img} style={{ width: "40px" }} alt={`${e.name} logo`} />
                                                                    <span style={{
                                                                        width: "80px",
                                                                        wordBreak: "keep-all",
                                                                        textAlign: "center"
                                                                    }} className='p-2'>{e.name}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="other">
                                            <Row>
                                                    <Col className='d-flex justify-content-center flex-wrap p-4'>
                                                        {
                                                            otherLogo.map(e => (
                                                                <div className='d-flex flex-column align-items-center  p-2'>
                                                                    <Image src={e.img} style={{ width: "40px" }} alt={`${e.name} logo`} />
                                                                    <span style={{
                                                                        width: "80px",
                                                                        wordBreak: "keep-all",
                                                                        textAlign: "center"
                                                                    }} className='p-2'>{e.name}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </div>
                                </div>
                            </Tab.Container>

                        </div>
                    </div>

                </div>

            </div>
            <Image className='background-image-left' src={colorSharp}
            />
        </section>)
}
