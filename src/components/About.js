// src/components/About.js
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.body};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <p>
        I'm a full-stack developer with a passion for building scalable web applications...
      </p>
    </AboutSection>
  );
}
