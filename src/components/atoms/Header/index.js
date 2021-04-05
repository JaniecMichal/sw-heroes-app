import React from 'react';
import { StyledHeader } from './styled';

const Header = ({ headerTitle }) => (
  <StyledHeader>
    <h2>{headerTitle}</h2>
  </StyledHeader>
);

export default Header;
