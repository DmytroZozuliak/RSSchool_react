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
  let inputClasses = classes.myInput;
  if (type === 'search') {
    inputClasses += ` ${classes.search}`;
  }
  if (type === 'file') {
    inputClasses += ` ${classes.file}`;
  }
  if (isValid) {
    inputClasses += ` ${classes.invalid}`;
  }

  return (
    <div className={inputClasses}>
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
