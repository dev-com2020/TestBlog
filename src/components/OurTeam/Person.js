import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image';

const PersonContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
@media (min-width: 1076px){
    width: 200px;
    text-align: center;
}
`
const Photo = styled.div`
@media (min-width: 1076px){
}
`
const About = styled.div`
margin-left: 1rem;
max-width: 350px;
width: 300px;
@media (min-width: 1076px){
    margin-left: 0rem;
}
`
const Name = styled.p`
margin: 0;
margin-top: 1rem;
font-weight: bold;
font-size: 1.6rem;
`
const Description = styled.p`
font-size: 1.6rem;
@media(max-width:1076px) {
font-size: 1.2rem;
}

`
const Email = styled.a`
text-decoration: none;
font-weight: 500;
font-size: 1.3rem;

`

const StyledImg = styled(Img)`
width: 300px;
height:300px;
border-radius: 25px;
`
const Person = ({ authorName, authorDescription, authorEmail, authorPhoto }) => {
    return (
        <PersonContainer>

            <Photo>
                <StyledImg fluid={authorPhoto.fluid} />
            </Photo>
            <About>
                <Name>
                    {authorName}
                </Name>
                <Description>
                    {authorDescription}
                </Description>
                <Email href="mailto:kontakt@gmail.com">
                    {authorEmail}
                </Email>
            </About>


        </PersonContainer>

    )
}



export default Person