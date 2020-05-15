import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin-left: 1em;
  font-size: 1rem;
  color: #000000;
  background-color: ${props => props.theme.lightShade};
  border: 1px solid ${props => props.theme.darkShade};
  border-radius: 0.3em;
  padding: 10px 15px;

  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${props => props.theme.darkShade};
    color: ${props => props.theme.lightShade};
  }
`;
