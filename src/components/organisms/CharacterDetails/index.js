import React from 'react';
import { useSelector } from 'react-redux';
import Detail from 'components/atoms/Detail';
import Header from 'components/atoms/Header';
import { Wrapper } from './styled';
import { selectLoading, selectPersonDetails } from 'redux/peopleSlice';
import Spinner from 'components/atoms/Spinner';
import { unNecessaryDetails } from './unNecessaryDetails';

const CharacterDetails = () => {
  const personDetails = useSelector(selectPersonDetails);
  const loading = useSelector(selectLoading);

  if (loading) {
    return <Spinner />;
  }

  const detailsName = Object.keys(personDetails);

  return (
    <Wrapper>
      <Header headerTitle={personDetails.name} />
      {detailsName
        .filter((name) => !unNecessaryDetails.includes(name))
        .map((detailName) => (
          <Detail
            key={detailName}
            detailName={detailName}
            detailValue={personDetails[detailName]}
          />
        ))}
    </Wrapper>
  );
};

export default CharacterDetails;
