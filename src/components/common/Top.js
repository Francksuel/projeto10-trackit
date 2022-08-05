import styled from "styled-components";
import logotipo from '../assets/trackIt.png'
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Top(){
    const {dataClient}=useContext(UserContext);
return( 
<Wrapper>
<Logotipo src={logotipo} alt="logotipo"/> 
<img src={dataClient.image} alt="profile"/>
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
