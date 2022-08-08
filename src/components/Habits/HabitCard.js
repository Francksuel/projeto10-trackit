import styled from "styled-components";
import { TrashOutline } from 'react-ionicons';
import { deleteHabit, getTodayHabits } from "../../services/trackIt";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Days from "../common/Days";

export default function HabitCard({ habit, weekdays, setReloadHabits, reloadHabits }) {
    const { setTodayHabits } = useContext(UserContext);

    function delHabit(id) {
        if (window.confirm("Deseja apagar esse hábito?")) {
            const request = deleteHabit(id);
            request.then(() => {
                setReloadHabits(!reloadHabits)
                const promise = getTodayHabits();
                promise.then((res) => {
                    setTodayHabits(res.data);
                });
            });
        }
    }
    
    return (
        <Wrapper>
            <h3>{habit.name}</h3>
            <DeleteButton onClick={() => delHabit(habit.id)}>
                <TrashOutline width="17px" height="20px" />
            </DeleteButton>
            <div>{weekdays.map((value, index) =>
                <Days key={index} index={index} days={habit.days} >{value.weekday}</Days>)}
            </div>
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
    div{
        display: flex;        
    }
`
const DeleteButton = styled.div`
    position: absolute;
    top: 11px;
    right: 10px;
    cursor:pointer;
`