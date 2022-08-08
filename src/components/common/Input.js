import styled from "styled-components";

export default function Input({ placeholder, type, value, disabled, ...otherProps }) {
    return (
        <Wrapper
            required
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            type={type}
            {...otherProps} />
    )
}

const Wrapper = styled.input`
    width: 80.8vw;
    height: 45px;
    margin-bottom: 6px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    padding: 11px;
`