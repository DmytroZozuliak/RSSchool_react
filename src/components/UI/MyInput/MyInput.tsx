import React, { forwardRef } from 'react';
import classes from './MyInput.module.scss';
interface MyInputProps extends React.HTMLProps<HTMLInputElement> {
  type?: string;
  label?: string;
  errorMessage?: string;
  image?: string | null;
}
type Ref = HTMLInputElement;

const MyInput = forwardRef<Ref, MyInputProps>((props, ref) => {
  const { type = 'text', label, errorMessage, image, ...restProps } = props;

  const isValid = !!errorMessage;

  const cls = [classes.myInput];
  if (type === 'search') {
    cls.push(classes.search);
  }
  if (type === 'file') {
    cls.push(classes.file);
  }

  return (
    <div className={cls.join(' ')}>
      <label className={`${classes.label} ${isValid ? classes.invalid : ''}`}>
        {label}
        {type === 'file' && image && <img src={image} alt="avatar" />}
        <input type={type} ref={ref} {...restProps} />
      </label>

      {isValid && errorMessage && <span>{errorMessage}</span>}
    </div>
  );
});

export default MyInput;
