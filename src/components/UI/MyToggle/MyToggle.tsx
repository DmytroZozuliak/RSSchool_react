import styles from './MyToggle.module.scss';
interface ToggleCheckboxProps {
  label: string;
  errorMessage?: string;
  option1: string;
  option2: string;
  reference1?: React.RefObject<HTMLInputElement>;
  reference2?: React.RefObject<HTMLInputElement>;
  valid?: boolean;
}

const MyToggle = (props: ToggleCheckboxProps & React.HTMLProps<HTMLInputElement>) => {
  const { reference1, reference2, option1, option2, valid, label, errorMessage, ...restArgs } =
    props;

  let isValid = false;
  if (!valid) {
    isValid = true;
  }

  return (
    <div className={styles.toggleWrapper}>
      <div className={styles.title}>{label}</div>
      <div className={`${styles.switch} ${styles['switch--horizontal']}`}>
        <input
          id="radio-a"
          type="radio"
          value={option1}
          defaultChecked
          ref={reference1}
          {...restArgs}
        />
        <label htmlFor="radio-a">{option1}</label>
        <input id="radio-b" type="radio" value={option2} ref={reference2} {...restArgs} />
        <label htmlFor="radio-b">{option2}</label>
        <span className={styles['toggle-outside']}>
          <span className={styles['toggle-inside']}></span>
        </span>
      </div>

      {isValid && <span>{errorMessage}</span>}
    </div>
  );
};

export default MyToggle;
