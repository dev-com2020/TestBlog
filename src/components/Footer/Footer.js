import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import { FooterBox, FooterContainer, BlogInfo, SocialMedia, Logo, StyledLink } from './FooterStyles'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query images  {
            image: file(relativePath: {eq: "LogoFooter.png"}) {
              id
              childImageSharp{
                fixed(
                    width: 250){
                 ...GatsbyImageSharpFixed
                }
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
    `)
    return (
        <FooterContainer>
            <FooterBox>
                <BlogInfo>
                    <h2>TESTBLOG.INFO</h2>
                    <StyledLink
                        to={'/zespol'}>Nasz Zespoł</StyledLink>
                    <StyledLink to={'/kontakt/'}>Kontakt</StyledLink>
                    <StyledLink to={'/'}>Regulamin</StyledLink>
                    <StyledLink to={'/'}>Polityka prywatności</StyledLink>
                </BlogInfo>
                <SocialMedia>
                    <h2>SOCIAL MEDIA</h2>
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://linkedin.com">Linkedin</a>
                    <a href="https://tiktok.com">Tik Tok</a>
                    <a href="https://youtube.com">YouTube</a>
                </SocialMedia>

                <Logo>
                    <Img
                        fixed={data.image.childImageSharp.fixed}
                        alt="techblog logo"
                    />
                </Logo>
            </FooterBox>

        </FooterContainer>
    )
}


export default Footer