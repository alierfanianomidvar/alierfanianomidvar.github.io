import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {CgCPlusPlus} from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit, DiJava, DiJavascript, DiHtml5, DiPostgresql, DiSqllite,
} from "react-icons/di";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaJava
} from "react-icons/fa";
import {
    SiLinux,
    SiVisualstudiocode,
    SiJupyter,
    SiPostman,
    SiHeroku,
    SiSpring,
} from "react-icons/si";

import {Circle} from "./TechStack.style";

function Techstack() {

    const [hover, setHover] = useState(false);

    const handleMouseEnter = e => {
        e.target.style.background = "#232138";
        e.target.style.color = "white";
        e.target.style.fontSize = 1.5 + "rem";
        setHover(true);

    }
    const handleMouseLeave = e => {
        e.target.style.background = "white"
        e.target.style.color = "#243138";
        setHover(false);
        e.target.style.fontSize = "2.5rem";

    }

    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>

            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}
            >
                <Circle onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                       >
                    {hover ? "Java" : <DiJava />}

                </Circle>
            </Col>
            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                <Circle>
                    <DiPython/>
                </Circle>
            </Col>
            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                <Circle>
                    <SiSpring/>
                </Circle>
            </Col>
            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                <Circle>
                    <DiJavascript/>
                </Circle>
            </Col>
            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                <Circle>
                    <DiReact/>
                </Circle>
            </Col>
            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                <Circle>
                    <DiMongodb/>
                </Circle>
            </Col>
            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                <Circle>
                    <DiPostgresql/>
                </Circle>
            </Col>
            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                <Circle>
                    <DiSqllite/>
                </Circle>
            </Col>
            <Col xs={{span: 6}} sm={{span: 4}} md={{span: 3}}
                 lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                <Circle>
                    <DiGit/>
                </Circle>
            </Col>


            {/*<Col xs={4} md={2} className="tech-icons">
                <FaJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpring/>
            </Col>*/}
        </Row>
    );
}

export default Techstack;
