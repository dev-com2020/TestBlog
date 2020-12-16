import React from 'react';
import {
    StyledMenuButton,
    StyledMenuButtonBurger
} from './BurgerStyles';

const Burger = ({ handleclick, isOpen }) => {
    return (
        <StyledMenuButton className="burger-button" onClick={handleclick} className={isOpen ? 'open' : null}>
            <StyledMenuButtonBurger className="burger" />
        </StyledMenuButton>
    );
}

export default Burger;