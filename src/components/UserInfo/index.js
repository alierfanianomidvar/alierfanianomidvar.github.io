import React from "react";

import {
    Wrapper,
    Content,
    Vl
} from "./UserInfo.style";
import {Container, Row, Col} from "react-bootstrap";
import Techstack from "../About/Techstack";
import AboutMe from "./aboutMe";
import Education from "./Education";
import SoftwareSkills from "./SoftwareSkills";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import SlideShow from "../SlideShow";


const UserInfo = ({show}) => (
    <Wrapper>
        <Content>
            <Container>
                <Row>
                    <AboutMe/>
                    <Education/>
                    <SoftwareSkills/>
                    <Projects/>
                    <WorkExperience/>
                </Row>
            </Container>
        </Content>
    </Wrapper>
);


export default UserInfo;