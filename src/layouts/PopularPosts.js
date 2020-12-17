import React from 'react'
import Popular from '../components/Popular/Popular'
import styled from 'styled-components'
import { Line } from '../components/Line/Line';


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