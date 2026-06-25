import React from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background:
    radial-gradient(circle at 18% 8%, ${({ theme }) => theme.primarySoft}, transparent 28%),
    ${({ theme }) => theme.bg};
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 30px;
`;
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(145deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.bgLight});
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
  border-radius: 16px;
  padding: 18px 36px;
  transform-origin: center;
  will-change: transform, opacity;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 22px 52px ${({ theme }) => theme.primarySoft};
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  will-change: transform, opacity;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}22;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`
const SkillIconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  background: transparent;
  mix-blend-mode: lighten;
`

const Skills = () => {
  const skillsRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !skillsRef.current) {
      return undefined;
    }

    let observer;

    const context = gsap.context(() => {
      gsap.set('.skills-heading', { autoAlpha: 0, y: 28 });
      gsap.set('.skill-card', { autoAlpha: 0, y: 42, scale: 0.94 });
      gsap.set('.skill-chip', { autoAlpha: 0, y: 16, scale: 0.92 });

      const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

      timeline
        .to('.skills-heading', {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.1,
        })
        .to('.skill-card', {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.12,
        }, '-=0.28')
        .to('.skill-chip', {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: {
            each: 0.018,
            from: 'random',
          },
        }, '-=0.28');

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.play();
            observer.disconnect();
          }
        },
        { threshold: 0.18 }
      );

      observer.observe(skillsRef.current);
    }, skillsRef);

    return () => {
      observer?.disconnect();
      context.revert();
    };
  }, []);

  return (
    <Container id="skills" ref={skillsRef}>
      <Wrapper>
        <Title className="skills-heading">Skills</Title>
        <Desc className="skills-heading">
          Here are some of my skills on which I have been working on for the past 5 years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill className="skill-card" key={index}>
              <SkillTitle>{skill.title}</SkillTitle>

              <SkillList>
                {skill.skills.map((item, i) => (
                  <SkillItem className="skill-chip" key={i}>
                      {item.image && (
                      <SkillIconWrapper>
                        <SkillImage src={item.image} alt={item.name} />
                      </SkillIconWrapper>
                    )}

                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>

            </Skill>
          ))}
        </SkillsContainer>

      </Wrapper>
    </Container>
  );
};

export default Skills;
