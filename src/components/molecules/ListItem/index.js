import React from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper } from './styled';
import CharacterName from 'components/atoms/CharacterName';
import Button from 'components/atoms/Button';
import { ReactComponent as ProfileIcon } from 'assets/images/profile.svg';

const UserListItem = ({ personData }) => {
  return (
    <ItemWrapper>
      <CharacterName
        name={personData.name}
        gender={personData.gender}
        birthYear={personData.birth_year}
      />
      <Button>
        <ProfileIcon />
      </Button>
    </ItemWrapper>
  );
};

UserListItem.propTypes = {
  personData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
  }),
};

export default UserListItem;
