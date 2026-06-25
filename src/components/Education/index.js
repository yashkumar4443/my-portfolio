
import React from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 72px 20px 90px;
    overflow: hidden;
    @media (max-width: 960px) {
        padding: 54px 16px 72px;
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
    gap: 12px;
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



const Education = () => {
    const educationRef = React.useRef(null);

    React.useLayoutEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion || !educationRef.current) {
            return undefined;
        }

        let observer;

        const context = gsap.context(() => {
            gsap.set('.education-heading', { autoAlpha: 0, y: 28 });
            gsap.set('.education-item', { autoAlpha: 0, x: 34 });

            const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

            timeline
                .to('.education-heading', {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.1,
                })
                .to('.education-item', {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.72,
                    stagger: 0.12,
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

            observer.observe(educationRef.current);
        }, educationRef);

        return () => {
            observer?.disconnect();
            context.revert();
        };
    }, []);

    return (
        <Container id="education" ref={educationRef}>
            <Wrapper>
                <Title className="education-heading">Education</Title>
                <Desc className="education-heading">
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
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
                                paddingLeft: 0,
                            },
                        }}
                    >
                        {education.map((item,index) => (
                            <TimelineItem className="education-item" key={item.id || index}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={item}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length - 1 && <TimelineConnector style={{ background: '#2DD4BF' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education
