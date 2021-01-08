import styled from 'styled-components'

export const ContactContainer = styled.div`
margin: 0 auto;
width: 80%;
height: auto;
display: flex;
flex-direction: column;
margin-bottom: 15rem;
`
export const Headline = styled.h2`
padding: 3rem 0rem 1rem 0rem;
font-size: 71px;
`
export const Text = styled.p`

padding: 3rem 0rem 1rem 0rem;
line-height: 50px;
font-size: 22px;
width: 100%;
@media (min-width: 1000px){
    width: 75%;

}
`
export const EmailInfo = styled.div`
padding: 1rem 0rem 10rem 0rem;
display: flex;
flex-direction: row;
justify-content: space-between;
@media screen and (max-width: 1000px){
    flex-direction: column;
}


`

export const MapInformation = styled.div`
width: 100%;
flex: 1;
iframe{

    margin-top: 3rem;
    height: 350px;
}

`

export const EmailInformation = styled.div`
flex: 1;
flex-direction: column;
display: flex;
text-align: left;


div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 1rem;
span {
    font-size: 2rem;
    padding-left: 0.5rem;
    margin-left: 0.5rem;
}
    p{
        font-size: 2.5rem;
        font-weight: bold;
        padding-left: 0.5rem;
}
}

a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 200;
    margin-left: 0.5rem;

}
`