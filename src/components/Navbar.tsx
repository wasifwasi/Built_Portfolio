import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaBars } from 'react-icons/fa';

// Type for NavLink active state
interface NavLinkProps {
  isActive?: boolean;
}

interface NavLinksProps {
  isOpen: boolean;
}

const Nav = styled.nav`
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.body};
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a<NavLinkProps>`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;
  border-bottom: ${({ isActive, theme }) =>
    isActive ? `2px solid ${theme.primary}` : 'none'};

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

const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [buttonText, setButtonText] = useState<string>('Light Mode');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

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
        <NavLink isActive={router.pathname === '/'}>Home</NavLink>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <Link href="#about" passHref>
          <NavLink isActive={router.pathname === '/about'}>About</NavLink>
        </Link>
        <Link href="#projects" passHref>
          <NavLink isActive={router.pathname === '/projects'}>Projects</NavLink>
        </Link>
        <Link href="#skills" passHref>
          <NavLink isActive={router.pathname === '/skills'}>Skills</NavLink>
        </Link>
        <Link href="#certifications" passHref>
          <NavLink isActive={router.pathname === '/certifications'}>Certifications</NavLink>
        </Link>
        <Link href="#resume" passHref>
          <NavLink isActive={router.pathname === '/resume'}>Resume</NavLink>
        </Link>
        <Link href="#contact" passHref>
          <NavLink isActive={router.pathname === '/contact'}>Contact</NavLink>
        </Link>
        <ToggleButton onClick={toggleTheme}>{buttonText}</ToggleButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
