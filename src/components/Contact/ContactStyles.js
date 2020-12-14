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
line-height: 40px;
font-size: 22px;
width: 100%;
@media (min-width: 1000px){
    width: 75%;

}
`
export const EmailInfo = styled.div`
padding: 1rem 0rem 10rem 0rem;
display: flex;
flex-direction: column;
div{
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    span {

        padding: 10px;
        background-color: blue;
}

    p{

        font-size: 25px;
        font-weight: bold;
        padding-left: 0.5rem;
}   
}

a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 200;
}
`