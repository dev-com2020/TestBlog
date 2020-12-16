import React from 'react'
import '../../assets/fontAwesome/FontAwesome'
import { SocialInfo, FontAwesomeIconStyle } from './SocialStyles'

const Social = () => {
    return (
        <SocialInfo>

            <div>
                <FontAwesomeIconStyle icon={'heart'} size='1x' color='white' />
                <span>12</span>
            </div>
            <div>
                <FontAwesomeIconStyle icon={'heart'} size='1x' color='white' />
                <span>12</span>
            </div>
            <div>
                <FontAwesomeIconStyle icon={'heart'} size='1x' color='white' />
                <span>12</span>
            </div>
        </SocialInfo>
    )
}

export default Social