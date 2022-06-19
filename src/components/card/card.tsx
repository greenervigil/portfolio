import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

const Div = styled.div`
    min-height: 550px;
    width: 50vw;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    text-shadow: 0 0 10px;
    padding-top: 0.3em;
    overflow-y: hidden;
    background: rgba( 104, 215, 217, 0.15 );
    box-shadow: 0 8px 32px 0 #18cae6;
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media only screen and (max-width: 600px) {    
        height: 700px;
        width: 80vw;
    }
`;

interface CardProps {
    children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
    return(
        <Div>{children}</Div>
    )
}

export default Card;