import React from 'react'
import Person from './Person'
import styled from 'styled-components'
import photo from '../../assets/img/authour-pic.png'
import agataPhoto from '../../assets/img/agataphoto.jpg';
import szymonPhoto from '../../assets/img/szymonPhoto.jpg';
import matiPhoto from '../../assets/img/matiPhoto.jpg';
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
    grid-template-columns: 33% 33% 33%;
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
                    photo={agataPhoto}
                    imie={'Agata Głogowska'}
                    email={`kontakt@gmail.com`}
                    info={'Z zawodu grafik komputerowy, interesuje się również programowaniem stron internetowych oraz montażem filmów'}
                    alt={'Agata Głogowska'}
                />
                <Person
                    photo={szymonPhoto}
                    imie={'Szymon Lurka'}
                    email={`szymon.lurka@interia.pl`}
                    info={'Z zawodu Front End Developer. Entuzjasta nowych technologii i futyrystycznej wizji przyszłości.'}
                    alt={'imie i nazwisko'}
                />
                <Person
                    photo={matiPhoto}
                    imie={'Mateusz Kowalczyk'}
                    email={`kontakt@gmail.com`}
                    info={'Hej, nazywam sie mateusz. Jestem zafascynowany web developmentem i obecnie pracuje jako junior front-end developer. W wolnych chwilach lubię grac w gry komputerowe, szczegolnie fpsy, ogladac seriale oraz uprawiac sport'}
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