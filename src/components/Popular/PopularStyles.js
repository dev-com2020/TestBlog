import styled from 'styled-components'
import Social from '../Social/Social'

export const PopularContainer = styled.div`
width: 100%;
height: auto;
padding: 2rem 0rem;
display: flex;
flex-direction:column;
align-items:space-between;
justify-content:space-between;
@media (min-width: 1010px){
    flex-direction:row;
}
div {
    display: flex;
    @media(min-width: 1010px)
    {
        flex-direction: column;
    }
}
`

export const AboutInfo = styled.div`
padding-left: 1rem;
display: flex;
flex-direction: column;
@media(min-width:1010px){
    padding-left: 0rem;
}
`

export const Image = styled.div`
width: 180px;
height: 120px;
margin-top: 20px;
text-decoration: none;
color: #fff !important;
@media (min-width: 1010px){
    width: 404px;
    height: 293px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
}
background: url(${({ src }) => src});
background-size: cover;
display: flex;
justify-content: flex-start;
align-items: flex-end;
`

export const Category = styled.div`
display: flex;
justify-content: space-between;
font-size: 20px;
font-weight: bold;
flex-direction: row !important;
`
export const CategoryName = styled.span`
padding: 1rem 0;
`
export const Favorite = styled.div`
padding: 0;
display: flex;
flex-direction: column;
.icon {
 padding-top: 5px;
}
span {
order: 2;
font-size: 13px;
text-align: center;
}
`
export const Headline = styled.h2`
font-size: 1.5rem;
padding: 0;
margin: 0;
text-decoration: none;
@media (min-width: 1010px){
    font-size: 2rem;
}
`