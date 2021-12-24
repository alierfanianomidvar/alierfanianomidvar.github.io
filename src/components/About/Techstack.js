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

import {
    Circle,
    Wrapper
} from "./TechStack.style";

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
        <Wrapper>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>

                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}
                >
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <DiJava/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                         <DiPython/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <SiSpring/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <DiJavascript/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <DiReact/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <DiMongodb/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <DiPostgresql/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <DiSqllite/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <DiGit/>
                    </Circle>
                </Col>

            </Row>
        </Wrapper>
    );
}

export default Techstack;
