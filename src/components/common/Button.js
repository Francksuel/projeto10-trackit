import styled from "styled-components";

export default function Button({ value, ...otherProps }) {
    return (
        <Wrapper {...otherProps} >{value}</Wrapper>
    )
}
const Wrapper = styled.button`
    ${props => props.small ?
        `
            width: 84px;
            height: 35px;
            font-size: 16px;`
        :
        `
            width: 80.8vw;
            height: 45px;
            font-size: 21px;`
    }
    border-radius: 5px;
    background-color: #52B6FF;
    color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`