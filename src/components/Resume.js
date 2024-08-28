// src/components/Resume.js
import styled from 'styled-components';

const ResumeSection = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.body};
  text-align: center;
`;

const ResumeButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

export default function Resume() {
  return (
    <ResumeSection id="resume">
      <h2>Resume</h2>
      <p>You can download my resume by clicking the button below.</p>
      <ResumeButton href="/path/to/your-resume.pdf" download>
        Download Resume
      </ResumeButton>
    </ResumeSection>
  );
}
