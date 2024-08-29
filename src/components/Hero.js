// src/components/Hero.js
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import ProfilePicture from './ProfilePic';


const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default function Hero() {
  const { toggleTheme } = useTheme();

  return (
    <HeroSection >
      <ProfilePicture />
      <Name>Wasif Rehman</Name>
      <Tagline>Full-Stack Developer | React Expert</Tagline>
    </HeroSection>
  );
}
