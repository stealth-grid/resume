import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import "../css/ResumeBody.css";
import DetailSection, { DetailContent } from './DetailSection';

const mySkills = ["React Native",
    "ReactJS",
    "Redux",
    "Realm JS",
    "JavaScript",
    "HTML & CSS",
    "Rabbit MQ",
    "MongoDB",
    "Node JS",
    "C# ASP.NET",
    "Azure CI/CD",
    "Docker & Kubernetes"
]

export default function ResumeBody(props: any) {

    return (
        <Container className="body px-0">
            <Container className="my-2 bg-light rounded shadow-sm py-4 px-3 quote-text">
                With learning passion to implement what was learned and to achieve something of great vertical extent, making a path for self and others to lead life simpler.
            </Container>
            <DetailSection sectionText={"EDUCATION"}>
                <DetailContent headerText={"Bachelor in Technology, Electronics & Communication"}>
                    <span>
                        Dhanekula Institute of Engineering and Technology
                        <br />
                        Years: 2011 - 2015, Percentage: <span className={"font-weight-bold"}>72.83%</span>
                    </span>
                </DetailContent>
                <DetailContent headerText={"Standard XII / Intermediate."}>
                    <span>
                        Sri Chaitanya Jr College
                        <br />
                        Years: 2009 - 2011, Percentage: <span className={"font-weight-bold"}>70.8%</span>
                    </span>
                </DetailContent>
                <DetailContent headerText={"Schooling / SSC"}>
                    <span>
                        Railway Mixed High School
                        <br />
                        Year: 2009, Percentage: <span className={"font-weight-bold"}>64.16%</span>
                    </span>
                </DetailContent>
            </DetailSection>
            <DetailSection sectionText={"WORK EXPERIENCE"}>
                <DetailContent headerText={"Hexagon Capability Center India - (Since Dec 2018)"}>
                    <span>
                        <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Mobile</span> - Working on React Native, with Redux and RealmJS. Added the following features support to the product - Firebase Messaging/RabbitMQ Messaging(MQTT), Background location tracking, Map Integration, RocketChat Messaging Integration and many more.
                    </span>
                    <br />
                    <span>
                        <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Mobile Server</span> - Working on ASP.NET Core 3.1 MVC (C#) with WebAPI powered with React, Integrated High Availablity MongoDB(Replica Set Configured with X.509 certification), RabbitMQ(Messaging Queue Integration) and Added support for Docker and Kubernetes deployent
                    </span>
                    <br />
                    <span>
                        <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Dispatcher</span> - Added Support for RocketChat Messaging server to be able to deploy in Windows servers. Modified The Chat Server to expose underlying apis & database for functionality enhancments
                    </span>
                    <br />
                    <span>
                        <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Mobile Administrator</span> - Worked on Java Spring Application with micro services in containerized environment.
                    </span>
                    <br />
                </DetailContent>
                <DetailContent headerText={"Tata Consultancy Services - (Oct 2015 - Nov 2018)"}>
                    <span>
                        <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>Al Mashreq Bank</span> (Banking and Financial Services) - Worked on Visual Basics Application Developer.
                    </span>
                    <br />
                    <span>
                        <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>PNB MetLife Insurance Ltd</span> (Insurance) - Worked on C# (Web services) & SQL developer and ESB tool - Microsoft BizTalk Server 2010.
                    </span>
                    <br />
                    <span>
                        <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>TCS</span> In house Project - Worked on React Native, Redux, Realm JS, JavaScript (ES6) and Node.js. Prototyped applications for WebRTC communications using PWA, Cordova & React Native
                    </span>
                    <br />
                </DetailContent>
            </DetailSection>
            <div className="pagebreak"> </div>
            <DetailSection sectionText={"PROJECTS"}>
                <DetailContent headerText={"Area and Power Efficient SQRT Carry-select Adder"}>
                    <span>
                        Carry Select Adder (CSLA) is one of the fastest adders used in many Data Processors to perform fast arithmetic functions. The structure of conventional CSLA has been modified to achieve low power and area. This work proposes the development of improved CSLA & SQRT CSLA from conventional CSLA and realization of digital filter using this improved SQRT CSLA. The 4-bit & 16-bit Carry-Select Adders (CSLA) and 16bit SQRT CSLA using BEC logic are designed & power and area analysis is done using 0.18um CMOS technology.
                    </span>
                    <br />
                </DetailContent>
                <DetailContent headerText={"Employee Recruitment System - TCS ILP"}>
                    <span>
                        Mini Project - As part of Training and Assessment, developed an Employee eRecruitment application using ASP.NET for UI, C# as Middleware and Microsoft SQL server as Database. Have implemented UI in ASP.NET integrating CSS & Bootstrap to provide user an appealing design. For front-end validation and event handling JavaScript has been used. The functionality of the application has been written in a three tier architecture to separate the UI, Implementation and the Data.
                    </span>
                    <br />
                </DetailContent>
            </DetailSection>
            <DetailSection sectionText={"SKILLS"}>
                <Row className={"mb-4 px-3"}>
                    {mySkills.map((skill: string) => <Col md={3} key={skill} className={"font-weight-bold text-center"}><span className={"bg-light shadow-sm card border-0 mb-2"}>{skill}</span></Col>)}
                </Row>
            </DetailSection>
            <DetailSection sectionText={"ADDITIVE SKILLS"}>
                <DetailContent headerText={"Point of sale application - (Electron + React + MongoDB)"}>
                    <span>
                        A standalone Windows/Mac/Linux application to handle Point Of Sale operations, Integrated with EFTPOS, Till machines(Limited support) & POS Thermal Printers. User Interface and functionality developed in React and Mongo DB for Data Storage.
                    </span>
                    <br />
                </DetailContent>
                <DetailContent headerText={"A Hostable Resume"}>
                    <span>
                        The skills and experience mentioned in a resume are to breif on the major technoligies one has worked on. A developers work alot more than what he can present in a Resume. The goal of this Concept is to fill that gap. To provide a hostable resume template, which can be extracted either as a brief or can be navigated to full length detailed skill set.
                    </span>
                    <br />
                </DetailContent>
                <DetailContent headerText={"Home controlling device using Raspberry PI 3 Model B"}>
                    <span>
                        Working On a Smartphone Controlled Home automation Project, Raspberry PI as the control server using Node JS and Express JS. Actuators and relays controlled over GPIO of Raspberry PI. Cross platform mobile app for over the internet control, using React Native.
                    </span>
                    <br />
                </DetailContent>
                <DetailContent headerText={"Activity Logger App"}>
                    <span>
                        Cross platform logger application to track the daily efforts and activities recorded either as Text, audio or Video, Providing a convenience of interchangeability, to listen to text (text to speech) or to read the audio (speech to text).
                    </span>
                    <br />
                </DetailContent>
            </DetailSection>
            <div className="pagebreak"> </div>
            <DetailSection sectionText={"WORKSHOPS"}>
                <DetailContent headerText={"Breakthrough Innovation. University of California, Berkeley"}>
                    <span>
                        As part of Cross college initiative, have attended a 2 week e-Workshop Breakthrough Innovation conducted by University of California, Berkeley. And did a mini project Antitheft-Alarm system as part of the program.
                    </span>
                    <br />
                </DetailContent>
                <DetailContent headerText={"PCB design of electronic circuits under enhanced interaction with industry program of Indo Global Services"}>
                    <span>
                        Introduced to the practical approach of VLSI circuit design using simulation technique to develop the front end and back end models of an integrated chip. Learned to imprint the designed model on a hardware chip and performing the connections and the etching process.
                    </span>
                    <br />
                </DetailContent>
                <DetailContent headerText={"Nation Building through personality development and career planning"}>
                    <span>
                        An in-depth coverage of art of living, soft skills, communication skills, equanimity and team WORK, self-confidence, corporate etiquette, problem solving abilities and secrets of success
                    </span>
                    <br />
                </DetailContent>
            </DetailSection>
        </Container>)
}
