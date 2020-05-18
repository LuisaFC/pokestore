import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  url: string;
}

interface CartContext {
  items: Item[];
  addToCart(item: Item): void;
  increment(id: string): void;
  decrement(id: string): void;
  remove(id: string): void;
  clearCart(): void;
}

const CartContext = createContext<CartContext | null>(null);
const CartProvider: React.FC = ({ children }) => {
  const [items, setitems] = useState<Item[]>([]);

  useEffect(() => {
    async function loaditems(): Promise<void> {
      const data = localStorage.getItem('@PokeStore:pokecart');

      if (data) {
        setitems(JSON.parse(data));
      }
    }

    loaditems();
  }, []);

  const increment = useCallback(
    async (id) => {
      const newitem = items.findIndex((item) => item.id === id);
      if (newitem >= 0) {
        const updateditems = [...items];
        updateditems[newitem].quantity += 1;

        setitems(updateditems);
      }

      localStorage.setItem('@PokeStore:pokecart', JSON.stringify(items));
    },
    [items],
  );

  const decrement = useCallback(
    async (id) => {
      const filterItems = items.filter((item) => item.id !== id);
      const newitem = items.findIndex((item) => item.id === id);
      if (newitem >= 0) {
        if (items[newitem].quantity <= 1) {
          setitems(filterItems);
        } else {
          const updateditems = [...items];
          updateditems[newitem].quantity -= 1;

          setitems(updateditems);
        }
      }
      localStorage.setItem('@PokeStore:pokecart', JSON.stringify(items));
    },
    [items],
  );

  const remove = useCallback(
    async (id) => {
      const filterItems = items.filter((item) => item.id !== id);
      const newitem = items.findIndex((item) => item.id === id);
      if (newitem >= 0) {
        setitems(filterItems);
      }

      localStorage.setItem('@PokeStore:pokecart', JSON.stringify(filterItems));
    },
    [items],
  );

  const addToCart = useCallback(
    async (item: Item) => {
      const itemIndex = items.findIndex((p) => p.id === item.id);
      if (itemIndex < 0) {
        setitems((oldState) => [...oldState, { ...item, quantity: 1 }]);
      } else {
        increment(item.id);
      }
    },
    [increment, items],
  );

  const clearCart = useCallback(() => {
    setitems([]);
  }, []);

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, remove, items, clearCart }),
    [addToCart, increment, decrement, remove, items, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
