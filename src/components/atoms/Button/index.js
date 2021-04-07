import React from 'react';
import { StyledButton } from './styled';

const Button = ({ children, onClick, loadMore }) => {
  return (
    <StyledButton loadMore={loadMore ? 'loadMore' : ''} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
