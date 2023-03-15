import { Component } from 'react';
import { Product } from '../../constants/data';

interface Props {
  card: Product;
}

export default class Card extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const cardClass = 'cards__card-item card-item blur hide-anime ';
    const { card } = this.props;

    return (
      <li
        className={cardClass}
        style={{ height: '100%', textDecoration: 'none' }}
        data-testid="store-card"
      >
        <div className="card-item__name">{card.title}</div>
        <img
          className="card-item__img"
          src={card.thumbnail}
          style={{ width: '100%', objectFit: 'cover' }}
          // width={180}
          // height={180}
          alt={card.title}
        />
        <div className="card-item__info">
          <div className="card-item__count">
            Available: <span>{card.brand}</span>
          </div>
          <div className="card-item__favorite">
            {/* Unique: <span>{card.unique ? 'Yes' : 'No'}</span> */}
          </div>
          <div className="card-item__country">
            Price: <span>{card.price}</span>
          </div>
          <div className="card-item__shape">
            Rating: <span>{card.rating}</span>
          </div>
          <div className="card-item__condition">
            Stock: <span>{card.stock}</span>
          </div>
        </div>
      </li>
    );
  }
}
