import React from 'react';
import { StyledLogoWrapper, StyledLogoTitle } from './styled';

const Logo = ({ logo }) => {
  return (
    <StyledLogoWrapper>
      <StyledLogoTitle>{logo}</StyledLogoTitle>
    </StyledLogoWrapper>
  );
};

export default Logo;
