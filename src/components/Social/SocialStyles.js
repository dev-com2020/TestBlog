import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/fontAwesome/FontAwesome'

export const SocialInfo = styled.div`
background-color: #9400F6;

width: 80px;
height: 25px;
border-radius: 5px;
margin: 0 0 7px 5px;
display: flex;
justify-content: space-around;
align-items: center;
box-sizing: border-box;
line-height: 20px;
@media(min-width: 1010px){
width: 180px;
height: 52px;
flex-direction: row !important;

}
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 12px;
}
span {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
}
`

export const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
font-size: 8px;
text-align: center;
@media(min-width: 1010px)
{
    font-size: 15px;
}
`