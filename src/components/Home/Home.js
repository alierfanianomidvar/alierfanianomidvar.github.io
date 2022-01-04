import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import homeLogo from "../../Assets/Group 1 copy 1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {AiOutlineDownload} from "react-icons/ai";

import {useFetchProjects} from "../../Hooks/useFetchProjects";
import {saveAs} from "file-saver";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    Span,
    Div,
    Btn,
    MyIamge,
    TopHr
} from "./Home.style";

function Home() {
    
    const saveFile = () => {
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
        toast('Tnx for downloading my cv!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

  

    return (
        <Div>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={{span: 7, order: 1}} xs={{span: 12, order: 2}} className="home-header">
                            <Div>

                                <h1 style={{paddingBottom: 15}} className="heading">
                                    Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                                </h1>

                                <h1 className="heading-name">
                                    I'M
                                    <strong className="main-name">
                                        <Span> A</Span>li
                                        <Span> E</Span>rfanian
                                        <Span> O</Span>midvar</strong>
                                </h1>

                                <div style={{paddingLeft: 46, paddingTop: 10}} className="type-writer">
                                    <Type/>
                                </div>
                             
                                <div className="cv-button" style={{paddingLeft: 42, paddingTop: 20}}>
                                    <button type="button" className="btn btn-default" onClick={saveFile}>
                                        <AiOutlineDownload/>
                                        Download CV
                                    </button>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </div>
                            </Div>

                        </Col>

                        <Col md={{span: 5, order: 2}} xs={{span: 12, order: 1}} style={{paddingBottom: 20}}>
                            <MyIamge>
                                <img src={homeLogo} alt="home pic" className="img-fluid my-img"/>
                            </MyIamge>
                        </Col>

                    </Row>
                </Container>

            </Container>

            <Home2/>
        </Div>
    );
}

export default Home;
