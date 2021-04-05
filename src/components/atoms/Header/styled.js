import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.turbo};
  color: ${({ theme }) => theme.colors.turbo};
  margin-bottom: 10px;
`;
