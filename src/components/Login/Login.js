import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postLogin } from "../services/trackIt";
import Logo from "../common/Logo";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function logInto(e) {
        e.preventDefault();
        const dataLog = {
            email,
            password,
        }
        const request = postLogin(dataLog);
        request.then((res) => {
            localStorage.setItem('trackIt', JSON.stringify(res.data.token));            
            navigate("/habitos", { state: res.data })
        }
        );
        request.catch(()=>alert ("Usuário não encontrado"));
        
    }
    return (
        <ScreenLogin>
            <Logo />
            <form onSubmit={logInto}>
                <Input placeholder={"email"} type={"email"} value={email} onChange={e => setEmail(e.target.value)} />
                <Input placeholder={"senha"} type={"password"} value={password} onChange={e => setPassword(e.target.value)} />
                <Button value={"Entrar"} />
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

