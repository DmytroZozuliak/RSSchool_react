import { forwardRef } from 'react';
import classes from './MySelect.module.scss';
interface MySelectProps extends React.HTMLProps<HTMLSelectElement> {
  values: Readonly<string[]>;
  defaultOption?: string;
  label: string;
  errorMessage?: string;
}
type Ref = HTMLSelectElement;

const MySelect = forwardRef<Ref, MySelectProps>((props, ref) => {
  const { label, errorMessage, defaultOption, values, ...rest } = props;

  return (
    <div className={classes.Select}>
      <label>
        {label}
        <select {...rest} ref={ref}>
          {defaultOption && <option value="default">{defaultOption}</option>}
          {values.map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
});

export default MySelect;
