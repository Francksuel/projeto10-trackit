import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect,useContext  } from "react";
import { postLogin,getToken  } from "../../services/trackIt";
import { ThreeDots } from 'react-loader-spinner';
import Logo from "../common/Logo";
import Input from "../common/Input";
import Button from "../common/Button";
import UserContext from "../../contexts/UserContext";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [buttonValue, setButtonValue] = useState("Entrar");
    const navigate = useNavigate();
    const { setDataClient } = useContext(UserContext);    

    useEffect (()=>{
        const isLogged = getToken();
        if (isLogged){            
            navigate("/hoje");
        }
    },[navigate]);

    function logInto(e) {
        e.preventDefault();
        setIsDisabled(true);
        setButtonValue(<ThreeDots color="white" height="13px"/>);
        const dataLog = {
            email,
            password,
        }
        const request = postLogin(dataLog);
        request.catch(() => {
            alert("Falha ao encontrar usuário!");
            setIsDisabled(false);
            setButtonValue("Entrar");
        });
        request.then((res) => {
            localStorage.setItem('trackIt', JSON.stringify(res.data.token));
            localStorage.setItem('trackIt/profile', JSON.stringify(res.data.image));
            setDataClient(res.data);
            navigate("/hoje");
        }
        );
    }
    return (
        <ScreenLogin>
            <Logo />
            <form onSubmit={logInto}>
                <Input placeholder={"email"} type={"email"} value={email} disabled={isDisabled} onChange={e => setEmail(e.target.value)} />
                <Input placeholder={"senha"} type={"password"} value={password} disabled={isDisabled} onChange={e => setPassword(e.target.value)} />
                <Button disabled={isDisabled} value={buttonValue} />
            </form>
            <Link to={'/cadastro'}><h6>Não tem uma conta? Cadastre-se!</h6></Link>
        </ScreenLogin>
    )
}
const ScreenLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
height: 120vh;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

