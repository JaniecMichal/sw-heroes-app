import React, { useEffect } from 'react';
import { StyledList, Wrapper } from './styled';
import UserListItem from 'components/molecules/UserListItem';
import { fetchPeople } from 'redux/peopleSlice';
import { useDispatch } from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <Wrapper>
      <StyledList></StyledList>
    </Wrapper>
  );
};

export default UserList;
