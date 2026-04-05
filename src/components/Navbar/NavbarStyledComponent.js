import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

/* NAVBAR */
export const Nav = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

export const Span = styled.div`
  margin-left: 8px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
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
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  padding: 8px 18px;
  font-weight: 500;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }
`;

export const WordpressOrgButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  padding: 8px 18px;
  font-weight: 500;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 22px;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-radius: 0 0 20px 20px;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.3s ease;
  z-index: 999;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;