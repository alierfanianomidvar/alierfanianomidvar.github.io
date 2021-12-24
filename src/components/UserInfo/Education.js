import React from "react";

import {
    Text,
    Hr, TopHr, BotHr, Vl
} from "./UserInfo.style";

import {
    Row,
    Col
} from "react-bootstrap";


const Education = () => (
    <Col md={12} className="">
        <Text>
            <h1 className="user-info-title" style={{fontSize: "1.6em"}}> Education </h1>
            <TopHr />
            <Row>
                <Col md={1}><Vl></Vl></Col>
                <Col md={11}>
                    <p className="user-info-body">
                        <Row>
                            <Col md={7}>B.Sc. in Computer Engineering</Col>
                            <Col className="myDate" md={5}>September 2016 – September 2021</Col>
                        </Row>
                        Iran University of Science and technology, Tehran, Iran
                    </p>
                </Col>
            </Row>
        </Text>
    </Col>
)


export default Education;