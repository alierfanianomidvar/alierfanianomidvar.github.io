import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiLinux,
    SiJetbrains,
    SiJupyter,
    SiPostman,
    SiKibana,
} from "react-icons/si";
import {
    Circle,
    Wrapper
} from "./TechStack.style";

function Toolstack() {
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
                        <SiLinux/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                        <SiJetbrains/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <SiJupyter/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <SiPostman/>
                    </Circle>
                </Col>
                <Col className="teck-stack" xs sm={{span: 4}} md={{span: 3}}
                     lg={{span: 2}} xl={{span: 1}} style={{marginRight: 20 + 'px'}}>
                    <Circle onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                        <SiKibana/>
                    </Circle>
                </Col>
            </Row>
        </Wrapper>
    );
}

export default Toolstack;
