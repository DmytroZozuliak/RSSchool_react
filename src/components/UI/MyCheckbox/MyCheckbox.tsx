import React, { Component } from 'react';
import styles from './MyCheckbox.module.scss';

interface Props {
  label: string;
  errorMessage?: string;
  reference?: React.RefObject<HTMLInputElement>;
  valid?: boolean;
}

export default class ToggleCheckbox extends Component<Props & React.HTMLProps<HTMLInputElement>> {
  render() {
    const { reference, valid, label, errorMessage, ...restProps } = this.props;

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
  }
}
