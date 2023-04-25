import React, { useState } from 'react'
import contactImage from "../assets/img/contact-img.svg"
import pandaImage from "../assets/img/contact-panda.png"
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
export default function Contact() {
    const formInitialData = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: ''
    }
    const [formData, setformData] = useState(formInitialData);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({})
    const onUpdateForm = (category, value) => {
        setformData({ ...formData, [category]: value })
    }

    const handleSubmit = async () => {
        e.preventDefault();
        setButtonText('Sending...')
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(formData)
        })
        setButtonText('Send');
        let result = response.json();
        setformData(formInitialData)
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' })

        }
        else {
            setStatus({ success: true, message: 'Something went wrong, please try again later.' })

        }

    }
    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className='contact-images'>
                        <Image src={contactImage} />
                        <Image src={pandaImage} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type='text' value={formData.firstName} placeholder='First Name' onChange={(e) => onUpdateForm('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type='text' value={formData.lastName} placeholder='Last Name' onChange={(e) => onUpdateForm('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type='text' value={formData.email} placeholder='Email Address' onChange={(e) => onUpdateForm('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type='text' value={formData.phone} placeholder='Phone No.' onChange={(e) => onUpdateForm('phone', e.target.value)} />
                                </Col>
                                <Col className="px-1">
                                    <textarea rows={6} value={formData.value} placeholder='Message' onChange={(e) => onUpdateForm('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {status.message && <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
