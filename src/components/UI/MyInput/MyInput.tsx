import classes from './MyInput.module.scss';
interface MyInputProps {
  type?: string;
  label?: string;
  errorMessage?: string;
  valid?: boolean;
  reference?: React.RefObject<HTMLInputElement>;
  image?: string | null;
}

const MyInput = (props: MyInputProps & React.HTMLProps<HTMLInputElement>) => {
  const { type = 'text', label, errorMessage, valid, reference, image, ...restProps } = props;

  const cls = [classes.myInput];
  if (type === 'search') {
    cls.push(classes.search);
  }
  if (type === 'file') {
    cls.push(classes.file);
  }

  let isValid = false;
  if (!valid) {
    isValid = true;
  }
  return (
    <div className={cls.join(' ')}>
      <label className={`${classes.label} ${isValid ? classes.invalid : ''}`}>
        {label}
        {type === 'file' && image && <img src={image} alt="avatar" />}
        <input type={type} ref={reference} {...restProps} />
      </label>

      {isValid && errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default MyInput;
