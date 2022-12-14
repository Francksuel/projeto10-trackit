import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postRegistration } from "../../services/trackIt";
import { ThreeDots } from 'react-loader-spinner';
import Logo from "../common/Logo";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [buttonValue, setButtonValue] = useState("Cadastrar");
    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        setIsDisabled(true);
        setButtonValue(<ThreeDots color="white" height="13px" />);
        const dataRegister = {
            email,
            name,
            image,
            password,
        }
        const request = postRegistration(dataRegister);
        request.catch((res) => {
            alert(res.response.data.message);            
            setIsDisabled(false);
            setButtonValue("Cadastrar");
        });
        request.then(() => navigate("/"));
    }

    return (
        <ScreenRegistration>
            <Logo />
            <form onSubmit={sendForm}>
                <Input placeholder={"email"}
                    type={"email"}
                    value={email}
                    disabled={isDisabled}
                    onChange={e => setEmail(e.target.value)} />
                <Input placeholder={"senha"}
                    type={"password"}
                    value={password}
                    disabled={isDisabled}
                    onChange={e => setPassword(e.target.value)} />
                <Input placeholder={"nome"}
                    type={"text"}
                    value={name}
                    disabled={isDisabled}
                    onChange={e => setName(e.target.value)} />
                <Input placeholder={"foto"}
                    type={"url"}
                    value={image}
                    disabled={isDisabled}
                    onChange={e => setImage(e.target.value)} />
                <Button disabled={isDisabled} value={buttonValue} />
            </form>
            <Link to={'/'}><h6>J?? tem uma conta? Fa??a login!</h6></Link>
        </ScreenRegistration>
    )
}
const ScreenRegistration = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 130vh;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`