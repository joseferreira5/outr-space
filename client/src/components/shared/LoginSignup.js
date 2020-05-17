import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 70% 1fr;
  max-width: 700px;
  min-height: 500px;
  background-color: ${props => props.theme.lightShade};
  margin: 0 auto;
  border-radius: 0.3em;
  margin-top: 10em;
`;

export const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 16em;
  padding: 0 1em;
`;

export const Heading = styled.h2`
  font-size: 2rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;

export const Input = styled.input`
  border-radius: 0.3em;
  max-width: 70%;
  font-family: 'Roboto';
  font-size: 1rem;
  padding: 0.2em;
`;

export const Image = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
`;
