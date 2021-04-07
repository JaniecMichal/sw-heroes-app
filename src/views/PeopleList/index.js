import React, { useEffect, useState } from 'react';
import CharactersList from 'components/organisms/CharactersList';
import Button from 'components/atoms/Button';
import Spinner from 'components/atoms/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNext,
  fetchPeople,
  fetchFilms,
  selectPeople,
  selectLoading,
} from 'redux/peopleSlice';

const PeopleList = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const [whichPart, setWhichPart] = useState(1);
  const next = useSelector(selectNext);

  const loadNextFive = () => {
    dispatch(fetchPeople(next));
  };

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchFilms());
  }, [dispatch]);

  if (!loading) {
    return (
      <>
        <CharactersList people={people} />
        <Button onClick={() => loadNextFive} loadMore>
          Load More Heroes!
        </Button>
      </>
    );
  }
  return <Spinner />;
};
export default PeopleList;
