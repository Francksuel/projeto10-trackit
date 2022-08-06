import styled from "styled-components";
import dayjs from 'dayjs';
import "dayjs/locale/pt-br";
import updateLocale from 'dayjs/plugin/updateLocale';
import { getTodayHabits } from "../../services/trackIt";
import {useState, useEffect} from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Menu from "../common/Menu";
import Top from "../common/Top";
import TodayHabit from "./TodayHabit";

export default function Today() {
    dayjs.extend(updateLocale);
    dayjs.updateLocale('pt-br', {
        weekdays: [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado",
        ]
    })
    const now = dayjs().locale('pt-br').format("dddd, DD/MM");
    const {todayHabits, setTodayHabits} = useContext(UserContext);
    const [reloadHabit,setReloadHabit]=useState(false);
    useEffect(() => {
        const promise = getTodayHabits();
        promise.then((res) => {
            setTodayHabits(res.data);
        });
    }, [reloadHabit]);
    return (
        <>
            <Top />
            <Wrapper>
                <h1>{now}</h1>
                {(todayHabits.length !== 0) ?
                    <>{todayHabits.map((habit) => <TodayHabit
                        key={habit.id}
                        habit={habit}
                        todayHabits={todayHabits}
                        setTodayHabits={setTodayHabits}
                        reloadHabit={reloadHabit}
                        setReloadHabit={setReloadHabit}
                        />)} </> :
                    <h2>Você não tem nenhum hábito para hoje. Vá para sessão de hábitos para começar a trackear!</h2>}
            </Wrapper>
            <Menu />
        </>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top:70px;
    background-color: #F2F2F2;
    height: 100vh;
    padding: 18px;
`