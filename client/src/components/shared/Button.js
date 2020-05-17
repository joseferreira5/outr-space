import styled from 'styled-components';

const Button = styled.button`
  font-size: 0.8rem;
  color: #000000;
  background-color: ${props => props.theme.lightShade};
  border: 1px solid ${props => props.theme.darkShade};
  padding: 10px 15px;
  border-radius: 0.3em;

  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${props => props.theme.darkShade};
    color: ${props => props.theme.lightShade};
    cursor: pointer;
  }
`;

export default Button;
