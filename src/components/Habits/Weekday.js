import styled from "styled-components"

export default function Weekday({ index, weekday, days, setDays }) {    
    function selectDay(index) {
        if (days.includes(index)) {
            const newArray = days.filter((id) => (id !== index));
            setDays(newArray);
        }else{
            const newArray = [...days, index];
                setDays(newArray);
        }
    }
    return (
        <Wrapper days={days} index={index} onClick={() => selectDay(index)}>{weekday}</Wrapper>
    )
}
const Wrapper = styled.div`
    width: 30px;
    height: 30px;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-right: 4px;
    ${props => props.days.includes(props.index) ?
        `color:#FFFFFF;
    background-color: #CFCFCF;`
        :
        `background-color: white;
    color:#DBDBDB;
    border: 1px solid #D4D4D4`
    } 
`