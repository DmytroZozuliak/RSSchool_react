import styles from './MyCheckbox.module.scss';
interface MyCheckboxProps {
  label: string;
  errorMessage?: string;
  reference?: React.RefObject<HTMLInputElement>;
  valid?: boolean;
}

const MyCheckbox = (props: MyCheckboxProps & React.HTMLProps<HTMLInputElement>) => {
  const { reference, valid, label, errorMessage, ...restProps } = props;

  let isValid = false;
  if (!valid) {
    isValid = true;
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={label} className={`${styles.title} ${isValid ? styles.invalid : ''}`}>
        {label}
      </label>
      <input className={styles.input} id={label} type="checkbox" ref={reference} {...restProps} />
      <label className={styles.label} htmlFor={label} />

      {isValid && <span>{errorMessage}</span>}
    </div>
  );
};

export default MyCheckbox;
