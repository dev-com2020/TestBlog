import React from 'react'
import { ContactContainer, Headline, Text, EmailInfo, MapInformation, EmailInformation } from './ContactStyles'
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
    const {  } = data.datoCmsContact;
    return (
        <ContactContainer>
            <Headline>Kontakt:</Headline>
            <Line />
            <Text>
            Fundacja Rozwoju Przedsiębiorczości "Twój StartUP" DEV-COM <br/>
            ul. Żurawia 6/12 lok 766, 00-503 Warszawa <br/>
            <b>NIP:</b> 5213641211<br/> <b>REGON:</b> 146433467<br/> <b>KRS:</b> 0000442857

            </Text>
            <Line />
            <EmailInfo>
                <EmailInformation>
                <div>
                    <p>E-MAIL:</p>
                    <a href="mailto:biuro@dev-com.pl">biuro@dev-com.pl</a>
                </div>
                <div>
                    <p>Numer telefonu:</p>
                    <a href="tel:531989599">531989599</a>
                </div>
                </EmailInformation>
                <MapInformation>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7758548029865!2d21.016613215796617!3d52.229289979760246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf13d90aa17%3A0x1213d3de6bb5d263!2s%C5%BBurawia%206%2F766%2C%2000-503%20Warszawa!5e0!3m2!1spl!2spl!4v1610099063981!5m2!1spl!2spl" title="map"width="100%"></iframe>
                </MapInformation>
            </EmailInfo>
        </ContactContainer>

    )
}

export default Contact;