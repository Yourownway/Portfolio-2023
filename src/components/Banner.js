import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImage from "../assets/img/header-img.png"
import pdfLogo from "../assets/img/pdf-logo.svg"
export default function Banner() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('CVdev.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CVdev.pdf';
                alink.click();
            })
        })
    }
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [loopNumb, setloopNumb] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)

        }
    }, [text])

    const tick = () => {
        let i = loopNumb % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDeleting) setDelta(prev => prev / 2)
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        }
        else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setDelta(500)
            if (loopNumb >= toRotate.length - 1) {
                setloopNumb(0)
            }
            else {
                setloopNumb(loopNumb + 1)
            }
        }
    }  
    
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1 className='txt-rotate'>{`Hi I'm Lorris `}<span className='wrap'>{text}</span></h1>
                    <p>Lorem ipsum is symply </p>
                    <button onClick={onButtonClick}>Get my Resume <Image className='pdf-logo'  src={pdfLogo}/> </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <Image className='header-img' src={headerImage} alt="Header image"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
