import styled from 'styled-components'
import { Link } from 'gatsby'

export const FooterContainer = styled.footer`
margin-top: 5rem;
height: auto;
width: 100%;
background-color: #0B122D;
display: flex;
justify-content: center;
`
export const FooterBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 1150px){
    width: 80%;
    height: 289px;
    flex-direction: row;
    position: relative;
}
`
export const BlogInfo = styled.div`
order: 2;
display: flex;
flex-direction: column;
text-align: center;
padding-bottom: 2rem;
line-height: 26px;
h2{
    color: white !important;
    font-size: 20px;
    font-weight: bold;
}


@media (min-width: 1150px){
    order: 1;
    text-align: start;
    padding: 0;
    padding-bottom: 1rem;
}
`

export const StyledLink = styled(Link)`
    color: #DBDBDB !important;
    text-decoration: none;
    font-size: 20px;
    font-weight: 200;
    transition: color 0.3s;
    :hover {
        color: #7EE5FF !important;
    }
`

export const SocialMedia = styled.div`
order: 3;
display: flex;
flex-direction: column;
text-align: center;
padding-bottom: 1rem;
line-height: 26px;
h2{
    color: white !important;
    font-size: 20px;
    font-weight: bold;
}
a{
    color: #DBDBDB !important;
    text-decoration: none;
    font-size: 20px;
    font-weight: 200;
    transition: color 0.3s;
    :hover{
        color: #7EE5FF !important;
    }
}
@media (min-width: 1150px)
{
    order: 2;
    padding: 0;
    text-align: start;
    padding-bottom: 1rem;
    padding-left: 5rem;
}
`
export const Logo = styled.div`
display: flex;
justify-content: center;
padding: 1rem 0rem 2rem 0rem;
order: 1;
@media (min-width:1150px){
    order: 3;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
`
