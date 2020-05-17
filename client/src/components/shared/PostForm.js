import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  /* display: grid;
  grid-template-rows: minmax(30%, auto) 1fr; */
  display: flex;
  justify-content: flex-start;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  border-radius: 0.3em;
  min-height: 100%;
  max-width: 1248px;
  margin: 3em auto;
  padding: 2em;
`;

export const Form = styled.form`
  background-color: ${props => props.theme.lightShade};
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2em 5em;
  width: 100%;
  max-height: 20em;
`;

export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 0.8rem;
  border-radius: 0.3em;
  padding: 0.5em;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-family: 'Roboto';
  font-size: 0.8rem;
  border-radius: 0.3em;
  padding: 0.5em;
  min-height: 10em;
`;

export const ButtonGrp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;

  button {
    margin-left: 0.5em;
  }
`;
