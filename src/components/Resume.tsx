// src/components/Resume.tsx
import styled from "styled-components";
import { motion } from "framer-motion";
import { FC } from "react";

const ResumeSection = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.body};
  text-align: center;
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  background: ${({ theme }) => theme.primary};
  color: #8f03acff;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

const Resume: FC = () => {
  return (
    <ResumeSection id="resume">
      <h2>Resume</h2>
      <p>You can download my resume by clicking the button below.</p>
      <ResumeButton
        href="/path/to/your-resume.pdf"
        download
        whileHover={{ scale: 1.05, backgroundColor: "#c52626" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Download Resume
      </ResumeButton>
    </ResumeSection>
  );
};

export default Resume;
