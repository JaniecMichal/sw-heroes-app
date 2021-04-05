import React from 'react';
import {
  DetailName,
  DetailValue,
  DetailWrapper,
  ArrayValueWrapper,
} from './styled';

const Detail = ({ detailName, detailValue }) => {
  return (
    <DetailWrapper>
      <DetailName>{detailName}: </DetailName>
      {Array.isArray(detailValue) ? (
        <ArrayValueWrapper>
          {detailValue.map((value) => (
            <DetailValue key={value}>{value}</DetailValue>
          ))}
        </ArrayValueWrapper>
      ) : (
        <DetailValue>{detailValue}</DetailValue>
      )}
    </DetailWrapper>
  );
};

export default Detail;
