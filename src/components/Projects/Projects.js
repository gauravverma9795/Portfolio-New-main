import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ChatStream from "../../Assets/Projects/ChatStream.png";
import WeatherApp from "../../Assets/Projects/WeatherApp.jpg";
import Ecommerse from "../../Assets/Projects/Ecommerse.png";

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
              imgPath={WeatherApp}
              isBlog={false}
              title="AI Mock Interview App"
              description="Built and deployed a Full Stack AI Mock Interview App with Next.js, React, Drizzle ORM, Gemini AI, and Clerk.
Tailored questions to users based on their job roles, job descriptions, and experience.
"
              ghLink="https://github.com/gauravverma9795/AI-Interview-mocker"
              demoLink="https://ai-interview-mocker-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatStream}
              isBlog={false}
              title="AI Form Builder"
              description="Developed a website using Next.js and Gemini AI to create customizable forms based on user inputs and
preferences automatically."
              ghLink="https://github.com/gauravverma9795/ai-form-builder"

              demoLink="https://ai-form-builder-gaurav.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerse}
              isBlog={false}
              title="E-COMMERCE WEBSITE"
              description="Developed and maintained a full-stack e-commerce website using React.js, Express.js, and MongoDB, delivering a
seamless user experience."
              ghLink="https://github.com/gauravverma9795/Ecommerse"

              demoLink="https://ecommerse-lvmb.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
