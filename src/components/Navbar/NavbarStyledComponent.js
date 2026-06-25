import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

/* NAVBAR */
export const Nav = styled.div`
  background: ${({ $isScrolled, $isOpen }) =>
    $isScrolled || $isOpen ? 'rgba(7, 17, 31, 0.78)' : 'rgba(7, 17, 31, 0)'};
  backdrop-filter: ${({ $isScrolled, $isOpen }) =>
    $isScrolled || $isOpen ? 'blur(18px)' : 'blur(0)'};
  -webkit-backdrop-filter: ${({ $isScrolled, $isOpen }) =>
    $isScrolled || $isOpen ? 'blur(18px)' : 'blur(0)'};
  height: ${({ $isScrolled }) => ($isScrolled ? '68px' : '84px')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid
    ${({ $isScrolled, $isOpen }) =>
      $isScrolled || $isOpen ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)'};
  box-shadow: ${({ $isScrolled, $isOpen }) =>
    $isScrolled || $isOpen ? '0 16px 40px rgba(0, 0, 0, 0.24)' : 'none'};
  transition: height 0.25s ease, background 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease, backdrop-filter 0.25s ease;

  @media (max-width: 960px) {
    height: ${({ $isScrolled }) => ($isScrolled ? '64px' : '76px')};
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 28px;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    padding: 0 18px;
  }
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;

  svg {
    color: ${({ theme }) => theme.primary};
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.primary}55);
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
`;

export const Span = styled.div`
  font-weight: 800;
  font-size: 19px;
  letter-spacing: 0;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  list-style: none;
  padding: 6px;
  margin: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.08);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  padding: 8px 13px;
  border-radius: 999px;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.primary}33;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: white;
  cursor: pointer;
  padding: 9px 18px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.035);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 10px 24px ${({ theme }) => theme.primary}44;
  }
`;

export const WordpressOrgButton = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: white;
  cursor: pointer;
  padding: 9px 18px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.035);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}22;
    color: #fff;
    transform: translateY(-1px);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 18px;
  width: 100%;
  max-width: 320px;
  background: rgba(7, 17, 31, 0.94);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38);
  z-index: 999;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 12px;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.primary}33;
  }
`;
