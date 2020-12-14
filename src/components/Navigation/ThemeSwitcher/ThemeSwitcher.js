import React from 'react';
import { ThemeConsumer } from 'styled-components'
import {
    StyledCheckbox,
    StyledLabel,
    StyledBall,
} from './ThemeSwitcherStyles';


const ThemeSwitcher = () => {
    return (
        <div>
            <ThemeConsumer>{theme => (
                <StyledCheckbox type="checkbox" id='switcher'
                    onChange={e => theme.setTheme(
                        theme.mode === 'dark' ? { ...theme, mode: 'light' }
                            : { ...theme, mode: 'dark' }
                    )}
                />
            )}</ThemeConsumer>
            <StyledLabel htmlFor="switcher">
                <StyledBall />
            </StyledLabel>
        </div>
    );
}

export default ThemeSwitcher;