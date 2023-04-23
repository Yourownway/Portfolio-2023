import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

export function NavBar() {
    const [activeLink, setActiveLink] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [toggleClicked, setToggleClicked] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
        }
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const onUpdateActiveLink = (value) => setActiveLink(value);
    const handleToogleClick = (e) => {
        let button;
        e.target.tagName === "BUTTON" ? button = e.target : button = e.target.parentNode;
        if (button.classList.contains("collapsed")) {
            setToggleClicked(true)
        }
        else setToggleClicked(false)
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"><Image src={logo} alt='Logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded={toggleClicked} onClick={handleToogleClick} >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='#'><Image src={navIcon1} alt="" /></a>
                                <a href='#'><Image src={navIcon2} alt="" /></a>
                                <a href='#'><Image src={navIcon3} alt="" /></a>

                            </div>
                            <button className='vvd' > <span>Let's Connect</span></button>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
