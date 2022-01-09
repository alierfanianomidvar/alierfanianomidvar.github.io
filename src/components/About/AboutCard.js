import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <span className="orange">Ali Erfanian Omidvar </span>
                        <br/>I am a junior developer pursuing opportunity that will allow me to <b className="purple">utilize
                        my problem solving skills </b>
                        and attention to detail to further develop my abilities in the field of
                        <b className="purple"> computer engineering and teamwork.</b>
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Playing Video Games (LOL PLayer 😎)
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Watching or reading lord of the rings (<b className="orange">BIG TOLKIEN
                            FAN</b>)
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Travelling
                        </li>
                    </ul>

                    <p style={{marginBlockEnd: 0, color: "rgb(155 126 172)"}}>
                        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                        to do what you believe is great work. And the only way to do great work is to love what you
                        do!"{" "}
                    </p>
                    <footer className="blockquote-footer">Steve jobs</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
