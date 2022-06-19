import styled from '@emotion/styled';
import { FC } from 'react';

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

interface ButtonProps {
  label: string;
  icon?: JSX.Element;
}

const Button: FC<ButtonProps> = ({ label, icon }) => {
  return (
    <StyledButton
      type="button"
    >
      {icon}&nbsp;&nbsp;{label}
    </StyledButton>
  );
};

export default Button;