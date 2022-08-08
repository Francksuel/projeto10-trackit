import styled from "styled-components";
import dayjs from 'dayjs';
import "dayjs/locale/pt-br";
import updateLocale from 'dayjs/plugin/updateLocale';
import { useNavigate } from "react-router-dom";
import { getTodayHabits,getToken } from "../../services/trackIt";
import {useState, useEffect,useContext} from "react";
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
    const navigate = useNavigate();
    
    useEffect(() => {
        const isLogged = getToken();
        if (!isLogged){
            alert("Você não está logado!");
            navigate("/");
        }
        const promise = getTodayHabits();
        promise.then((res) => {
            setTodayHabits(res.data);
        });        
    }, [reloadHabit,setTodayHabits,navigate]);
    const dones=todayHabits.filter((habit)=>habit.done);   
    return (
        <>
            <Top />
            <Wrapper>
                <h1>{now}</h1>                
                {(todayHabits.length !== 0) ?
                    <>
                    {dones.length===0 ? 
                    <p>Nenhum hábito concluído ainda</p> : 
                    <h5>{((dones.length/todayHabits.length)*100).toFixed(0)}% dos hábitos concluídos</h5>}
                    {todayHabits.map((habit) => <TodayHabit
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
    margin-bottom: 101px;
    background-color: #F2F2F2;   
    padding: 18px;
    p{
        color: #BABABA;
        font-size: 18px;
        margin-top: 2px;
        margin-bottom: 18px;
    }
    h5{
        color: #8FC549;
        font-size: 18px;
        margin-top: 2px;
        margin-bottom: 18px; 
    }
`