import { Product } from '../../types/itemType';
import Modal from '../UI/Modal/Modal';
import styles from './DetailedItemCard.module.scss';

interface DetailedItemCardProps {
  card: Product;
  activeModal: boolean;
  hideModal: () => void;
}

const DetailedItemCard = ({ card, activeModal, hideModal }: DetailedItemCardProps) => {
  return (
    <Modal activeModal={activeModal} hideModal={hideModal}>
      <div className={styles.modal}>
        <h3 className={styles.title}>{card.title}</h3>
        <div className={styles.images}>
          {card.images.slice(0, 3).map((img, ind) => (
            <img key={img} src={img} alt={card.title + ind} />
          ))}
        </div>
        <p className={styles.description}>{card.description}</p>
        <div className={styles.infoWrapper}>
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
          <div className={styles.info}>
            Discount: <span>{card.discountPercentage}%</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailedItemCard;
