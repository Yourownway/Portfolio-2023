import Image from 'next/image'
import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import oscillo from "../../assets/img/oscillo.svg"
import mathLogo from "../../assets/img/math-logo.png"
import phone from "../../assets/img/training/phone.svg"
import code from "../../assets/img/training/code.svg"

export default function TimeLine() {
  return (

    <div className="timeline">
      <Tab.Container id="left-tabs-example" className="text-left" defaultActiveKey="first">
        <Row >
          <Col md={3} className='text-left'>
            <Nav variant="" className="flex-column align-items-center">
              <Nav.Item  >
                <Nav.Link className="timeline-tab" eventKey="first"><Col className='text-left'><span className='label' ><span>2021-2022</span> Formation Concepteur d'application  </span></Col></Nav.Link>
              </Nav.Item>
              <div className='timeline-split' />
              <Nav.Item >
                <Nav.Link className="timeline-tab" eventKey="second"><span>2020-2021</span> Formation développeur web et web mobile</Nav.Link>
              </Nav.Item>
              <div className='timeline-split' />
              <Nav.Item >
                <Nav.Link className="timeline-tab" eventKey="third"><span>2012-2013</span> Classe préparatoire aux grandes écoles </Nav.Link>
              </Nav.Item>
              <div className='timeline-split' />
              <Nav.Item >
                <Nav.Link className="timeline-tab" eventKey="fourth"> <span>2012</span> Baccalauréat STI Genie Electronique</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col   >
            <Tab.Content className="timeline-content" >
              <Tab.Pane eventKey="first"  >
                <Row className='timeline-card align-items-center py-5 border rounded '>
                  <Col className='text-center' >
                    <span  >Formation Concepteur d'application  </span>
                    <p >Janvier 2021</p><p> Simplon</p>
                  </Col>
                  <Col md={6} className="d-flex align-items-left flex-column ">  <p className='text-left'>
                    Titre professionnel
                    RNCP niveau II<br /> Alternance 12 mois
                    TypeScript, Architecture N-tiers, React Native
                  </p></Col>
                  <Col ><Image className='timeLine-logo' src={code} /><Image className='timeLine-logo' src={phone} /></Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second" >
                <Row className='timeline-card align-items-center py-5  border  rounded '>
                  <Col className='text-center'>

                    <span>Formation développeur web et web mobile</span>
                    <p >Mars 2020</p><p> Simplon</p>
                  </Col>
                  <Col md={6}>      <p className='text-left'>
                    Formation développeur web et web mobile <br></br>Titre
                    professionnel RNCP niveau III <br></br>Certification SEO Opquast
                    Avancé (810/1000)
                    <br></br> Certification Agile Scrum Kanban{" "}
                  </p></Col>
                  <Col><Image className='timeLine-logo' src={code} /><Image className='timeLine-logo' src={phone} /></Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third" >
                <Row className='timeline-card align-items-center py-5 border rounded mt-3'>
                  <Col className='text-center'>
                    <span >Classe préparatoire aux grandes écoles </span>
                    <p>2012-2013  </p><p>ENS Cachan</p>
                  </Col>
                  <Col md={6}>  <p>
                    Technique et Science de l'ingenieur: Math Sup, Electronique ,
                    Physiques , Mécanique , Chimie{" "}
                  </p></Col>
                  <Col><Image className='timeLine-logo' src={mathLogo} /></Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
          <Row  className='timeline-card align-items-center py-5 border rounded mt-3'>
            <Col className='text-center'>
              <span> Baccalauréat STI Genie Electronique</span>
              <p>2012</p><p>Lycée de la Marre Carré 77550</p>
            </Col>
            <Col md={6}> <p className='text-left'>
              Traitement des signaux électroniques.
              <br />Conception
              graphique d'un système électronique (Proteus, Kicad). <br />
              Réalisation d'un système électronique <br />Etude des
              composants, lectures des documentations techniques.<br />
              Logique combinatoire. ( Table de Karnaugh, Algèbre de Boole)
            </p></Col>
            <Col ><Image className='timeLine-logo' src={oscillo} /></Col>
          </Row>
        </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
       
      </Tab.Container>

  
    </div>
  )
}
