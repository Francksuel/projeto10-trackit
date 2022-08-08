import { useState, useEffect } from "react";
import { getHabits, getToken } from "../../services/trackIt";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Top from "../common/Top";
import CreateCard from "./CreateCard";
import HabitCard from "./HabitCard";
import Menu from "../common/Menu";

export default function Habits() {
    const navigate = useNavigate();
    const [createNow, setCreateNow] = useState(false);
    const [isCreated, setIsCreated] = useState(true);
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
        const isLogged = getToken();
        if (!isLogged) {
            alert("Você não está logado!");
            navigate("/");
        }
        const promise = getHabits();
        promise.then((res) => 
            setUserHabits(res.data)
        );
    }, [createNow, reloadHabits, navigate]);

    return (
        <>
            <Top />
            <HabitsWrapper>
                <CreateMenu><h1>Meus hábitos</h1><button onClick={() => {
                    setCreateNow(true);
                    setIsCreated(true);
                }}>+</button></CreateMenu>
                {isCreated ?
                    <CreateCard
                        isCreated={isCreated}
                        setIsCreated={setIsCreated}
                        setCreateNow={setCreateNow}
                        weekdays={weekdays}
                        createNow={createNow} />
                    : <></>}
                {(userHabits.length !== 0) ?
                    <>{userHabits.map((habit) => <HabitCard
                        key={habit.id}
                        habit={habit}
                        weekdays={weekdays}
                        setReloadHabits={setReloadHabits}
                        reloadHabits={reloadHabits} />)} </> :
                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>}
                <Menu />
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