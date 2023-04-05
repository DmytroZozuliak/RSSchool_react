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
        <h3>{card.title}</h3>
        <img className={styles.img} src={card.thumbnail} alt={card.title} />
        <p>{card.description}</p>
      </div>
    </Modal>
  );
};

export default DetailedItemCard;
