import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--black);
  color: var(--aquamarine);
  align-items: center;
  padding: 20px;
  border-top: 2px solid var(--aquamarine);
  border-bottom: 2px solid var(--aquamarine);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  margin: auto;
  h1 {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    fontweight: 400;
    padding: 10px;
  }
`;

const Project = styled.div`
  margin: 20px;
  padding: 20px;
  width: 80%;
  border-radius: 10px;
`;

const ProjectTitle = styled.h2`
  margin-bottom: 20px;
  width: 100%;
  max-width: 130px;
  border-bottom: 2px solid var(--aquamarine);
  color: var(--aquamarine);
`;

const ProjectDescription = styled.p`
  color: var(--aquamarine);
  text-align: justify;
  text-transform: none;
  letter-spacing: 0.5px;
  fontweight: 400;
  padding: 10px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  border: 2px solid var(--aquamarine);
  padding: 10px;
  margin-top: 15px;
  text-decoration: none;
  color: var(--aquamarine);
`;

const projects = [
  {
    title: "Recipes App",
    description:
      "I'm currently building a full-stack app with React, Next, and Node. The goal is to create a social media platform dedicated to sharing and discovering recipes. Although it's still an MVP, I'm excited about its potential. Stay tuned for future updates!",
    link: "https://recipe-app-nine-kohl.vercel.app/",
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <Project key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectLink href={project.link}>View Project</ProjectLink>
        </Project>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
