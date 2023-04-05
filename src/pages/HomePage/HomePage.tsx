import axios from 'axios';
import Card from '../../components/ItemCard';
import InputSearch from '../../components/InputSearch';
import styles from './homePage.module.scss';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { Product } from '../../types/itemType';
import { getProducts } from '../../api/productsApi';
import { useSearchHandler } from './useSearchHandler';

const HomePage = () => {
  const [cards, setCards] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const { onChangeHandler, term } = useSearchHandler();

  const fetchProducts = async (controller?: AbortController) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getProducts(term, controller);
      setCards(response.products);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller);

    return () => controller.abort();
  }, []);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchProducts();
  };

  const showCards = () => {
    if (loading) {
      return <Loader />;
    }
    if (error && !cards) {
      return <p>{error}</p>;
    }

    return cards.length > 0 ? (
      cards.map((product) => <Card key={product.id} card={product} />)
    ) : (
      <p>No matches</p>
    );
  };

  return (
    <>
      <InputSearch term={term} onChange={onChangeHandler} onSubmit={onSubmitHandler} />
      <ul className={styles.cardWrapper}>{showCards()}</ul>
    </>
  );
};

export default HomePage;
