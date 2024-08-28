// src/components/Projects.js
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 50px;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.body};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      <ProjectCard>
        <h3>Project 1</h3>
        <p>Project description goes here...</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Project 2</h3>
        <p>Project description goes here...</p>
      </ProjectCard>
    </ProjectsSection>
  );
}
