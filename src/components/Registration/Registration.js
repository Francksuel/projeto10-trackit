import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postRegistration } from "../services/trackIt";
import Logo from "../common/Logo";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        const dataRegister = {
            email,
            name,
            image,
            password,
        }
        const request = postRegistration(dataRegister);
        request.then(() =>
            navigate("/")
        );
    }

    return (
        <ScreenLogin>
            <Logo />
            <form onSubmit={sendForm}>
                <Input placeholder={"email"} type={"email"} value={email} onChange={e => setEmail(e.target.value)} />
                <Input placeholder={"senha"} type={"password"} value={password} onChange={e => setPassword(e.target.value)} />
                <Input placeholder={"nome"} type={"text"} value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder={"foto"} type={"url"} value={image} onChange={e => setImage(e.target.value)} />
                <Button value={"Cadastrar"} />
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
