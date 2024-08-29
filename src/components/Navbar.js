// src/components/Navbar.js
import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  background: ${({ theme }) => theme.body};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [buttonText, setButtonText] = useState('Light Mode');

  useEffect(() => {
    if (theme === 'light') {
      setButtonText('Dark Mode');
    } else {
      setButtonText('Light Mode');
    }
  }, [theme]);

  return (
    <Nav>
      <Link href="/" passHref>
        <NavLink></NavLink>
      </Link>
      <NavLinks>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>       
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
        <Link href="#skills" passHref>
          <NavLink>Skills</NavLink>
        </Link>
        <Link href="#certifications" passHref>
          <NavLink>Certifications</NavLink>
        </Link>
        <Link href="#resume" passHref>
          <NavLink>Resume</NavLink>
        </Link>
        <Link href="#contact" passHref>
          <NavLink>Contact</NavLink>
        </Link>
        <ToggleButton onClick={toggleTheme}>{buttonText}</ToggleButton>
      </NavLinks>
    </Nav>
  );
}
