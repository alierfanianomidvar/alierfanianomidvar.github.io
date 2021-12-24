import React from "react";

import {
    Text,
    Vl,
    TopHr,
} from "./UserInfo.style";

import {
    Container,
    Row,
    Col
} from "react-bootstrap";


const Objective = () => (
    <Col md={12} className="user-about-description">
        <Text>
            <h1 className="user-info-title" style={{fontSize: "1.6em"}}>My <span
                className="purple"> OBJECTIVE </span>
            </h1>
            <TopHr/>
            <Row>
                <Col md={1}><Vl></Vl></Col>
                <Col md={11}>
                    <p className="user-info-body">
                        A opportunity that will allow me to <b className="purple">utilize my problem solving skills </b>
                        and attention to detail to further develop my abilities in the field of
                        <b className="purple"> computer engineering and teamwork. </b>
                    </p>
                </Col>
            </Row>
        </Text>
    </Col>
)


export default Objective;