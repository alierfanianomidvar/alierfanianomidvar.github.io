import React from "react";

import {
    Text,
    TopHr,
    BotHr, Vl
} from "./UserInfo.style";

import {
    Row,
    Col
} from "react-bootstrap";

import {
    FaGithub
} from "react-icons/fa";

import {useFetchProjects} from "../../Hooks/useFetchProjects";
import Buttom from "../buttom/index";


const Projects = () => {

    const {
        state,
        error,
        setLoadMore,
        loadMore
    } = useFetchProjects();

    console.log(state)
    if (error) return <div> something went roung </div>

    return (

        <Col md={12} className="">
            <Text>
                <h1 className="user-info-title" style={{fontSize: "1.6em"}}> Projects </h1>
                <TopHr/>
                <Row>
                    {state.projects.map(
                        project => (
                            <>
                                <Col md={1}><Vl></Vl></Col>
                                <Col md={11}>
                                    <p className="user-info-body"><b className="purple"> &#9677; </b>
                                        <b>{project.title}</b> ,
                                        {project.long_title}
                                    </p>
                                </Col>

                                <Col md={2}></Col>
                                <Col md={10}>
                                    <p className="user-info-body"><b className="purple"> &#9675; </b>
                                        {project.description}
                                    </p>
                                </Col>
                                {project.git ?
                                    <>
                                        <Col md={2}></Col>
                                        <Col md={10}>
                                            <p className="user-info-body"><b className="purple"> &#8618; </b>
                                                <FaGithub /> : {project.link}
                                            </p>
                                        </Col>
                                    </> : ""
                                }
                            </>
                        )
                    )
                    }
                    <Col md={12}>
                        <Buttom text={loadMore ? 'show less' : 'show more'}
                                callback={() => setLoadMore(!loadMore)}
                        />
                    </Col>
                </Row>
            </Text>
        </Col>
    );
}

export default Projects;