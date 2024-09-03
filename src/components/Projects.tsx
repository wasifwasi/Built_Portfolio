import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "@emotion/styled";

const ProjectWrapper = styled.div`
  background-color: #269baa57;
  padding: 50px 0;
`;

const Container = styled.div`
  background-color:white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the children horizontally */
`;
const Carddis = styled.div`
  background-color: #ffffffd0;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-direction: column; /* Ensure the cards stack vertically */
  min-height: 100vh; /* Ensure the container takes up the full height of the viewport */
  padding: 2rem; /* Optional padding */

`;

const SectionTitle = styled.h2`

  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    width: 60px;
    height: 5px;
    background-color: #151418;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2.5px;
  }
`;

// const SVGBackground = styled.svg`
//   width: 100%;
//   height: 100%;
// `;

const Projects: React.FC = () => {
  return (
    <>
      {/* <SVGBackground
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        />
      </SVGBackground> */}
      <ProjectWrapper id="projects">
        <Container>
          <SectionTitle>Projects</SectionTitle>
         <Carddis>
          <ProjectCard />
          </Carddis>
        </Container>
      </ProjectWrapper>
    </>
  );
};

export default Projects;
