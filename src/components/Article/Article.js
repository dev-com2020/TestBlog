import React from 'react';
import styled from 'styled-components';
import test from '../../assets/img/smart-wear.png';
import Avatar from '../Avatar/Avatar';

const StyledArticle = styled.div`
display:flex;
justify-content: flex-start;
align-items:center;
position:relative;
@media(max-width:1024px) {
    flex-direction:column;
    /* justify-content:flex-end; */
    /* width:100%; */
    align-items:flex-start;
}
`;
const StyledArticleTexts = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
justify-content: flex-start;
padding-left: 50px;
text-align:left;
@media(min-width:1024px) {
    text-align:center;
    height:110%;
}
@media(max-width:1024px) {
    padding-left: 20px;
    /* margin-left: 20px; */
}
`;
const StyledParagraph = styled.p`
font-size:2rem;
font-weight:700;
color:#0B122D;
align-self:flex-start;
@media(max-width:1024px) {
    /* align-self:center; */
    font-size:1.6rem;
}
`;
const StyledHeading = styled.h2`
font-size: 3.5rem;
font-weight:700;
color: #0B122D;
width:60%;
text-align:left;
margin-top: -10px;
@media(max-width:1024px) {
    width:100%;
    /* text-align:center; */
    align-self: left;
    font-size:2.2rem;
}
`;
const StyledImg = styled.img`
position:relative;
left:20px;
`;
const StyledAvatar = styled(Avatar)`
@media(max-width:1024px){
    justify-self:left;
    align-self:left;
}
`;
const Article = () => {
    return (
        <StyledArticle>
            <StyledImg src={test} alt="" />
            <StyledArticleTexts>
                <StyledParagraph>MOBILE</StyledParagraph>
                <StyledHeading>Spędziłem tydzień z Xiaomi Mi 10T Pro.
                    To taki flagowiec, ale ze średnim aparatem</StyledHeading>
                <StyledAvatar name='Szymson Szymek' date="9 grudnia 2020r" />
            </StyledArticleTexts>
        </StyledArticle>
    );
}

export default Article;