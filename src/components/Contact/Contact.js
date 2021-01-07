import React from 'react'
import { ContactContainer, Headline, Text, EmailInfo } from './ContactStyles'
import { Line } from '../Line/Line';
import { useStaticQuery, graphql } from 'gatsby';

const Contact = () => {
    const data = useStaticQuery(graphql`
    query contact {
        datoCmsContact {
          description
          email
          phone
        }
      }
    `);
    const { description, email, phone } = data.datoCmsContact;
    return (
        <ContactContainer>
            <Headline>Kontakt:</Headline>
            <Line />
            <Text>
                {description}
            </Text>
            <Line />
            <EmailInfo>
                <div>
                    <p>E-MAIL:</p>
                    <a href="mailto: dasdsa@o2.pl">{email}</a>
                </div>
                <div>
                    <p>Numer telefonu:</p>
                    <span>{phone}</span>
                </div>
            </EmailInfo>
        </ContactContainer>

    )
}

export default Contact;