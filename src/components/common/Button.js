import styled from "styled-components";
export default function Button({value}){
return(
<ButtonWrapper>{value}</ButtonWrapper>
)
}
const ButtonWrapper = styled.button`
width: 80.8vw;
height: 45px;
border-radius: 5px;
background-color: #52B6FF;
color: white;
border: none;
font-size: 21px;
`