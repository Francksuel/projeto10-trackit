import styled from "styled-components";
import Days from "../common/Days";
import { Trash } from 'react-ionicons'
import { deleteHabit } from "../services/trackIt";

export default function HabitCard({ habit, weekdays }) {    
    function delHabit(id) {
        if (window.confirm("Deseja apagar esse hábito?")) {
            const request = deleteHabit(id);
            request.then(() => window.location.reload());
        }
    }
    return (
        <Wrapper>
            <h1>{habit.name}</h1>
            <DeleteButton onClick={() => delHabit(habit.id)}><Trash width="17px" height="20px" />  </DeleteButton>
            <div>{weekdays.map((value, index) => <Days index={index} days={habit.days} >{value.weekday}</Days>)}</div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 90.6vw;
    height: 91px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 18px;
    border-radius: 5px;
    margin-top: 10px;
    position: relative;
    h1{
        color: #666666;
        font-size: 20px;
    }
    div{
        display: flex;      
        margin-top: 8px;
    }
`
const DeleteButton = styled.div`
    position: absolute;
    top: 11px;
    right: 10px;
`