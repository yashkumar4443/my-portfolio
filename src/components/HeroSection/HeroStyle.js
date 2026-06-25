import styled from "styled-components";

//url('/backgroundimage.jpg')
export const HeroContainer = styled.div.attrs({
  className: "hero-container",
})`
  background:
    radial-gradient(circle at 78% 28%, ${({ theme }) => theme.primarySoft}, transparent 30%),
    radial-gradient(circle at 16% 18%, ${({ theme }) => theme.accentSoft}, transparent 24%),
    ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  padding: 132px 30px 96px;
  overflow: hidden;
  @media (max-width: 960px) {
    padding: 118px 16px 72px;
  }
  @media (max-width: 640px) {
    padding: 104px 16px 56px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.55), transparent 72%);
    pointer-events: none;
  }
`;

export const HeroBg = styled.div.attrs({
  className: "hero-bg",
})`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
    opacity: 0.42;
  }
`;

export const HeroInnerContainer = styled.div.attrs({
  className: "hero-inner-container",
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 56px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 34px;
  }
`;
export const HeroLeftContainer = styled.div.attrs({
  className: "hero-left-container",
})`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div.attrs({
  className: "hero-right-container",
})`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
    position: relative;
    width: 56%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 100%;
    border: 3px solid ${({ theme }) => theme.primary};
    box-shadow:
      0 0 0 14px ${({ theme }) => theme.primarySoft},
      0 26px 70px rgba(0, 0, 0, 0.36),
      0 0 80px ${({ theme }) => theme.primarySoft};
    object-fit: cover;
    will-change: transform;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 18px;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.primarySoft};
  box-shadow: inset 0 0 18px ${({ theme }) => theme.primarySoft};

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Title = styled.div.attrs({
  className: "hero-title",
})`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div.attrs({
  className: "hero-text-loop",
})`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div.attrs({
  className: "hero-subtitle",
})`
  font-size: 20px;
  line-height: 32px;
  max-width: 630px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 42px;

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 190px;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.accent} 100%);
    box-shadow: 0 18px 44px ${({ theme }) => theme.primarySoft};
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;

export const SecondaryButton = styled.a`
    text-decoration: none;
    width: 190px;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.text_primary};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.06);
    transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.primary}22;
    }

    @media (max-width: 640px) {
        width: 95%;
        padding: 12px 0;
        font-size: 18px;
    }
`;
