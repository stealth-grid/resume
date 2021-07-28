import { Container, Row, Col } from "react-bootstrap"
import "../css/ResumeBody.css";
import DetailSection, { IDetailSection } from './DetailSection';

const SkillsList = [
    "React.JS",
    "Redux",
    "Realm JS",
    "React Native",
    "JavaScript",
    "HTML & CSS",
    "Rabbit MQ",
    "MongoDB",
    "Node JS",
    "C# ASP.NET",
    "Azure CI/CD",
    "Docker & Kubernetes"
]

const Education: IDetailSection = {
    title: "EDUCATION",
    content: [
        {
            contentTitle: "Bachelor in Technology, Electronics & Communication",
            details: (<span>
                Dhanekula Institute of Engineering and Technology
                <br />
                Years: 2011 - 2015, Percentage: <span className={"font-weight-bold"}>72.83%</span>
            </span>)
        },
        {
            contentTitle: "Standard XII / Intermediate.",
            details: (<span>
                Sri Chaitanya Jr College
                <br />
                Years: 2009 - 2011, Percentage: <span className={"font-weight-bold"}>70.8%</span>
            </span>)
        },
        {
            contentTitle: "Schooling / SSC",
            details: (<span>
                Railway Mixed High School
                <br />
                Year: 2009, Percentage: <span className={"font-weight-bold"}>64.16%</span>
            </span>)
        }
    ]
}

const Career: IDetailSection = {
    title: "WORK EXPERIENCE",
    content: [
        {
            contentTitle: "Hexagon Capability Center India - (Since Dec 2018)",
            details: (<>
                <span>
                    <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Mobile Server</span> - React.JS Application with Typescript & Redux integrated to DotNetCore 3.1 with WebAPI as backend, Integrated High Availablity MongoDB(Replica Set Configured with X.509 certification), RabbitMQ(Messaging Queue Integration), and Added support for Docker and Kubernetes deployment.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Dispatcher</span> - React.JS Application with Typescript & Redux. Also added Support for RocketChat Messaging server to be able to deploy in Windows servers. Modified The Chat Server to expose underlying APIs & database for functionality enhancements.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Mobile</span> - React Native, with Redux and RealmJS. Added the following features support to the product - Firebase Messaging/RabbitMQ Messaging(MQTT), Background location tracking, Map Integration, RocketChat Messaging Integration, and many more.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "Tata Consultancy Services - (Oct 2015 - Nov 2018)",
            details: (<>
                <span>
                    <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>TCS</span> E-Agent Application - Cordova application with React & Redux, HTML5, CSS3 & JavaScript.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>TCS</span> In-house Project - React Native, Redux, Realm JS, JavaScript (ES6), and Node.js. Prototyped applications for WebRTC communications using PWA, Cordova & React Native.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>PNB MetLife Insurance Ltd</span> (Insurance) - React.JS, HTML, CSS, JavaScript with C# (Web services) and ESB tool - Microsoft BizTalk Server 2010.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>Al Mashreq Bank</span> (Banking and Financial Services) - Visual Basics Application Developer.
                </span>
                <br />
            </>)
        }
    ]
}

const Projects: IDetailSection = {
    title: "PROJECTS",
    content: [
        {
            contentTitle: "Area and Power Efficient SQRT Carry-select Adder",
            details: (<>
                <span>
                    Carry Select Adder (CSLA) is one of the fastest adders used in many Data Processors to perform fast arithmetic functions. The structure of conventional CSLA has been modified to achieve low power and area. This work proposes the development of improved CSLA & SQRT CSLA from conventional CSLA and the realization of a digital filter using this improved SQRT CSLA. The 4-bit & 16-bit Carry-Select Adders (CSLA) and 16bit SQRT CSLA using BEC logic are designed & power and area analysis is done using 0.18um CMOS technology.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "Employee Recruitment System - TCS ILP",
            details: (<>
                <span>
                    Mini Project - As part of Training and Assessment, developed an Employee eRecruitment application using ASP.NET for UI, C# as Middleware, and Microsoft SQL Server as Database. Have implemented UI in ASP.NET integrating CSS & Bootstrap to provide the user an appealing design. For front-end validation and event handling JavaScript has been used. The functionality of the application has been written in a three-tier architecture to separate the UI, Implementation, and Data.
                </span>
                <br />
            </>)
        }
    ]
}

const Skills: IDetailSection = {
    title: "SKILLS",
    rawContent: (<Row className={"mb-4 px-3"}>
        {SkillsList.map((skill: string) => <Col md={3} key={skill} className={"font-weight-bold text-center"}><span className={"bg-light shadow-sm card border-0 mb-2"}>{skill}</span></Col>)}
    </Row>)
}

const AdditiveSkills: IDetailSection = {
    title: "ADDITIVE SKILLS",
    content: [
        {
            contentTitle: "Point of sale application - (Electron + React.JS + MongoDB)",
            details: (<>
                <span>
                    A standalone Windows/Mac/Linux application to handle Point Of Sale operations, Integrated with EFTPOS, Till machines(Limited support) & POS Thermal Printers. User Interface and functionality developed in React.JS and Mongo DB for Data Storage.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "A Hostable Resume",
            details: (<>
                <span>
                    A Hostable Resume Template generated using React JS. To provide Brief and Detailed versions. Currently hosted using Git Pages and Auto deployed using Git Actions.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "Home controlling device using Raspberry Pi 3 Model B",
            details: (<>
                <span>
                    Working On a Smartphone Controlled Home automation Project, Raspberry Pi as the control server using Node JS and Express JS. Actuators and relays controlled over GPIO of Raspberry Pi. Cross-platform mobile app for over the internet control, using React Native.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "Activity Logger App",
            details: (<>
                <span>
                    Cross-platform logger application to track the daily efforts and activities recorded either as Text, audio, or Video, Providing the convenience of interchangeability, to listen to text (text to speech), or to read the audio (speech to text).
                </span>
                <br />
            </>)
        }
    ]
}

const Workshops: IDetailSection = {
    title: "WORKSHOPS",
    content: [
        {
            contentTitle: "Breakthrough Innovation. University of California, Berkeley",
            details: (<>
                <span>
                    As part of a Cross college initiative, have attended a 2-week e-Workshop Breakthrough Innovation conducted by the University of California, Berkeley. And did a mini project Antitheft-Alarm system as part of the program.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "PCB design of electronic circuits under enhanced interaction with industry program of Indo Global Services",
            details: (<>
                <span>
                    Introduced to the practical approach of VLSI circuit design using simulation technology to develop the front end and back end models of an integrated chip. Learned to imprint the designed model on a hardware chip and performing the connections and the etching process.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "Nation Building through personality development and career planning",
            details: (<>
                <span>
                    In-depth coverage of the art of living, soft skills, communication skills, equanimity and teamwork, self-confidence, corporate etiquette, problem-solving abilities, and secrets of success.
                </span>
                <br />
            </>)
        }
    ]
}

export default function ResumeBody(props: any) {

    return (
        <Container fluid className="body px-0">
            <Container fluid className="my-2 bg-light rounded shadow-sm p-3 mx-3 w-auto quote-text">
                With learning passion to implement what was learned and to achieve something of great vertical extent, making a path for self and others to lead life simpler.
            </Container>
            <DetailSection detail={Career} />
            <DetailSection detail={Skills} />
            <DetailSection detail={AdditiveSkills} />
            <DetailSection detail={Education} />
            <DetailSection detail={Projects} />
            <DetailSection detail={Workshops} />
        </Container>)
}
