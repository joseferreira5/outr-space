import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  color: #000000;
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
