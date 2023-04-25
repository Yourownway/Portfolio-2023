import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import Image from 'next/image'
import colorSharp2 from "../assets/img/color-sharp2.png"
import projectImg1 from "../assets/img/project-img1.png"
import projectImg2 from "../assets/img/project-img2.png"
import projectImg3 from "../assets/img/project-img3.png"
import TimeLine from './timeLine/TimeLine'
import wave from "../assets/img/wave.svg"

export default function Projects() {

    const projects = [
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg1
        },
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg2
        },
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg3
        },
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg1
        },
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg2
        },
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg3
        },
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg1
        },
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg2
        },
        {
            title: "Buisiness StartUp",
            description: "Design & Development",
            imgUrl: projectImg3
        },


    ]

    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <p>Lorem ipsum is simply dummy text of the printing</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Training </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        
Professional 
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) =>
                                                <ProjectCard key={index} {...project} />
                                            )
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Content>
                                <Tab.Pane eventKey="second">
                                <Row>
                                    <TimeLine/>
                                </Row>
                                </Tab.Pane>
                                </Tab.Content>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
         {/*    <Image className='background-image-right' src={colorSharp2} /> */}
         <Image src={wave} className='background-wave' />
        </section>
    )
}
