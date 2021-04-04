import React from 'react';
import {
  StyledCaption,
  StyledName,
  Wrapper,
  BoldedCaption,
  DetailsCaption,
  DetailsWrapper,
} from './styled';

const CharacterName = ({ name, gender, birthYear, moreDetails, showMore }) => {
  const detailProperties = Object.keys(moreDetails);
  return (
    <Wrapper>
      <StyledName>{name}</StyledName>
      <StyledCaption>
        gender: <BoldedCaption>{gender}</BoldedCaption>
      </StyledCaption>
      <StyledCaption>
        birth year: <BoldedCaption>{birthYear}</BoldedCaption>
      </StyledCaption>
      <DetailsWrapper>
        {detailProperties.map((property, index) => (
          <DetailsCaption key={index} hide={!showMore ? true : false}>
            {property}: <BoldedCaption>{moreDetails[property]}</BoldedCaption>
          </DetailsCaption>
        ))}
      </DetailsWrapper>
    </Wrapper>
  );
};

export default CharacterName;
