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


const AboutMe = () => (
    <Col md={12} className="user-about-description">
        <Text>
            <h1 className="user-info-title" style={{fontSize: "1.6em"}}>LET ME <span
                className="purple"> INTRODUCE </span> MYSELF</h1>
            <TopHr/>
            <Row>
                <Col md={1}><Vl></Vl></Col>
                <Col md={11}>
                    <p className="user-info-body">
                        A great man once said, <b className="purple"> “Stay hungry, stay foolish.” </b>
                        That’s what I would say, if I wanted to
                        introduce myself in one sentence. But let’s get a little deeper, shall we?<br/>
                        I am a motivated software engineering graduate from
                        <b className="purple"> Iran University of Science and Technology </b>
                        and I have been in love with web developing since the very first day of becoming a software
                        engineering student. That is ironic, because I had literally no idea about software before
                        university and now it has become a huge part of my life.<br/>
                        I am a dedicated and responsible web developer who never gets tired of
                        <b className="purple"> writing codes </b> and  <b className="purple"> fixing
                        bugs</b>. Actually, that is what I live for!
                        Being eager to learn and going on new adventures are the most important parts of my character.
                        This is why you always see me behind my laptop  <b className="purple"> trying to learn something new or watching The
                        Lord of the Rings for the 100th time. :) </b>

                    </p>
                </Col>
            </Row>
        </Text>
    </Col>
)


export default AboutMe;