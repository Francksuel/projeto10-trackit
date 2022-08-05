import { useState, useEffect } from "react";
import { getHabits } from "../services/trackIt";
import styled from "styled-components";
import Top from "../common/Top";
import CreateCard from "./CreateCard";
import HabitCard from "./HabitCard";

export default function Habits() {
    const [createNow, setCreateNow] = useState(false);
    const [userHabits, setUserHabits] = useState([]);
    const weekdays = [
        { weekday: "D" },
        { weekday: "S" },
        { weekday: "T" },
        { weekday: "Q" },
        { weekday: "Q" },
        { weekday: "S" },
        { weekday: "S" },
    ];
    useEffect(() => {
        const promise = getHabits();

        promise.then((res) => {
            setUserHabits(res.data)
        });

    }, [createNow]);

    return (
        <>
            <Top/>
            <HabitsWrapper>
                <CreateMenu><h1>Meus hábitos</h1><button onClick={() => setCreateNow(true)}>+</button></CreateMenu>
                {createNow ? <CreateCard setCreateNow={setCreateNow} weekdays={weekdays}/> : <></>}
                {(userHabits.length !== 0) ?
                    <>{userHabits.map((habit) => <HabitCard key={habit.id} habit={habit}  weekdays={weekdays}/>)} </> :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
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

p{
    color: #666666;
    font-size: 18px;
    margin: 29px 18px;    
}
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
    cursor: pointer;
}
`