import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  WordpressOrgButton
} from './NavbarStyledComponent';

import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { CloseRounded } from '@mui/icons-material';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav $isScrolled={isScrolled} $isOpen={isOpen}>
      <NavbarContainer>

        {/* LOGO */}
        <NavLogo to='/'>
          <DiCssdeck size="2.5rem" />
          <Span>Portfolio</Span>
        </NavLogo>

        {/* MOBILE ICON */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseRounded /> : <FaBars />}
        </MobileIcon>

        {/* NAV ITEMS */}
        <NavItems>
          <NavLink as={ScrollLink} to="about" smooth duration={500}>About</NavLink>
          <NavLink as={ScrollLink} to="skills" smooth duration={500}>Skills</NavLink>
          <NavLink as={ScrollLink} to="experience" smooth duration={500}>Experience</NavLink>
          <NavLink as={ScrollLink} to="projects" smooth duration={500}>Projects</NavLink>
          <NavLink as={ScrollLink} to="education" smooth duration={500}>Education</NavLink>
          <NavLink as={RouterLink} to="/blog">Blog</NavLink>
        </NavItems>

        {/* BUTTONS */}
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub
          </GitHubButton>

          <WordpressOrgButton
            href="https://profiles.wordpress.org/yashkumar4443"
            target="_blank"
          >
            WordPress
          </WordpressOrgButton>

          {/* CTA */}
          <GitHubButton
            href="https://wa.me/919627204461"
            target="_blank"
            style={{ background: theme.primary, color: "#fff" }}
          >
            Hire Me
          </GitHubButton>
        </ButtonContainer>

        {/* MOBILE MENU */}
        {isOpen && (
          <MobileMenu onClick={() => setIsOpen(false)}>
            <div onClick={(e) => e.stopPropagation()}>

              <MobileLink as={ScrollLink} to="about" smooth duration={500} onClick={() => setIsOpen(false)}>
                About
              </MobileLink>

              <MobileLink as={ScrollLink} to="skills" smooth duration={500} onClick={() => setIsOpen(false)}>
                Skills
              </MobileLink>

              <MobileLink as={ScrollLink} to="experience" smooth duration={500} onClick={() => setIsOpen(false)}>
                Experience
              </MobileLink>

              <MobileLink as={ScrollLink} to="projects" smooth duration={500} onClick={() => setIsOpen(false)}>
                Projects
              </MobileLink>

              <MobileLink as={ScrollLink} to="education" smooth duration={500} onClick={() => setIsOpen(false)}>
                Education
              </MobileLink>

              <MobileLink as={RouterLink} to="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </MobileLink>

              <GitHubButton
                style={{
                  padding: '10px 16px',
                  background: theme.primary,
                  color: 'white',
                  width: 'max-content'
                }}
                href={Bio.github}
                target="_blank"
              >
                GitHub Profile
              </GitHubButton>

              <GitHubButton
                style={{
                  padding: '10px 16px',
                  background: theme.primary,
                  color: 'white',
                  width: 'max-content',
                  marginTop: '10px'
                }}
                href="https://wa.me/919627204461"
                target="_blank"
              >
                Hire Me
              </GitHubButton>

            </div>
          </MobileMenu>
        )}

      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
