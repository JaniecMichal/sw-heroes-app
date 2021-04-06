import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilms } from 'redux/peopleSlice';
import {
  DetailName,
  DetailValue,
  DetailWrapper,
  ArrayValueWrapper,
} from './styled';

const Detail = ({ detailName, detailValue }) => {
  const films = useSelector(selectFilms);

  return (
    <DetailWrapper>
      <DetailName>{detailName}: </DetailName>
      {Array.isArray(detailValue) ? (
        <ArrayValueWrapper>
          {detailValue.map((value) =>
            films
              .filter(({ url }) => url === value)
              .map(({ title }) => (
                <DetailValue key={title}>{title}</DetailValue>
              ))
          )}
        </ArrayValueWrapper>
      ) : (
        <DetailValue>{detailValue}</DetailValue>
      )}
    </DetailWrapper>
  );
};

export default Detail;
