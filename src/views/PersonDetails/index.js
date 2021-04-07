import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CharacterDetails from 'components/organisms/CharacterDetails';
import {
  fetchPersonDetails,
  selectLoading,
  selectPersonDetails,
} from './personDetailsSlice';
import Spinner from 'components/atoms/Spinner';
import { selectPeople } from 'views/PeopleList/peopleListSlice';

const PersonDetails = () => {
  const { id } = useParams();
  const people = useSelector(selectPeople);
  const personDetails = useSelector(selectPersonDetails);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [personUrl] = people.filter(({ name }) => name === id);

  useEffect(() => {
    dispatch(fetchPersonDetails(personUrl.url));
  }, [dispatch, personUrl]);

  if (loading) {
    return <Spinner />;
  }

  return <CharacterDetails detailsData={personDetails} />;
};

export default PersonDetails;
