import React from 'react'
import Person from './Person'
import styled from 'styled-components'
import { Line } from '../Line/Line';
import { graphql, useStaticQuery } from 'gatsby';


const Container = styled.div`

`
const OurTeamHeadline = styled.h2`
font-size: 3rem;
`
const Cooperation = styled.div`
margin-top: 4rem;
text-align: center;
`

const CooperationHeadline = styled.h2`
font-size: 2rem;

`
const Contact = styled.p`
font-size: 1.5rem;
a {
    text-decoration: none;
    font-weight: bold;
}
`
const PersonsContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 3rem;
@media (min-width: 1076px)
{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    justify-items: center;
    margin-bottom: 8rem;
}
`
const OurTeam = () => {
    const data = useStaticQuery(graphql`
    query authors {
        allDatoCmsTeam(filter:{locale:{eq:"pl"}}) {
          edges {
            node {
              authorPhoto {
                fluid(maxWidth: 500, maxHeight:500) {
                    ...GatsbyDatoCmsFluid
                  }
              }
              authorName
              authorEmail
              authorDescription
            }
          }
        }
      }
    `);
    const authors = data.allDatoCmsTeam.edges;
    authors.forEach(item => console.log(item.node));
    return (
        <Container>
            <OurTeamHeadline>
                NASZ ZESPÓŁ:
            </OurTeamHeadline>
            <Line />
            <PersonsContainer>
                {authors.map(item =>
                    <Person
                        {...item.node}
                        key={item.node.name}
                    />
                )}
            </PersonsContainer>
            <Line />
            <Cooperation>
                <CooperationHeadline>
                    CHCESZ ZOSTAĆ NASZYM REDAKTOREM BĄDŹ NAWIĄZAĆ WSPÓŁPRACĘ?
                </CooperationHeadline>
                <Contact>
                    Skontaktuj się z nami na <a href="mailto:rekrutacja@gmail.com">rekrutacja@gmail.com!</a>
                </Contact>
            </Cooperation>
        </Container>
    )
}

export default OurTeam