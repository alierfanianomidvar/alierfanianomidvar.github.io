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
                            <h2 className='purple'><strong>Arsalan Mirbozorgi</strong>
                            </h2>
                            <h6>Senior Java Back end Developer at Medrick FZE</h6>
                        </Text>
                    </Col>

                    <Col md={2}></Col>
                    <Col md={8}>
                        <Text>
                            <p className="slide-showw-text" style={{marginBottom: 7 + '%'}}>Ali is a person with great
                                skills and profound experience
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
                            <Image
                                src={"https://media-exp1.licdn.com/dms/image/C5603AQEnrP5BrQVDxw/profile-displayphoto-shrink_400_400/0/1625838260625?e=1646870400&v=beta&t=BlJIvxvVywXg6Hn-3AwFrdUk_UMeC-XG_rg0JgAvi24"}
                                className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                    <Col md={4}></Col>

                    <Col md={12}>
                        <Text>
                            <h2 className='purple'><strong>Behrooz Bahrameh</strong>
                            </h2>
                            <h6>Senior Software Engineer at GfK</h6>
                        </Text>
                    </Col>

                    <Col md={2}></Col>
                    <Col md={8}>
                        <Text>
                            <p style={{marginBottom: 7 + '%'}}>Ali is highly enthusiastic about his work. Energetic and
                                broad-minded programmer - that's him! he is a calm and kind team member with a great
                                passion for learning new technologies and contributing to projects; also I would like to
                                mention he is a good Leag of legend (LOL) player.
                                He learns quickly, and I would not doubt working with Ali again in the future.</p>
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
                            <Image
                                src={"https://media-exp1.licdn.com/dms/image/C4D03AQH74oN3G6NSxg/profile-displayphoto-shrink_100_100/0/1566593612311?e=1647475200&v=beta&t=hosWme9dXpTmXp4_ZqPFGMyJGtbCP23fL40Mjfo0BUQ"}
                                className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                    <Col md={4}></Col>

                    <Col md={12}>
                        <Text>
                            <h2 className='purple'><strong>Bardia Karimizandi</strong>
                            </h2>
                            <h6>Ms student of Data Science and Engineering</h6>
                        </Text>
                    </Col>

                    <Col md={2}></Col>
                    <Col md={8}>
                        <Text>
                            <p style={{marginBottom: 7 + '%'}}>Nulla vitae elit libero, a pharetra augue mollis
                                I have known Ali since we started our B.Sc. studies at Iran University of Science and
                                Technology. During these times that we have shared, I found Ali as a dependable,
                                conscientious, responsible, and well-organized, who is capable of generating new ideas
                                and working in a group as well as acting independently. There's no hard situations that
                                Ali can't handle. His high skills and dedication makes him really valuable asset to the
                                team and I strongly recommend Ali for back-end development positions.</p>
                        </Text>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </SLIDE>
        </Carousel.Item>
    </Carousel>

)


export default SlideShow;