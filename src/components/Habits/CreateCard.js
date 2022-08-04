import styled from "styled-components";
import { useState } from "react";
import { postHabit } from "../services/trackIt";
import Input from "../common/Input";
import Weekday from "./Weekday";

export default function CreateCard({ setCreateNow }) {
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const weekdays = [
        { weekday: "D" },
        { weekday: "S" },
        { weekday: "T" },
        { weekday: "Q" },
        { weekday: "Q" },
        { weekday: "S" },
        { weekday: "S" },
    ];
    function createHabit(e) {
        e.preventDefault();
        if (days.length === 0) {
            alert("Selecione pelo menos um dia da semana!");
        } else {
            setDays(days.sort());           
           const request=postHabit({
            name,
            days,
           });
           request.catch(()=>alert("Erro ao cadastrar hábito"));
           request.then(()=>
            setCreateNow(false)
           );
        }
    }
    return (
        <Wrapper>
            <form onSubmit={createHabit}>
                <Input value={name} placeholder={"nome do hábito"} type={"text"} onChange={e => setName(e.target.value)} />
                <div>{weekdays.map((value, index) => <Weekday key={index} index={index} weekday={value.weekday} days={days} setDays={setDays} />)}</div>
                <span><h2 onClick={() => setCreateNow(false)} >Cancelar</h2>
                    <button>Salvar</button></span>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 90.6vw;
    height: 180px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 18px;
    border-radius: 5px;
    div{
        display: flex;
    }
    span{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 29px;
    }
    h2{
        font-size: 16px;
        color: #52B6FF;
        margin-right: 23px;
    }
    button{
        width: 84px;
        height: 35px;
        border-radius: 4.64px;
        background-color: #52B6FF;
        color: white;
        border: none;
        font-size: 16px;
        cursor: pointer;
    }    
`