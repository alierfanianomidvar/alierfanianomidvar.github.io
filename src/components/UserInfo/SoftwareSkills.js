import React from "react";

import {
    Text,
    Hr, TopHr, BotHr
} from "./UserInfo.style";

import {
    Row,
    Col
} from "react-bootstrap";
import Techstack from "../About/Techstack";


const SoftwareSkills = () => (
    <Col md={12} className="">
        <Text>
            <h1 className="user-info-title" style={{fontSize: "1.6em"}}> Skills </h1>
            <TopHr/>
            <Row>
                <Col md={1}></Col>
                <Col md={11}>
                    <Techstack/>
                </Col>

            </Row>
        </Text>
    </Col>
)


export default SoftwareSkills;