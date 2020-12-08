import React from 'react';
import {
    StyledMenuButton,
    StyledMenuButtonBurger
} from './BurgerStyles';

const Burger = ({ onClick, isOpen }) => {
    return (
        <StyledMenuButton className="burger-button" onClick={onClick} className={isOpen ? 'open' : null}>
            <StyledMenuButtonBurger className="burger" />
        </StyledMenuButton>
    );
}

export default Burger;