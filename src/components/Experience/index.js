
import React from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 64px 20px 96px;
    overflow: hidden;
    @media (max-width: 960px) {
        padding: 48px 16px 72px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1120px;
    padding: 0;
    gap: 14px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
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

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 860px;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const Experience = () => {
    const experienceRef = React.useRef(null);

    React.useLayoutEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion || !experienceRef.current) {
            return undefined;
        }

        let observer;

        const context = gsap.context(() => {
            gsap.set('.experience-heading', { autoAlpha: 0, y: 28 });
            gsap.set('.experience-item', { autoAlpha: 0, x: -34 });

            const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

            timeline
                .to('.experience-heading', {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.1,
                })
                .to('.experience-item', {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.75,
                    stagger: 0.14,
                }, '-=0.25');

            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        timeline.play();
                        observer.disconnect();
                    }
                },
                { threshold: 0.16 }
            );

            observer.observe(experienceRef.current);
        }, experienceRef);

        return () => {
            observer?.disconnect();
            context.revert();
        };
    }, []);

    return (
        <Container id="experience" ref={experienceRef}>
            <Wrapper>
                <Title className="experience-heading">Experience</Title>
                <Desc className="experience-heading">
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineSection>
                    <Timeline
                        sx={{
                            width: '100%',
                            padding: 0,
                            margin: 0,
                            '& .MuiTimelineItem-root': {
                                minHeight: 'auto',
                            },
                            '& .MuiTimelineItem-root:before': {
                                display: 'none',
                            },
                            '& .MuiTimelineContent-root': {
                                width: '100%',
                                paddingRight: 0,
                            },
                        }}
                    >
                        {experiences.map((experience,index) => (
                            <TimelineItem className="experience-item" key={experience.id || index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#2DD4BF' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience
