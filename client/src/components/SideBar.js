import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.lightShade};
  margin: 1em;
  padding: 1em;
  border-radius: 0.3em;
`;

const Text = styled.p`
  font-size: 0.8em;
`;

export default function SideBar() {
  return (
    <Container>
      <Text>Im here</Text>
    </Container>
  );
}
