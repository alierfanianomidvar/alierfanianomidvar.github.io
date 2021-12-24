import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import {Image, Text, TopHr} from "./Quotes.style";


function Quotes() {
    return (
        <section>
            <Container>
                <Container>
                    <TopHr/>
                    <Row>
                        <Col md={3}>
                            <div style={{float: 'right' + ' !important'}}>
                                <Image src="https://img.icons8.com/color/96/000000/gandalf.png"/>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Text>
                                “All we have to decide is what to do with the time that is given us.”
                                <br/>– Gandalf, The Fellowship of the Ring
                            </Text>
                        </Col>
                        <Col md={3}>
                            <div style={{float: 'right' + ' !important'}}>
                                <Image src="https://img.icons8.com/color/96/000000/gandalf.png"/>
                            </div>
                        </Col>
                    </Row>
                    <TopHr/>
                </Container>
            </Container>
        </section>
    );
}

export default Quotes;