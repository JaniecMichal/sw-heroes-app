import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 42px;
  height: 42px;
  background-color: transparent;
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;

  &:hover {
    cursor: pointer;
  }

  svg {
    fill: ${({ theme }) => theme.colors.turbo};
  }
`;
