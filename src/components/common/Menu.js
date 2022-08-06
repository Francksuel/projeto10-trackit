import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Menu() {
    const navigate = useNavigate();
    const {todayHabits} = useContext(UserContext);
    const dones=todayHabits.filter((habit)=>habit.done);
    const percentage = ((dones.length/todayHabits.length)).toFixed(2);
    return (
        <Wrapper>
            <h3 onClick={() => navigate('/habitos')}>Hábitos</h3>
            <div onClick={() => navigate('/hoje')}>
                <CircularProgressbar
                    value={percentage}
                    text="Hoje"
                    maxValue={1}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </div>
            <h3 onClick={() => navigate('/historico')}>Histórico</h3>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100vw;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    position:fixed;
    bottom: 0;
    left: 0;
    h3{
        color:#52B6FF;
        font-size: 18px;
        margin: 0 9.5vw;
        cursor: pointer;
    }
    div{
        width: 91px;
        border-radius: 50px;
        position: fixed;   
        bottom: 10px;
        left: calc(50vw - 45.5px);
        cursor: pointer;
    }
`
