import React from 'react'
import styled from 'styled-components'




const PersonContainer = styled.div`
width: 100%;
display: flex;
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
flex-direction: row;
@media (min-width: 1076px){
    flex-direction: column;
    width: 200px;
    text-align: center;
}
`



const Photo = styled.div`

width: 150px;
min-width: 150px;
@media (min-width: 1076px){
    height: 125px;
    width: auto;
}
`
const About = styled.div`
margin-left: 1rem;
max-width: 350px;

@media (min-width: 1076px){
    margin-left: 0rem;
}
`
const Name = styled.p`
margin: 0;
margin-top: 1rem;
font-weight: bold;
font-size: 1.2rem;
`
const Description = styled.p`
`
const Email = styled.a`
text-decoration: none;
font-weight: 500;

`

const StyledImg = styled.img`
width: 80%;
height: 100%;
`
const Person = ({ imie, info, email, photo }) => {
    return (
        <PersonContainer>

            <Photo>
                <StyledImg src={photo} />
            </Photo>
            <About>
                <Name>
                    {imie}
                </Name>
                <Description>
                    {info}
                </Description>
                <Email href="mailto:kontakt@gmail.com">
                    {email}
                </Email>
            </About>


        </PersonContainer>

    )
}



export default Person