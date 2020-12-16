import React from 'react'
import { ContactContainer, Headline, Text, EmailInfo } from './ContactStyles'
import styled from 'styled-components';
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
const Contact = () => {
    return (
        <ContactContainer>
            <Headline>Kontakt:</Headline>
            <Line />
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, libero incidunt molestias ducimus, sint dolor necessitatibus omnis enim doloribus hic similique
                mollitia aut exercitationem esse minus illo. Architecto, ullam minus.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta sequi ipsam quisquam,
                aliquam ipsum sapiente exercitationem suscipit cumque. Obcaecati esse et architecto nobis possimus officiis voluptates eligendi recusandae consequuntur quisquam!
                </Text>
            <Line />
            <EmailInfo>
                <div>
                    <span>ICON</span>
                    <p>E-MAIL</p>
                </div>
                <a href="mailto: dasdsa@o2.pl">kontakt@textblogit.pl</a>
            </EmailInfo>
        </ContactContainer>

    )
}

export default Contact;