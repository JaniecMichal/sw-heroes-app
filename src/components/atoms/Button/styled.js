import styled, { css } from 'styled-components';

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

  ${({ loadMore }) =>
    loadMore &&
    css`
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: auto;
      height: auto;
      margin-top: 30px;
      padding: 10px;
      border: 2px solid ${({ theme }) => theme.colors.turbo};
      color: ${({ theme }) => theme.colors.heather};
      font-weight: 700;
    `}

  ${({ intro }) =>
    intro &&
    css`
      position: fixed;
      top: 20px;
      left: 20px;
      width: auto;
      height: auto;
      margin-top: 30px;
      padding: 10px;
      border: 2px solid ${({ theme }) => theme.colors.turbo};
      color: ${({ theme }) => theme.colors.heather};
      font-weight: 700;
    `}

  svg {
    fill: ${({ theme }) => theme.colors.turbo};
  }
`;
