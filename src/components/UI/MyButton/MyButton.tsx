import { forwardRef } from 'react';
import styles from './MyButton.module.scss';

type Ref = HTMLButtonElement;

const MyButton = forwardRef<
  Ref,
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  const { disabled, ...restProps } = props;

  return (
    <button ref={ref} disabled={disabled} className={styles.button} {...restProps}>
      {props.children}
    </button>
  );
});

export default MyButton;
