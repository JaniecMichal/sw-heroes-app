import React from 'react';
import { StyledButton } from './styled';

const Button = ({ children, onClick, loadMore, intro, back }) => {
  return (
    <StyledButton
      loadMore={loadMore ? 'loadMore' : ''}
      intro={intro}
      back={back}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
