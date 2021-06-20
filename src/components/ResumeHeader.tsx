import React from 'react';
import { Col, Container, Row } from "react-bootstrap"
import "../css/ResumeHeader.css";

export default function ResumeHeader(props: any) {
    return (<Container className="header">
        <Row className={"d-flex align-items-center"}>
            <Col md={6} className="text-left my-3">
                {/* <Container className=""> */}
                <Container className="display-name h3 font-weight-bold">
                    <span className={"display-last-name"}>BOLLEPALLI</span>
                    <br />
                    <span className={"text-primary display-first-name"}>NAVEEN KUMAR</span>
                </Container>
                {/* </Container> */}
            </Col>
            <Col md={6} className="text-right my-3">
                {/* <Container className=""> */}
                <Container className="display-info font-weight-bold">
                    Principal Software Developer
                </Container>
                <Container className="">
                    <a href="mailto:naveenbollepalli@yahoo.com">
                        E .  naveenbollepalli@yahoo.com
                    </a>
                </Container>
                <Container className="">
                    <a href="tel:+918801744957"> P .  +91 88017 44957 </a>

                </Container>
                {/* </Container> */}
            </Col>
        </Row>
    </Container>)
}