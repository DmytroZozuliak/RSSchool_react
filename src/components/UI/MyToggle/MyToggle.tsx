import { forwardRef } from 'react';
import styles from './MyToggle.module.scss';
interface ToggleCheckboxProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  option1: string;
  option2: string;
}

type Ref = HTMLInputElement;

const MyToggle = forwardRef<Ref, ToggleCheckboxProps>((props, ref) => {
  // const MyToggle = (props: ToggleCheckboxProps) => {
  const { option1, option2, label, ...restArgs } = props;

  return (
    <div className={styles.toggleWrapper}>
      <div className={styles.title}>{label}</div>
      <div className={`${styles.switch} ${styles['switch--horizontal']}`}>
        <input id="radio-a" type="radio" value={option1} defaultChecked ref={ref} {...restArgs} />
        <label htmlFor="radio-a">{option1}</label>
        <input id="radio-b" type="radio" value={option2} ref={ref} {...restArgs} />
        <label htmlFor="radio-b">{option2}</label>
        <span className={styles['toggle-outside']}>
          <span className={styles['toggle-inside']}></span>
        </span>
      </div>
    </div>
  );
});

export default MyToggle;
