import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 600px;
  width: 75%;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.mako};
`;
