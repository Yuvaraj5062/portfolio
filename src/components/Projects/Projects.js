import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chw from "../../Assets/Projects/chw.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import goapp from "../../Assets/Projects/goapp.jpg";
import tripworkz from "../../Assets/Projects/tripworkz.jpg";
import ats from "../../Assets/Projects/ats.webp";
import wcm from "../../Assets/Projects/wcm.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripworkz}
              isBlog={false}
              title="Trip Werkz (Singapore)"
              description="Tripwerkz is Asia’s leading travel technology company that provides online travel booking services such as hotel reservation, airline ticket, packaged and customized tours and other corporate travel management applications."
              demoLink="https://test.archesoftronix.in/#/auth/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wcm}
              isBlog={false}
              title="Walt Capital Management (South Africa)"
              description="Walt Capital is a Capital Management system which provides a complete solution to your investment and fund management worries. You can manage all your funds invested, by creating multiple portfolios and managing them from one place."
              // ghLink=""
              demoLink="https://wcmfe-dev.archesoftronix.in/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goapp}
              isBlog={false}
              title="Go App"
              description="GoApp is a location tracking system using one device of location send, in this project we have one mobile app & dashboard app from a website. User can track vehicle by validate & track location device."
              // ghLink=""
              demoLink="https://goappfe.archesoftronix.in/#/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chw}
              isBlog={false}
              title="CHW (Click-Heal-Weal)"
              description="CHW is revolutionizing healthcare by enabling consumers to find the best doctors, book instant appointments, consultations, and make better, more informed health decisions."
              // ghLink=""
              demoLink="https://chwfe-qa.archesoftronix.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ats}
              isBlog={false}
              title="ATS"
              description="ATS is the Payroll System to Manage Employees Salary slip, Attendance, Leave management, Holiday management, Manage Users with its roles, organization Setup, Activity Module, Sales Management, Client Sales Management, and Appraisal
              Each part describes the module that showcases specific functionality and provides instructions   on how to manage & use these features. We are sure you will find the Website Application easy to use. Let's get started!."
              // ghLink=""
              demoLink="https://ats.archesoftronix.in/#/account/login" 
      
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
