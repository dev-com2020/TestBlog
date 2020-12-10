import React from 'react';
import MainLayout from '../../layouts/index';
import { Line } from '../Line/Line';
import styled from 'styled-components';
import ArticleImg from '../../assets/img/articlepreview.png';
import ArticleImage from '../../assets/img/articleimg.png';
import Avatar from '../Avatar/Avatar';
import facebook from '../../assets/svg/facebook.svg'
import youtube from '../../assets/svg/youtube.svg'
import { Disqus } from 'gatsby-plugin-disqus';

const StyledHeading = styled.h2`
font-size: 7rem;
font-weight: 700;
`;
const StyledCategoryHeading = styled.p`
font-size: 2rem;
font-weight:700;
`;
const StyledImg = styled.img`
margin-bottom: 25px;
`;
const StyledArticleHeading = styled.p`
font-size: 3.5rem;
font-weight: 700;
`;
const StyledArticleParagraph = styled.p`
font-size: 2.5rem;
`;
const StyledArticleImg = styled.img`
margin-top: 50px;
margin-bottom: 50px;
`;
const StyledArticleWrapper = styled.div`
display:flex;
flex-direction: column;
width:70%;
margin: 0 auto;
align-items:left;
@media (max-width:1024px) {
    align-items:center;
}
`;
const StyledParagraph = styled.p`
align-self: left;
font-size: 2rem;
font-weight:700;
text-transform:uppercase;
`;
const StyledSocialMediaWrapper = styled.div`
display:flex;
align-self:left;
margin-top: 25px;
margin-bottom: 25px;
`;
const StyledSocialMedia = styled.img`
margin-right: 25px;
`;
const StyledTag = styled.p`
font-size:2rem;
font-weight:700;
& a {
font-weight: 300;
}
`;
const StyledDisqus = styled.div`
width:100%;
`;
const ArticlePreview = () => {
    return (
        <MainLayout isCategory>
            <StyledHeading>
                Jak często publikować na blogu?
                </StyledHeading>
            <Line />
            <StyledCategoryHeading>
                MOBILE
            </StyledCategoryHeading>
            <StyledImg src={ArticleImg} />
            <Avatar name="Szymek Szymek" date="10.12.2020r" isCenter />
            <StyledArticleWrapper>
                <StyledArticleHeading>
                    To nie tylko debiut roku. To zaskoczenie roku. Po weekendzie z vivo X51 5G nie mogę wyjść z podziwu, jak stabilnie vivo stawia pierwszy krok na polskim rynku.
            </StyledArticleHeading>
                <StyledArticleParagraph>
                    Stalowoszare plecki rozprasza jedynie wyspa aparatów, która już na pierwszy rzut oka zdradza, że w kwestii optyki dzieje się tam naprawdę wiele. Ale o tym za chwilę.
            </StyledArticleParagraph>
                <StyledArticleParagraph>
                    Jak na tak duży smartfon (158,45 x 72,8 x 8,04 mm) vivo x51 5G jest zaskakująco lekki, ważąc tylko 181,5 g. Dzięki wspomnianym zakrzywionym krawędziom i matowemu szkłu telefon znakomicie leży w dłoni, choć podobnie jak każdy szklany smartfon bardzo szybko próbuje z niej uciec - zdecydowanie warto założyć etui, żeby uniknąć nieszczęścia.
            </StyledArticleParagraph>
                <StyledArticleImg src={ArticleImage} />
                <StyledArticleHeading>
                    To nie tylko debiut roku. To zaskoczenie roku. Po weekendzie z vivo X51 5G nie mogę wyjść z podziwu, jak stabilnie vivo stawia pierwszy krok na polskim rynku.
                </StyledArticleHeading>
                <StyledArticleParagraph>
                    Gdy vivo X51 5G przyjechał do mnie na testy, nie wiedziałem, jakie są jego podzespoły. Na opakowaniu była tylko wzmianka o procesorze z 5G, 8 GB RAM i 256 GB miejsca na dane - nie wiedziałem, jaki SoC napędza ten telefon.
                </StyledArticleParagraph>
                <StyledArticleParagraph>
                    Używałem go przez weekend i byłem przekonany, że w środku jest Snapdragon 865, tak płynnie działał. Nie doświadczyłem żadnego przycięcia, żadnego laga, żadnego problemu z wydajnością - vivo X51 5G śmigał aż miło. Tymczasem po otrzymaniu od firmy pełnej specyfikacji technicznej okazało się, że pod maską pracuje nie Snapdragon 865, a Snapdragon 765G.
                </StyledArticleParagraph>
                <StyledArticleParagraph>
                    Testowałem wcześniej kilka urządzeń z tym procesorem, ale w vivo X51 5G działa on najlepiej z nich wszystkich. Wynika to w dużej mierze z tego, jak wiele pracy vivo włożyło w swoje oprogramowanie Funtouch OS 10.
                </StyledArticleParagraph>
                <StyledArticleImg src={ArticleImage} />
                <StyledArticleParagraph>
                    Gdy vivo X51 5G przyjechał do mnie na testy, nie wiedziałem, jakie są jego podzespoły. Na opakowaniu była tylko wzmianka o procesorze z 5G, 8 GB RAM i 256 GB miejsca na dane - nie wiedziałem, jaki SoC napędza ten telefon.
                </StyledArticleParagraph>
                <StyledArticleParagraph>
                    Używałem go przez weekend i byłem przekonany, że w środku jest Snapdragon 865, tak płynnie działał. Nie doświadczyłem żadnego przycięcia, żadnego laga, żadnego problemu z wydajnością - vivo X51 5G śmigał aż miło. Tymczasem po otrzymaniu od firmy pełnej specyfikacji technicznej okazało się, że pod maską pracuje nie Snapdragon 865, a Snapdragon 765G.
                </StyledArticleParagraph>
                <StyledArticleParagraph>
                    Testowałem wcześniej kilka urządzeń z tym procesorem, ale w vivo X51 5G działa on najlepiej z nich wszystkich. Wynika to w dużej mierze z tego, jak wiele pracy vivo włożyło w swoje oprogramowanie Funtouch OS 10.
                </StyledArticleParagraph>
                <StyledParagraph>
                    Udostępnij
                </StyledParagraph>
                <Line />
                <StyledSocialMediaWrapper>
                    <StyledSocialMedia src={facebook} alt="" />
                    <StyledSocialMedia src={youtube} alt="" />
                </StyledSocialMediaWrapper>
                <StyledTag>
                    TAGI:
                    <a> VIVO,</a>
                    <a>VIVO POLSKA,</a>
                    <a>VIVO W POLSCE,</a>
                    <a>VIVO X51 5G,</a>
                    <a>VIVO X51 5G APARAT,</a>
                    <a>VIVO X51 5G CENA,</a>
                    <a>VIVO X51 5G OPINIE</a>
                </StyledTag>
                <StyledDisqus>
                    <Disqus />
                </StyledDisqus>
            </StyledArticleWrapper>

        </MainLayout>
    );
}

export default ArticlePreview;