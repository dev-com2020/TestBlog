import React from 'react'
import '../../assets/fontAwesome/FontAwesome'
import PopularQuery from './PopularQuery';

import {
    PopularContainer,
} from './PopularStyles'

const Popular = () => {

    return (
        <PopularContainer>
            <PopularQuery />
        </PopularContainer>
    );
}

export default Popular;