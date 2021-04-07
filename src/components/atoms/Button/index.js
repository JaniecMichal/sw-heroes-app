import React from 'react';
import { StyledButton } from './styled';

const Button = ({ children, onClick, loadMore, intro }) => {
  return (
    <StyledButton
      loadMore={loadMore ? 'loadMore' : ''}
      intro={intro}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
