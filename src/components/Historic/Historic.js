import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getToken } from "../../services/trackIt";
import Menu from "../common/Menu";
import Top from "../common/Top";

export default function Historic() {
    const navigate = useNavigate();
    useEffect (()=>{
        const isLogged = getToken();
        if (!isLogged){
            alert("Você não está logado!");
            navigate("/");
        }
    },[navigate]);
   
    return (
        <>
            <Top />
            <Wrapper>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Wrapper>
            <Menu />
        </>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;    
    align-items:flex-start;   
    margin-top:70px;
    background-color: #F2F2F2;
    height: 100vh;  
    h1{
        margin: 28px 0 0 17px;
    }  
`
