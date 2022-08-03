import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Registration (){
    return (
        <ScreenLogin>
        <Logo />
        <form>
        <Input placeholder={"email"} type={"email"}/>
        <Input placeholder={"senha"} type={"password"}/>
        <Input placeholder={"nome"} type={"text"}/>
        <Input placeholder={"foto"} type={"url"}/>
        <Button  value={"Cadastrar"} />    
        </form>   
        <Link to={'/'}><h6>Já tem uma conta? Faça login!</h6></Link>    
        </ScreenLogin>
    )
}
const ScreenLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
