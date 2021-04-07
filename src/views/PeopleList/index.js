import React, { useEffect, useState } from 'react';
import CharactersList from 'components/organisms/CharactersList';
import Button from 'components/atoms/Button';
import Spinner from 'components/atoms/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNext,
  fetchPeople,
  selectPeople,
  selectLoading,
  fetchNextPeople,
} from './peopleListSlice';
import { fetchFilms } from 'films/filmsSlice';

const PeopleList = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const [whichPart, setWhichPart] = useState(1);
  const next = useSelector(selectNext);
  const [currentList, setCurrentList] = useState(people);

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    if (whichPart === 2) {
      return setCurrentList(people.slice(0, -5));
    }
    setCurrentList(people);
  }, [people, whichPart]);

  const loadNextFive = () => {
    if (whichPart === 1) {
      dispatch(fetchNextPeople(next));
      setWhichPart(2);
      return;
    }
    setWhichPart(1);
  };

  if (loading && !people.length) {
    return <Spinner />;
  }

  return (
    <>
      <CharactersList people={currentList} />
      <Button onClick={loadNextFive} loadMore>
        Load More Heroes!
      </Button>
    </>
  );
};
export default PeopleList;
