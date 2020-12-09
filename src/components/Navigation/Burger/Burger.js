import React from 'react';
import {
    StyledMenuButton,
    StyledMenuButtonBurger
} from './BurgerStyles';

const Burger = ({ click, isOpen }) => {
    return (
        <StyledMenuButton className="burger-button" onClick={click} className={isOpen ? 'open' : null}>
            <StyledMenuButtonBurger className="burger" />
        </StyledMenuButton>
    );
}

export default Burger;