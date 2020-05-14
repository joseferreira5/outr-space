import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import Posts from './Posts';

const Section = styled.section`
  width: 100%;
`;

export default function Home({ user }) {
  return (
    <Section>
      <Hero />
      <Posts />
    </Section>
  );
}
