import styled from "@emotion/styled";

const Div = styled.div`
    padding: 15px;
`;

const Container = ({ text }) => {
    return (
        <Div>
            <p>{text}</p>
        </Div>
    );
}

export default Container;