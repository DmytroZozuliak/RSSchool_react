import React, { Component } from 'react';
import classes from './MySelect.module.scss';

interface Props {
  values: string[];
  label: string;
  reference: React.RefObject<HTMLSelectElement>;
}

export default class MySelect extends Component<Props & React.HTMLProps<HTMLSelectElement>> {
  render() {
    const { reference, label, values, ...rest } = this.props;

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
  }
}
