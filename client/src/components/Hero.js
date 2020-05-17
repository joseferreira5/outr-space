import React from 'react';
import styled from 'styled-components';

import heroBackground from '../assets/milkyway.jpg';

const HeroImage = styled.div`
  background-image: url(${heroBackground});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Text = styled.p`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 6px;
  color: ${props => props.theme.lightShade};
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export default function Hero() {
  return (
    <HeroImage>
      <Text>NOW ENTERING OUTR SPACE!</Text>
    </HeroImage>
  );
}
