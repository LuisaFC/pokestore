import React from 'react';
import { Link } from 'react-router-dom';

import { Container, StoreList, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Qual o seu próximo Pokémon?</Title>
      <StoreList>
        <Link to="/fire" style={{ textDecoration: 'none' }}>
          <li>
            <p>Fire</p>
            <img
              src="https://pokeres.bastionbot.org/images/pokemon/4.png"
              alt="Charmander"
            />
          </li>
        </Link>
        <Link to="/water" style={{ textDecoration: 'none' }}>
          <li>
            <p>Water</p>
            <img
              src="https://pokeres.bastionbot.org/images/pokemon/7.png"
              alt="Squirtle"
            />
          </li>
        </Link>
      </StoreList>
    </Container>
  );
};

export default Home;
