import React from 'react';
import { Container, Col, Row, Figure } from "react-bootstrap"
import "../css/DetailSection.css";
import DividerPNG from "../assets/divider.png";

export default function DetailSection(props: { sectionText: string, [key: string]: any }) {
    const { sectionText, children } = props || {};
    return (
        <Container className="detail-section text-left p-4">
            <Row>
                <Col lg={2} className={"text-primary font-weight-bold mb-3"}>
                    {sectionText}
                </Col>
                <Col lg={10} className={""}>
                    {children}
                    <Figure.Image src={DividerPNG} className={"divider-img"} alt={"DividerPNG"}></Figure.Image>
                </Col>
            </Row>
        </Container>)
}

export function DetailContent(props: { headerText: string, [key: string]: any }) {
    const { headerText, children } = props || {};
    return (<Container className={"mb-4"}>
        <span className={"font-weight-bold"}>{headerText}</span>
        <br />
        {children}
    </Container>);
}