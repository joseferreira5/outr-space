import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin-left: 2em;
  font-size: 1rem;
  color: #000000;
  border: 1px solid ${props => props.theme.darkShade};
  padding: 10px 15px;

  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${props => props.theme.darkShade};
    color: ${props => props.theme.lightShade};
  }
`;
