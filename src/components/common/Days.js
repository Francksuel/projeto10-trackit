import styled from "styled-components";

const Days = styled.div`
    width: 30px;
    height: 30px;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-right: 4px;
    ${props => props.pointer ? "cursor:pointer;" : ""}
    ${props => props.days.includes(props.index) ?
        `color:#FFFFFF;
    background-color: #CFCFCF;`
        :
        `background-color: white;
    color:#DBDBDB;
    border: 1px solid #D4D4D4`
    } 
`
export default Days;