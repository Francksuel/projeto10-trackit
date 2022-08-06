import { useState, useEffect } from "react";
import { getHabits } from "../../services/trackIt";
import styled from "styled-components";
import Top from "../common/Top";
import CreateCard from "./CreateCard";
import HabitCard from "./HabitCard";
import Menu from "../common/Menu";

export default function Habits() {
    const [createNow, setCreateNow] = useState(false);
    const [reloadHabits, setReloadHabits] = useState(false);
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

    }, [createNow, reloadHabits]);

    return (
        <>
            <Top />
            <HabitsWrapper>
                <CreateMenu><h1>Meus hábitos</h1><button onClick={() => setCreateNow(true)}>+</button></CreateMenu>
                {createNow ? <CreateCard setCreateNow={setCreateNow} weekdays={weekdays} /> : <></>}
                {(userHabits.length !== 0) ?
                    <>{userHabits.map((habit) => <HabitCard
                        key={habit.id}
                        habit={habit}
                        weekdays={weekdays}
                        setReloadHabits={setReloadHabits}
                        reloadHabits={reloadHabits} />)} </> :
                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>}
                    <Menu/>
            </HabitsWrapper>
        </>
    )
}
const HabitsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top:70px;
margin-bottom: 120px;
`
const CreateMenu = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
height: 79px;
padding: 0 18px;
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