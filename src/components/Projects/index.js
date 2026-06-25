import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !projectsRef.current) {
      return undefined;
    }

    let observer;

    const context = gsap.context(() => {
      gsap.set('.projects-heading', { autoAlpha: 0, y: 28 });
      gsap.set('.project-reveal', { autoAlpha: 0, y: 38, scale: 0.96 });

      const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

      timeline
        .to('.projects-heading', {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
        })
        .to('.project-reveal', {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
        }, '-=0.25');

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.play();
            observer.disconnect();
          }
        },
        { threshold: 0.14 }
      );

      observer.observe(projectsRef.current);
    }, projectsRef);

    return () => {
      observer?.disconnect();
      context.revert();
    };
  }, []);

  return (
    <Container id="projects" ref={projectsRef}>
      <Wrapper>
        <Title className="projects-heading">Projects</Title>
        <Desc className="projects-heading">
          I have worked on a wide range of my development projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup className="projects-heading">
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }

        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all'
            ? projects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  className="project-reveal"
                  project={project} 
                  openModal={openModal} 
                  setOpenModal={setOpenModal}
                />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    className="project-reveal"
                    project={project} 
                    openModal={openModal} 
                    setOpenModal={setOpenModal}
                  />
                ))
          }
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
