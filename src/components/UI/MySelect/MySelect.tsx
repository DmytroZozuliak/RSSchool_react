import React, { Component } from 'react';
import classes from './MySelect.module.scss';

interface Props {
  values: string[];
  label: string;
  valid?: boolean;
  errorMessage?: string;
  reference: React.RefObject<HTMLSelectElement>;
}

export default class MySelect extends Component<Props & React.HTMLProps<HTMLSelectElement>> {
  render() {
    const { reference, errorMessage, valid, label, values, ...rest } = this.props;

    let isValid = false;
    if (!valid) {
      isValid = true;
    }

    return (
      <div className={classes.Select}>
        <label className={`${classes.label} ${isValid ? classes.invalid : ''}`}>
          {label}
          <select ref={reference} {...rest}>
            <option value={'default'}>--select a country--</option>
            {values.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </label>
        {isValid && errorMessage && <span>{errorMessage}</span>}
      </div>
    );
  }
}
