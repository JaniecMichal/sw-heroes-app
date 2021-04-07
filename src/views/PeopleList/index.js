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
  fetchNextPeople,
} from 'redux/peopleSlice';

const PeopleList = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const [whichPart, setWhichPart] = useState(1);
  const next = useSelector(selectNext);

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchFilms());
  }, [dispatch]);

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
      <CharactersList people={whichPart === 2 ? people.slice(0, -5) : people} />
      <Button onClick={loadNextFive} loadMore>
        Load More Heroes!
      </Button>
    </>
  );
};
export default PeopleList;
