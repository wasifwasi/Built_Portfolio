// src/components/About.js
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px;
  background: ${({ theme }) => theme.body};
  // padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top:20px;
  Background-color: #7abbe77e;
`;

export default function About() {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <p>
      Hello! My name is Wasif Rehman. I'm from pakistan. During my time in university, I gained valuable experience through various projects as assignments and semester projects, which greatly enhanced my work ethic, communicating skill, Presenting Skill and adaptability.<br /><br />
      My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Science program (BSCS). Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
      Throughout my studies at COMSATS, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the Real-State Marketing Website, Face-Recognition throuhg AI and Handyman Website, projects that garnered recognition from my colleagues, instructors, and clients alike.<br /><br />
      Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
      </p>
    </AboutSection>
  );
}
