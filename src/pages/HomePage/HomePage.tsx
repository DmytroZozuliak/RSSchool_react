import Card from '../../components/ItemCard';
import InputSearch from '../../components/InputSearch';
import { goods } from '../../constants/data';
import styles from './homePage.module.scss';

const HomePage = () => {
  return (
    <div>
      <InputSearch />
      <ul className={styles.cardWrapper}>
        {goods.map((product) => (
          <Card key={product.id} card={product} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
