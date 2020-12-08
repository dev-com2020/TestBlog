import styled from 'styled-components';

export const StyledMenuButton = styled.div`
position: fixed;
    right: 10px;
    top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 38px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    z-index: 99999;
&.open .burger {
    transform: translateX(-50px);
        background-color: transparent;
        box-shadow: none;
}
&.open .burger::before {
    transform: rotate(45deg) translate(35px, -35px);

}
&.open .burger::after {
    transform:rotate(-45deg) translate(35px,35px);
}
`;
export const StyledMenuButtonBurger = styled.div`
 width: 30px;
        height: 4px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.404); */
        box-shadow: 0 3px 5px rgba(216, 208, 208, 0.404);
        transition: all .5s ease-in-out;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 4px;
            width: 30px;
            background-color: rgb(255, 255, 255);
            border-radius: 5px;
        box-shadow: 0 3px 5px rgba(216, 208, 208, 0.404);
            /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.404); */
            transition: all .5s ease-in-out;
        }

        &::before {
            transform: translateY(-10px);
        }

        &::after {
            transform: translateY(10px);
        }
`;