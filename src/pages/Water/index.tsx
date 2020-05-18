/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { uuid } from 'uuidv4';
import {
  FiSearch,
  FiShoppingCart,
  FiPlusCircle,
  FiMinusCircle,
  FiTrash2,
} from 'react-icons/fi';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import { useCart } from '../../hooks/cart';
import { useToast } from '../../hooks/toast';

import WaterStore from '../../assets/waterStore.png';

import {
  Container,
  Content,
  ListItems,
  Cart,
  Title,
  PokemonTable,
  Total,
} from './styles';

interface Response {
  pokemon: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  id: string;
  name: string;
  url: string;
  price: number;
  quantity: number;
}

const Fire: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');

  const {
    addToCart,
    increment,
    decrement,
    remove,
    items,
    clearCart,
  } = useCart();

  const { addToast } = useToast();

  const randomNumber = useCallback(() => {
    return Math.random() * (1200 - 100) + 100;
  }, []);

  // api water
  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const response = await api.get('11');
      const allPokemons: Pokemon[] = [];

      // eslint-disable-next-line array-callback-return
      response.data.pokemon.map((pokeRes: Response): void => {
        const newPokemon = Object.assign(pokeRes.pokemon, {
          id: uuid(),
          price: randomNumber(),
          quantity: 0,
        });

        allPokemons.push(newPokemon);
      });

      setPokemons(allPokemons);
    }

    loadPokemons();
  }, [randomNumber]);

  function handleAddToCart(item: Pokemon): void {
    addToCart(item);
  }

  function handleIncrement(id: string): void {
    increment(id);
  }

  function handleDecrement(id: string): void {
    decrement(id);
  }

  function handleRemove(id: string): void {
    remove(id);
  }

  function isEmpty(): void {
    if (!items.length) {
      addToast({
        type: 'error',
        title: 'Seu carrinho está vazio',
        description: 'Selecione algum pokémon',
      });
    } else {
      addToast({
        type: 'success',
        title: 'Parabéns pela compra!',
        description: 'Compra finalizada. Volte sempre!',
      });
    }
  }

  function handleFinish(): void {
    isEmpty();
    localStorage.removeItem('@PokeStore:pokecart');
    clearCart();
  }

  const handleChange = (event: string): void => {
    setSearch(event.charAt(0).toLowerCase() + event.slice(1));
  };

  useEffect(() => {
    const results = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search),
    );
    setSearchResults(results);
  }, [pokemons, search]);

  const cartTotal = useMemo(() => {
    return formatPrice(
      items.reduce((a, { quantity, price }) => a + quantity * price, 0),
    );
  }, [items]);

  return (
    <Container>
      <header>
        <img src={WaterStore} alt="water store" style={{ width: '14vw' }} />

        <div>
          <FiSearch size={20} />
          <input
            id="searchBox"
            type="text"
            placeholder="Qual o seu próximo pokémon?"
            value={search}
            onChange={(event) => handleChange(event.target.value)}
          />
        </div>
      </header>
      <Content>
        <ListItems>
          <Title>Pokemon</Title>
          <ul>
            {searchResults.map((pokemon) => (
              <li>
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${
                    pokemon.url.split('/')[6]
                  }.png`}
                  alt={pokemon.name}
                />

                <strong>{pokemon.name}</strong>
                <span style={{ color: '#F6C358' }}>
                  {formatPrice(pokemon.price)}
                </span>

                <button type="button" onClick={() => handleAddToCart(pokemon)}>
                  <div>
                    <FiShoppingCart size={20} color="#3a3a3a" />
                  </div>

                  <span>Adicionar</span>
                </button>
              </li>
            ))}
          </ul>
        </ListItems>
        <Cart>
          <Title>Carrinho</Title>
          <PokemonTable>
            <thead>
              <tr>
                <th />
                <th>POKEMON</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={`https://pokeres.bastionbot.org/images/pokemon/${
                        item.url.split('/')[6]
                      }.png`}
                      alt="Pokemon"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleDecrement(item.id)}
                      >
                        <FiMinusCircle size={22} color="#333" />
                      </button>
                      <input type="number" readOnly value={item.quantity} />
                      <button
                        type="button"
                        onClick={() => handleIncrement(item.id)}
                      >
                        <FiPlusCircle size={22} color="#333" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </td>
                  <td>
                    <button type="button" onClick={() => handleRemove(item.id)}>
                      <FiTrash2 size={24} color="#bf1f2f'" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </PokemonTable>

          <footer>
            <button type="button" onClick={handleFinish}>
              Finalizar pedido
            </button>
            <Total>
              <span>Total:</span>
              <strong>{cartTotal}</strong>
            </Total>
          </footer>
        </Cart>
      </Content>
    </Container>
  );
};

export default Fire;
