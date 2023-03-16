import { Component } from 'react';
import { Product } from '../../constants/data';
import styles from './card.module.scss';

interface Props {
  card: Product;
}

export default class Card extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { card } = this.props;

    return (
      <li className={styles.cardWrapper} data-testid="store-card">
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
  }
}
