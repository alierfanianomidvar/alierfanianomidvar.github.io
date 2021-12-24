import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import homeLogo from "../../Assets/Group 1 copy 1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineDownload } from "react-icons/ai";

import {useFetchProjects} from "../../Hooks/useFetchProjects";
import {Div, Btn} from "./Home.style";

function Home() {


    return (
        <Div>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={{span: 7, order: 1}} xs={{span: 12, order: 2}} className="home-header">
                            <h1 style={{paddingBottom: 15}} className="heading">
                                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Ali Erfanian Omidvar</strong>
                            </h1>

                            <div style={{paddingLeft: 46, paddingTop: 10}} className="type-writer">
                                <Type/>
                            </div>

                            <div className="cv-button" style={{paddingLeft: 42, paddingTop: 20}}>
                                <button type="button" className="btn btn-default">
                                    <AiOutlineDownload />
                                    Download CV
                                </button>
                            </div>

                        </Col>

                        <Col md={{span: 5, order: 2}} xs={{span: 6, order: 1}} style={{paddingBottom: 20}}>
                            <img src={homeLogo} alt="home pic" className="img-fluid"/>
                        </Col>


                    </Row>
                </Container>

            </Container>

            <Home2/>
        </Div>
    );
}

export default Home;
