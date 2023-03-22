import styles from './MyButton.module.scss';

const MyButton = (
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
  const { disabled, ...restProps } = props;

  return (
    <button disabled={disabled} className={styles.button} {...restProps}>
      {props.children}
    </button>
  );
};

export default MyButton;
