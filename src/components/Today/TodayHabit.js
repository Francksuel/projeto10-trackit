import styled from "styled-components";
import { Checkbox } from 'react-ionicons';
import { uncheckHabit, checkHabit, getTodayHabits } from "../../services/trackIt";

export default function TodayHabit({ habit, setTodayHabits, reloadHabit, setReloadHabit }) {

    function isDone(habit) {
        if (habit.done) {
            uncheckHabit(habit.id);
            const promise = getTodayHabits();
            promise.then((res) => {
                setTodayHabits(res.data);
                setReloadHabit(!reloadHabit);
            });
        } else {
            checkHabit(habit.id);
            const promise = getTodayHabits();
            promise.then((res) => {
                setTodayHabits(res.data);
                setReloadHabit(!reloadHabit);
            });
        }
    }

    return (
        <Wrapper>
            <h3>{habit.name}</h3>
            <h4>Sequência atual: <CurrentSequence habit={habit}>{habit.currentSequence} dias </CurrentSequence></h4>
            <h4>Seu recorde: <HighestSequence habit={habit}>{habit.highestSequence} dias</HighestSequence></h4>
            <div onClick={() => isDone(habit)}>
                <Checkbox width="69px" height="69px" color={habit.done ? "#8FC549" : "#E7E7E7"} />
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
    h4{        
        color: #666666;
        font-size: 13px;
    } 
    div{
position: absolute;
top:13px;
right: 13px;
cursor: pointer;
    }
    `
const CurrentSequence = styled.span`
    color: ${props=> props.habit.done ? '#8FC549' : '#666666'};
`
const HighestSequence = styled.span`
    color: ${props=> props.habit.done ? 
    props.habit.currentSequence === props.habit.highestSequence ? 
    '#8FC549' : '#666666':'#666666'};
`