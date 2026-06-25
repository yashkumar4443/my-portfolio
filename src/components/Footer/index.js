import React from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;
  background:
    linear-gradient(180deg, transparent, ${({ theme }) => theme.primarySoft});
  border-top: 1px solid ${({ theme }) => theme.border};
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  const footerRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !footerRef.current) {
      return undefined;
    }

    let observer;

    const context = gsap.context(() => {
      gsap.set('.footer-reveal', { autoAlpha: 0, y: 18 });

      const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

      timeline.to('.footer-reveal', {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
      });

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.play();
            observer.disconnect();
          }
        },
        { threshold: 0.24 }
      );

      observer.observe(footerRef.current);
    }, footerRef);

    return () => {
      observer?.disconnect();
      context.revert();
    };
  }, []);

  return (
    <FooterContainer ref={footerRef}>
      <FooterWrapper>
        <Logo className="footer-reveal">Yash Kumar</Logo>
        <Nav className="footer-reveal">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons className="footer-reveal">
          <SocialMediaIcon href="https://github.com/yashkumar4443" target="display"><GitHubIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright className="footer-reveal">
          &copy; 2026 Yash Kumar. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
