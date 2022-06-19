import styled from "@emotion/styled";
import { FC } from "react";

const StyledLabel = styled.label`
    margin-right: 5px;
`;

const StyledInput = styled.input`
    width: 70%;
    margin: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18);
`;

const Div = styled.div`
    margin: 5px;
`;

interface InputProps {
    type: string;
    name: string;
    id?: string;
    required?: boolean;
    label: string;
}

const Input: FC<InputProps> = ({ type, name, id, required = true, label}) => {
    return (
        <Div>
            <label htmlFor={id}>{label}&nbsp;</label>
            <input type={type} name={name} id={id} required={required} />
        </Div>
    )
}

export default Input;