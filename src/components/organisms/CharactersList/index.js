import React from 'react';
import { StyledList, Wrapper } from './styled';
import ListItem from 'components/molecules/ListItem';

const CharactersList = ({ people }) => {
  return (
    <Wrapper>
      <StyledList>
        {people.length &&
          people.map((person) => {
            return <ListItem key={person.name} personData={person} />;
          })}
      </StyledList>
    </Wrapper>
  );
};

export default CharactersList;
