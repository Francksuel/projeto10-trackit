import styled from "styled-components";
import logotipo from '../assets/trackIt.png'
export default function Top({source}){
return(
<Wrapper>
<Logotipo src={logotipo} alt="logotipo"/> 
<img src={source} alt="profile"/>
</Wrapper>
)   
}

const Wrapper = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 18px;
background-color: #126BA5;
box-shadow: 0px 4px 4px 0px #00000026;
position: fixed;
top: 0;
left: 0;
img{
    width: 51px;
    height: 51px;
    border-radius: 50%;    
}   
`
const Logotipo = styled.img`
&&{width: 97px;
height: 49px;
border-radius: 0%;}
`
