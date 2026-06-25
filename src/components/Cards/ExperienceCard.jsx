import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: block;
    height: 64px;
    width: auto;
    max-width: 180px;
    background-color: #000;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    line-height: 1.7;
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`

const Span = styled.span`
    display: block;
    max-width: 100%;
`

const Card = styled.div`
    width: 100%;
    max-width: 760px;
    border-radius: 16px;
    padding: 20px 22px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: linear-gradient(145deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.bgLight});
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.2);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    &:hover{
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 22px 52px ${({ theme }) => theme.primarySoft};
        transform: translateY(-4px);
    }
    @media only screen and (max-width: 768px){
        padding: 16px;
        gap: 12px;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 14px;
    align-items: flex-start;
`

const Image = styled.img`
    width: 54px;
    height: 54px;
    object-fit: contain;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 12px;
    padding: 7px;
    flex: 0 0 54px;
    @media only screen and (max-width: 768px){
        width: 44px;
        height: 44px;
        flex-basis: 44px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 19px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    line-height: 1.35;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 14px;

    b {
        color: ${({ theme }) => theme.text_primary};
        flex: 0 0 auto;
    }

    @media only screen and (max-width: 768px){
        flex-direction: column;
        gap: 8px;
    }
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary + 99};
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    padding: 5px 10px;
    background: rgba(255, 255, 255, 0.04);
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <a href={experience.link || experience.img} target="_blank" rel="noopener noreferrer">
                    <Image src={experience.img} />
                </a>
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>{skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
            <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                <Document src={experience.doc} />
            </a>
            }
        </Card>
    )
}

export default ExperienceCard
