import Image from 'next/image'
import React from 'react'
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <Image src={logo} alt='logo' />
                    </Col>
                    <Col sm={6} className="text-end">
                        <div className='social-icon'>
                            <a href='#'><Image src={navIcon1} alt="" /></a>
                            <a href='#'><Image src={navIcon2} alt="" /></a>
                            <a href='#'><Image src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}
