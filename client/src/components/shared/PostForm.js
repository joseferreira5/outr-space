import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 25%;
  grid-template-rows: minmax(30%, auto) 1fr;
  min-height: 100%;
  max-width: 1248px;
  margin: 0 auto;
  margin-top: 3em;
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
`;

export const Input = styled.input`
  width: 100%;
  min-height: 3em;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 10em;
  margin-top: 0.5em;
`;

export const ButtonGrp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;

  button {
    margin-left: 0.5em;
  }
`;
