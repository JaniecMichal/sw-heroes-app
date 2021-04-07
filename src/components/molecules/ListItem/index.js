import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ItemWrapper } from './styled';
import CharacterName from 'components/atoms/CharacterName';
import Button from 'components/atoms/Button';
import { ReactComponent as ProfileIcon } from 'assets/images/profile.svg';
import { toPersonDetails } from 'assets/customFunctions/routes';

const UserListItem = ({ personData }) => {
  const { name, gender, birth_year } = personData;

  return (
    <ItemWrapper>
      <CharacterName name={name} gender={gender} birthYear={birth_year} />
      <Button>
        <Link to={toPersonDetails({ id: name })}>
          <ProfileIcon />
        </Link>
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
