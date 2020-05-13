import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';

const Section = styled.section`
  width: 100%;
`;

export default function Home({ user }) {
  return (
    <Section>
      <Hero />
    </Section>
  );
}
