import { Product } from '../../types/itemType';
import styles from './itemCard.module.scss';

interface ItemCardProps {
  card: Product;
}

const ItemCard = ({ card }: ItemCardProps) => {
  return (
    <li className={styles.cardWrapper}>
      <img className={styles.img} src={card.thumbnail} alt={card.title} />
      <div className={styles.infoWrapper}>
        <div className={styles.title}>{card.title}</div>
        <div className={styles.info}>
          Brand: <span>{card.brand}</span>
        </div>
        <div className={styles.info}>
          Stock: <span>{card.stock}</span>
        </div>
        <div className={styles.info}>
          Rating: <span>{card.rating}/5</span>
        </div>
        <div className={styles.info}>
          Price: <span>{card.price}$</span>
        </div>
      </div>
    </li>
  );
};

export default ItemCard;
