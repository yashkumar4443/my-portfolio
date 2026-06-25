import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
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
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.2);
    padding: 20px 22px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: linear-gradient(145deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.bgLight});
    border: 1px solid ${({ theme }) => theme.border};
    transition: all 0.3s ease-in-out;
    &:hover{
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 22px 52px ${({ theme }) => theme.primarySoft};
        transform: translateY(-4px);
    }
    @media only screen and (max-width: 768px){
        padding: 16px;
        gap: 8px;
    }

    &:hover ${Document}{
        display: flex;
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


const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    line-height: 1.35;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Degree = styled.div`
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


const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard
