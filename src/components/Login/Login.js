import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Input from "../common/Input";
import Button from "../common/Button";


export default function Login(){
return(   
    <ScreenLogin>
    <Logo />
    <form>
    <Input placeholder={"email"} type={"email"}/>
    <Input placeholder={"senha"} type={"password"}/>
    <Button  value={"Entrar"} />    
    </form>   
    <Link to={'/cadastro'}><h6>Não tem uma conta? Cadastre-se!</h6></Link>    
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

