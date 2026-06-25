import React from 'react';
import { gsap } from 'gsap';
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, HeroBadge, HeroActions, SecondaryButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    const heroRef = React.useRef(null);
    const imageRef = React.useRef(null);
    const bgRef = React.useRef(null);

    React.useLayoutEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            return undefined;
        }

        const context = gsap.context(() => {
            gsap.set('.hero-animate', { autoAlpha: 0, y: 34 });
            gsap.set(imageRef.current, { autoAlpha: 0, scale: 0.88, y: 26 });
            gsap.set(bgRef.current, { autoAlpha: 0, scale: 0.92, rotate: -4 });

            const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

            timeline
                .to(bgRef.current, {
                    autoAlpha: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1.25,
                })
                .to('.hero-animate', {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.85,
                    stagger: 0.12,
                }, '-=0.75')
                .to(imageRef.current, {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.95,
                }, '-=0.65');

            gsap.to(imageRef.current, {
                y: -16,
                duration: 3.2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                delay: 1.1,
            });

            gsap.to(bgRef.current, {
                rotate: 2,
                scale: 1.035,
                duration: 6,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                delay: 1,
            });
        }, heroRef);

        return () => context.revert();
    }, []);

    return (
        <div id="about" className="about-section" ref={heroRef}>
            <HeroContainer>
                <HeroBg ref={bgRef}>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <HeroBadge className="hero-animate">Available for frontend and WordPress work</HeroBadge>
                        <Title className="hero-animate">Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop className="hero-animate">
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle className="hero-animate">{Bio.description}</SubTitle>
                        <HeroActions className="hero-animate">
                            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                            <SecondaryButton href="#projects">View Projects</SecondaryButton>
                        </HeroActions>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img ref={imageRef} src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
