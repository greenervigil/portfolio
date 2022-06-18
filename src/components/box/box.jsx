import styled from '@emotion/styled';

const Div = styled.div`
    min-height: 550px;
    width: 50vw;
    background-color: #000;
    color: #fff;
    border: 1px solid #18cae6;
    box-shadow: 10px 5px 5px #18cae6;
    margin: 0 auto;
    text-align: center;
    text-shadow: 0 0 10px;
    padding-top: 0.3em;
    border-radius: 10px;
    overflow-y: hidden;

    @media only screen and (max-width: 600px) {    
        height: 700px;
        width: 80vw;
    }
`;

const Box = ({ children }) => {
    return(
        <Div>{children}</Div>
    )
}

export default Box;