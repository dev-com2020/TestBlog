import React from 'react'
import { ContactContainer, Headline, Text, EmailInfo } from './ContactStyles'
import { Line } from '../Line/Line';

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