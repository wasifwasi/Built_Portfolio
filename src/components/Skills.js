import React from 'react';
import styled from 'styled-components';
import { FaReact, FaPython, FaJsSquare, FaHtml5, FaShopify, FaCss3Alt, FaNodeJs, FaNpm, FaGithub, FaFigma, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.body};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.li`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 10px;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

const IconContainer = styled.div`
  margin-right: 10px;
  font-size: 2rem;
`;

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'npm', icon: <FaNpm /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'WordPress', icon: <FaWordpress /> },
    { name: 'Shopify', icon: <FaShopify /> },
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
  ];

  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillList>
        {skills.map(skill => (
          <SkillItem key={skill.name}>
            <IconContainer>{skill.icon}</IconContainer>
            {skill.name}
          </SkillItem>
        ))}
      </SkillList>
    </SkillsSection>
  );
}
