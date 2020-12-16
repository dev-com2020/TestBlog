import React from 'react'
import Popular from '../components/Popular/Popular'
import styled from 'styled-components'
const Line = styled.div`
height:4px;
width:100%;
background-color:lightgray;
border-radius: 4px;
overflow:hidden;
position:relative;
& span {
    position:absolute;
    height:4px;
    width: 5%;
    left:0;
}
`;
const Div = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 1rem 0rem;
`

const Headline = styled.h2`
padding-top: 2rem;
font-size: 20px;
font-weight: bold;
justify-self: left;
`


const PopularPosts = () => {
    return (
        <>
            <Headline>PROPOZYCJE:</Headline>
            <Div>
                <Line />
                <Popular />
            </Div>
        </>
    )
}

export default PopularPosts