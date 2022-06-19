import styled from "@emotion/styled";
import { FC } from "react";

const StyledLabel = styled.label`
    margin-right: 5px;
`;

const StyledInput = styled.input`
    width: 60%;
    border: 1px solid rgba( 255, 255, 255, 0.18);
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
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
            <StyledLabel htmlFor={id}>{label}&nbsp;</StyledLabel>
            <StyledInput type={type} name={name} id={id} required={required} />
        </Div>
    )
}

export default Input;