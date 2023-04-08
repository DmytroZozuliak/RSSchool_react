import { forwardRef } from 'react';
import styles from './MyCheckbox.module.scss';
interface MyCheckboxProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

type Ref = HTMLInputElement;

const MyCheckbox = forwardRef<Ref, MyCheckboxProps>((props, ref) => {
  const { label, errorMessage, ...restProps } = props;
  const isValid = !!errorMessage;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={label} className={`${styles.title} ${isValid ? styles.invalid : ''}`}>
        {label}
      </label>
      <input className={styles.input} ref={ref} id={label} type="checkbox" {...restProps} />
      <label className={styles.label} htmlFor={label} />

      {isValid && <span>{errorMessage}</span>}
    </div>
  );
});

export default MyCheckbox;
