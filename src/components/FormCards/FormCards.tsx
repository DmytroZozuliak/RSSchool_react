import { FormCard } from '../../types/formTypes';
import classes from './formCard.module.scss';

interface FormCardsProps {
  cards: FormCard[];
}

const FormCards = ({ cards }: FormCardsProps) => {
  return (
    <ul className={classes.miniCards}>
      {cards.length > 0 &&
        cards.map((card, index) => {
          return (
            <li className={classes.miniCard} key={index}>
              {card.img && <img src={card.img} alt="avatar" />}
              <div className={classes.info}>
                <span>
                  name: <span>{card.name}</span>
                </span>
                <span>
                  surname: <span>{card.surname}</span>
                </span>
                <span>
                  gender: <span>{card.gender}</span>
                </span>
                <span>
                  date of birth: <span>{card.date}</span>
                </span>
                <span>
                  country: <span>{card.country}</span>
                </span>
                <span>
                  data processing: <span>{card.dataProcessing ? 'agree' : 'dont agree'}</span>
                </span>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default FormCards;
