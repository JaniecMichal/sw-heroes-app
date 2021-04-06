import React, { useEffect } from 'react';
import { StyledList, Wrapper } from './styled';
import ListItem from 'components/molecules/ListItem';
import {
  fetchFilms,
  fetchPeople,
  selectLoading,
  selectPeople,
} from 'redux/peopleSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'components/atoms/Spinner';

const CharactersList = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <Wrapper>
      <StyledList>
        {loading ? (
          <Spinner />
        ) : (
          people.length &&
          people.map((person) => {
            return <ListItem key={person.name} personData={person} />;
          })
        )}
      </StyledList>
    </Wrapper>
  );
};

export default CharactersList;
