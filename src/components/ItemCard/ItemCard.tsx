import { useState } from 'react';
import { Product } from '../../types/itemType';
import styles from './itemCard.module.scss';
import DetailedItemCard from '../DetailedItemCard';

interface ItemCardProps {
  card: Product;
}

const ItemCard = ({ card }: ItemCardProps) => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <li className={styles.cardWrapper} onClick={() => setActiveModal(true)}>
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

      {activeModal && (
        <DetailedItemCard
          card={card}
          activeModal={activeModal}
          hideModal={() => setActiveModal(false)}
        />
      )}
    </>
  );
};

export default ItemCard;
