import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { postHabit, getTodayHabits } from "../../services/trackIt";
import { ThreeDots } from 'react-loader-spinner';
import Input from "../common/Input";
import Weekday from "./Weekday";
import Button from "../common/Button";

export default function CreateCard({ isCreated, setIsCreated, setCreateNow, weekdays, createNow }) {
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [buttonValue, setButtonValue] = useState("Salvar");
    const { setTodayHabits } = useContext(UserContext);

    function createHabit(e) {
        e.preventDefault();
        setIsDisabled(true);
        setButtonValue(<ThreeDots color="white" height="11px" />);
        if (days.length === 0) {
            alert("Selecione pelo menos um dia da semana!");
            setIsDisabled(false);
            setButtonValue("Salvar");
        } else {
            setDays(days.sort());
            const request = postHabit({
                name,
                days,
            });
            request.catch(() => {
                alert("Erro ao cadastrar hábito");
                setIsDisabled(false);
                setButtonValue("Salvar");
            });
            request.then(() => {
                setIsCreated(!isCreated);
                setCreateNow(false);
                const promise = getTodayHabits();
                promise.then((res) => {
                    setTodayHabits(res.data);
                });
            }

            );
        }
    }

    return (
        <Wrapper createNow={createNow}>
            <form onSubmit={createHabit}>
                <Input value={name} placeholder={"nome do hábito"} type={"text"} disabled={isDisabled} onChange={e => setName(e.target.value)} />
                <div>
                    {weekdays.map((value, index) =>
                        <Weekday isDisabled={isDisabled} key={index} index={index} weekday={value.weekday} days={days} setDays={setDays} />)}
                </div>
                <span><h5 onClick={() => { if (!isDisabled) { setCreateNow(false) } }} >Cancelar</h5>
                    <Button small disabled={isDisabled} value={buttonValue} /></span>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: ${props => props.createNow ? "flex" : "none"};
    width: 90.6vw;
    height: 180px;
    background-color: white;     
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
    h5{
        font-size: 16px;
        color: #52B6FF;
        margin-right: 23px;
        cursor: pointer;
    }    `