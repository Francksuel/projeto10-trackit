import { useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Top from "../common/Top";
import CreateCard from "./CreateCard";

export default function Habits() {
    const location = useLocation();
    const [createNow, setCreateNow] = useState(false);

    return (
        <>
            <Top source={location.state.image} />
            <HabitsWrapper>
                <CreateMenu><h1>Meus hábitos</h1><button onClick={() => setCreateNow(true)}>+</button></CreateMenu>
                {createNow ? <CreateCard setCreateNow={setCreateNow} /> : <></>}
            </HabitsWrapper>
        </>
    )
}
const HabitsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top:70px;
background-color: #F2F2F2;
height: 100vh;
`
const CreateMenu = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
height: 79px;
padding: 0 18px;
h1{
font-size: 23px;
color:#126BA5;
}
button{
    width: 40px;
    height: 35px;
    color: white;
    font-size: 27px;
    border: none;
    border-radius: 4.64px;
    background-color: #52B6FF;
}
`