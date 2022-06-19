import { FC } from 'react';
import styled from "@emotion/styled";

const Div = styled.div`
    padding: 15px;
`;

interface ContainerProps {
    text: string;
}

const Container: FC<ContainerProps> = ({ text }) => {
    return (
        <Div>
            <p>{text}</p>
        </Div>
    );
}

export default Container;