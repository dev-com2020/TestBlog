import React from 'react'
import Person from './Person'
import styled from 'styled-components'
import photo from '../../assets/img/authour-pic.png'

import { Line } from '../Line/Line';


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
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto;
    justify-items: center;
    margin-bottom: 8rem;
}
`
const OurTeam = () => {
    return (
        <Container>
            <OurTeamHeadline>
                NASZ ZESPÓŁ:
            </OurTeamHeadline>
            <Line />
            <PersonsContainer>
                <Person
                    photo={photo}
                    imie={'imie i nazwisko'}
                    email={`kontakt@gmail.com`}
                    info={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta, cum quibusdam dolorem incidunt itaquequi eveniet blanditiis numquam doloribus excepturi nulla architecto voluptates corporis natus eius voluptatibus dolores. Provident.'}
                    alt={'imie i nazwisko'}
                />
                <Person
                    photo={photo}
                    imie={'imie i nazwisko'}
                    email={`kontakt@gmail.com`}
                    info={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta, cum quibusdam dolorem incidunt itaquequi eveniet blanditiis numquam doloribus excepturi nulla architecto voluptates corporis natus eius voluptatibus dolores. Provident.'}
                    alt={'imie i nazwisko'}
                />
                <Person
                    photo={photo}
                    imie={'imie i nazwisko'}
                    email={`kontakt@gmail.com`}
                    info={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta, cum quibusdam dolorem incidunt itaquequi eveniet blanditiis numquam doloribus excepturi nulla architecto voluptates corporis natus eius voluptatibus dolores. Provident.'}
                    alt={'imie i nazwisko'}
                />
                <Person
                    photo={photo}
                    imie={'imie i nazwisko'}
                    email={`kontakt@gmail.com`}
                    info={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta, cum quibusdam dolorem incidunt itaquequi eveniet blanditiis numquam doloribus excepturi nulla architecto voluptates corporis natus eius voluptatibus dolores. Provident.'}
                    alt={'imie i nazwisko'}
                />
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