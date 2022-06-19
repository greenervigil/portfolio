import styled from '@emotion/styled';

const StyledButton = styled.button`
    background-color: #18cae6;
    border: 1px solid #18cae6;
    border-radius: 10px;
    color: #000;
    height: 31px;
    padding: 0 10px;
    text-shadow: 0 0 10px;

    &:hover {
        background-color: rgba( 104, 215, 217, 0.15 );
        border: 1px solid #18cae6;
        border-radius: 8px;
        color: #18cae6;
        text-shadow: 0 0 10px;
        box-shadow: 0 8px 32px 0 #18cae6;
    }
`;

const Button = ({ label, icon }) => {
  return (
    <StyledButton
      type="button"
    >
      {icon}{label}
    </StyledButton>
  );
};

export default Button;