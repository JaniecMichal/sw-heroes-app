import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.heather};
  text-decoration: none;
`;

export default StyledLink;
