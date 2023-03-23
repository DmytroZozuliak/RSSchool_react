import { forwardRef } from 'react';
import classes from './MySelect.module.scss';
interface MySelectProps extends React.HTMLProps<HTMLSelectElement> {
  values: Readonly<string[]>;
  label: string;
}
type Ref = HTMLSelectElement;

const MySelect = forwardRef<Ref, MySelectProps>((props, ref) => {
  const { label, values, ...rest } = props;

  return (
    <div className={classes.Select}>
      <label>
        {label}
        <select {...rest} ref={ref}>
          {values.map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
});

export default MySelect;
