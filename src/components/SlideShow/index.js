import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

import {
    Container,
    Row,
    Col,
    Carousel,
} from "react-bootstrap";
import {
    Image,
    SLIDE,
    Text
} from "./slideShow.style";


const SlideShow = () => (
    <Carousel variant="dark">
        <Carousel.Item>
            <SLIDE>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Tilt>
                            <Image
                                src={"https://media-exp1.licdn.com/dms/image/C4D03AQFPSMIG5c9_0Q/profile-displayphoto-shrink_400_400/0/1557581314799?e=1645660800&v=beta&t=JlZPFKqI-hjxm7wUnkSLoau3xsbVaZH_jozUrFTHOkw"}
                                className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                    <Col md={4}></Col>

                    <Col md={12}>
                        <Text>
                            <h2 className='purple'>arsalan mirbozorgi
                            </h2>
                            <h6>Senior Java Back end Developer at Medrick FZE</h6>
                        </Text>
                    </Col>

                    <Col md={2}></Col>
                    <Col md={8}>
                        <Text>
                            <p style={{marginBottom: 7 + '%'}}>Ali is a person with great skills and profound experience
                                in modern development solutions. He thinks on the cutting edge of programming, Excellent
                                and result-driven. Works towards maximal customer satisfaction. He is ready to deal with
                                difficult situations and solve problems on time. I was his master and co-worker as well.
                                Through the years, we worked on various projects at Medrick and I was impressed by his
                                manner of doing a great job. I absolutely would recommend him.</p>
                        </Text>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </SLIDE>
        </Carousel.Item>
        <Carousel.Item>
            <SLIDE>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Tilt>
                            <Image src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                    <Col md={4}></Col>

                    <Col md={12}>
                        <Text>
                            <p>First slide label 2</p>
                        </Text>
                    </Col>

                    <Col md={2}></Col>
                    <Col md={8}>
                        <Text>
                            <p style={{marginBottom: 7 + '%'}}>Nulla vitae elit libero, a pharetra augue mollis
                                interdum. Nulla
                                vitae elit libero, a
                                pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis</p>
                        </Text>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </SLIDE>
        </Carousel.Item>
        <Carousel.Item>
            <SLIDE>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Tilt>
                            <Image src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                    <Col md={4}></Col>

                    <Col md={12}>
                        <Text>
                            <p>First slide label 3</p>
                        </Text>
                    </Col>

                    <Col md={2}></Col>
                    <Col md={8}>
                        <Text>
                            <p style={{marginBottom: 7 + '%'}}>Nulla vitae elit libero, a pharetra augue mollis
                                interdum. Nulla
                                vitae elit libero, a
                                pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis</p>
                        </Text>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </SLIDE>
        </Carousel.Item>
    </Carousel>

)


export default SlideShow;