import styled from "styled-components";
export default function Input({placeholder,type}){
return(
<InputWrapper required placeholder={placeholder} type={type}/>
)   
}

const InputWrapper = styled.input`
width: 80.8vw;
height: 45px;
margin-bottom: 6px;
font-size: 20px;
border-radius: 5px;
border: 1px solid #D4D4D4;
`