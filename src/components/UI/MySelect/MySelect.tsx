import classes from './MySelect.module.scss';
interface MySelectProps {
  values: string[];
  label: string;
  reference: React.RefObject<HTMLSelectElement>;
}

const MySelect = (props: MySelectProps & React.HTMLProps<HTMLSelectElement>) => {
  const { reference, label, values, ...rest } = props;

  return (
    <div className={classes.Select}>
      <label>
        {label}
        <select ref={reference} {...rest}>
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
};

export default MySelect;
