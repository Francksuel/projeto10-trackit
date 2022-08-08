import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logotipo from '../assets/trackIt.png';
import { LogOutOutline } from "react-ionicons";

export default function Top() {
    const profile = JSON.parse(localStorage.getItem("trackIt/profile"));
    const navigate = useNavigate();

    function logout() {
        if (window.confirm("Deseja sair da sua conta?")) {
            window.localStorage.removeItem('trackIt');
            window.localStorage.removeItem('trackIt/image');
            navigate("/");
        }
    }

    return (
        <Wrapper>
            <Logotipo src={logotipo} alt="logotipo" />
            <div>
                <div onClick={() => logout()}><LogOutOutline color="white"/></div>
                <img src={profile} alt="profile" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    div{
        display: flex;
        align-items: center;        
    }
    div > div{
        cursor:pointer;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%; 
        margin-left: 10px;
    }   
    `

const Logotipo = styled.img`
    &&{
        width: 97px;
        height: 49px;
        border-radius: 0%;
    }
`
