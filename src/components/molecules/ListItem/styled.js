import styled from 'styled-components';

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.heather};
  padding: 20px 0;
  position: relative;
`;
