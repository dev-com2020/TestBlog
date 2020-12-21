import React from 'react';
import { Link } from 'gatsby';
import ComputerImg from '../../assets/img/komputery.png';
import MobileImg from '../../assets/img/mobile.png';
import SmartImg from '../../assets/img/smart-wear.png';
import HomeImg from '../../assets/img/dom.png';
import GameImg from '../../assets/img/gry.png';
import { Line } from '../Line/Line';
import {
    StyledWrapper,
    StyledHeading,
    StyledImage,
    StyledText
} from './CategoriesStyles';
const Categories = () => {
    return (
        <>
            <StyledHeading>KATEGORIE:</StyledHeading>
            <Line />
            <StyledWrapper>
                <StyledImage
                    as={Link}
                    to='/komputery'
                    src={ComputerImg}
                    alt="komputery"
                >
                    <StyledText>
                        Komputery
                    </StyledText>
                </StyledImage>
                <StyledImage
                    as={Link}
                    to='/mobile'
                    src={MobileImg}
                    alt="mobile"
                >
                    <StyledText>
                        Mobile
                        </StyledText>
                </StyledImage>
                <StyledImage
                    as={Link}
                    to='/smart-wear'
                    src={SmartImg}
                    alt="smart wear"
                >
                    <StyledText>
                        Smart wear
                        </StyledText>
                </StyledImage>
                <StyledImage
                    as={Link}
                    to='/dom'
                    src={HomeImg}
                    alt="dom"
                >
                    <StyledText>
                        Dom
                        </StyledText>
                </StyledImage>
                <StyledImage
                    as={Link}
                    to='/gry'
                    src={GameImg}
                    alt="gry"
                >
                    <StyledText>
                        Gry
                        </StyledText>
                </StyledImage>
            </StyledWrapper>

        </>
    );
}

export default Categories;