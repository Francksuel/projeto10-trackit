import styled from "styled-components";
import logo from "../assets/group8.png";

export default function Logo(){
return(   
    <Wrapper src={logo} alt="logo"/>   
)
}
const Wrapper = styled.img`
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
    margin-bottom: 32.62px;
`