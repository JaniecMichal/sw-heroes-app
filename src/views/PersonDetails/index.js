import React from 'react';
import { useSelector } from 'react-redux';
import CharacterDetails from 'components/organisms/CharacterDetails';
import { selectLoading, selectPersonDetails } from './personDetailsSlice';
import Spinner from 'components/atoms/Spinner';

const PersonDetails = () => {
  const personDetails = useSelector(selectPersonDetails);
  const loading = useSelector(selectLoading);

  if (loading) {
    return <Spinner />;
  }

  return <CharacterDetails detailsData={personDetails} />;
};

export default PersonDetails;
