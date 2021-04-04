import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 14px;
`;

export const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.turbo};
`;

export const StyledCaption = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  margin: 0;
  margin-top: 1px;
`;

export const BoldedCaption = styled.span`
  font-weight: 700;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsCaption = styled(StyledCaption)`
  color: teal;
  display: unset;
  word-wrap: break-word;

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `};
`;
