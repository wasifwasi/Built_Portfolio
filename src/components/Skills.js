// src/components/Skills.js
import styled from 'styled-components';

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
`;

export default function Skills() {
  const skills = ['JavaScript', 'React', 'Next.js', 'Node.js', 'CSS', 'HTML'];

  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillList>
        {skills.map(skill => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </SkillList>
    </SkillsSection>
  );
}
