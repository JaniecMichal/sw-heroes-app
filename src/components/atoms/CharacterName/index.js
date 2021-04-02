import React from 'react';
import { StyledCaption, StyledName, Wrapper, BoldedCaption } from './styled';

const CharacterName = ({ name, gender, birthYear }) => {
  return (
    <Wrapper>
      <StyledName>{name}</StyledName>
      <StyledCaption>
        gender: <BoldedCaption>{gender}</BoldedCaption>
      </StyledCaption>
      <StyledCaption>
        birth year: <BoldedCaption>{birthYear}</BoldedCaption>
      </StyledCaption>
    </Wrapper>
  );
};

export default CharacterName;
