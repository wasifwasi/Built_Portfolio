// src/components/Hero.js
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

// const ToggleButton = styled.button`
//   background: ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
//   margin-top: 20px;
// `;

export default function Hero() {
  const { toggleTheme } = useTheme();

  return (
    <HeroSection >
      <Image src="/path/to/your-image.jpg" alt="Your Name" />
      <Name>Your Name</Name>
      <Tagline>Full-Stack Developer | React Expert</Tagline>
      {/* <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton> */}
    </HeroSection>
  );
}
