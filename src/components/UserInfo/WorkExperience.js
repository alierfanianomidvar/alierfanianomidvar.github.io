import React from "react";

import {
    Text,
    TopHr,
    BotHr
} from "./UserInfo.style";

import {
    Row,
    Col
} from "react-bootstrap";

import {Vl} from "./UserInfo.style";

import Buttom from "../buttom/index";


const WorkExperience = () => {
    return (
        <Col md={12} className="">

            <Text>
                <h1 className="user-info-title" style={{fontSize: "1.6em"}}> WORK EXPERIENCE </h1>
                <TopHr/>
                <Row>
                    <>
                        <Col md={1}><Vl></Vl></Col>
                        <Col md={11}>
                            <Row>
                                <Col md={12}>
                                    <p className="user-info-body"><b className="purple"> &#9677; </b>
                                        <b> Backend developer and frontend developer at Medrick game studio  September
                                            2019 –
                                            April 2021
                                        </b>
                                    </p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        Development: Work with Java, spring framework, PostgreSQL, MongoDB, Git, Angular
                                        and
                                        so
                                        on.
                                    </p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        Participation in designing and building new features.
                                    </p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        Refactoring older components and low-quality codes.
                                    </p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        Pair programming and reviewing other people’s code.
                                    </p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        Optimizing and scaling the system for better performance
                                    </p>
                                </Col>

                                <Col md={12}>
                                    <p className="user-info-body"><b className="purple"> &#9677; </b>
                                        <b> Manager of computer engineering scientific association, IUST, Tehran, Iran
                                        </b>
                                    </p>
                                </Col>

                                <Col md={12}>
                                    <p className="user-info-body"><b className="purple"> &#9677; </b>
                                        <b> Executive Manager of chillinwars Competitions (2018/2019).
                                        </b>
                                    </p>
                                </Col>

                                <Col md={12}>
                                    <p className="user-info-body"><b className="purple"> &#9677; </b>
                                        <b> Teacher Assistant
                                        </b>
                                    </p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        <b>Introduction to programming (with C++) Course</b>,
                                        Department of Computer engineering, IUST, Tehran, Iran, September - February,
                                        2018
                                    </p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        <b>Analysis and design of systems Course</b>,
                                        Department of Computer engineering, IUST, Tehran, Iran, spring 2019
                                    </p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        <b>Software engineering Course</b>,
                                        Department of Computer engineering, IUST, Tehran, Iran, September - February,
                                        Fall
                                        2018
                                        & Fall 2019 & Fall 2020
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </>
                </Row>
            </Text>
        </Col>
    );
}

export default WorkExperience;