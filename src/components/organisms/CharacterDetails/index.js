import React from 'react';
import Detail from 'components/atoms/Detail';
import Header from 'components/atoms/Header';
import { Wrapper } from './styled';
import { unNecessaryDetails } from './unNecessaryDetails';

const CharacterDetails = ({ detailsData }) => {
  const detailsName = Object.keys(detailsData);

  return (
    <Wrapper>
      <Header headerTitle={detailsData.name} />
      {detailsName
        .filter((name) => !unNecessaryDetails.includes(name))
        .map((detailName) => (
          <Detail
            key={detailName}
            detailName={detailName}
            detailValue={detailsData[detailName]}
          />
        ))}
    </Wrapper>
  );
};

export default CharacterDetails;
