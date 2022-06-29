import { FC } from 'react';
import styled from "@emotion/styled";

const Div = styled.div`
    padding: 15px;
`;

interface ContainerProps {
    children?: JSX.Element;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <Div data-testid='container'>
            {children}
        </Div>
    );
}

export default Container;