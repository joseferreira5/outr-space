import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Hero from './Hero';
import Posts from './Posts';

const Section = styled(motion.section)`
  width: 100%;
  padding-bottom: 3em;
`;

export default function Home({ user }) {
  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Posts user={user} />
    </Section>
  );
}
