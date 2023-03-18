import React, { Component } from 'react';
import './MyToggle.scss';

interface Props {
  label: string;
  errorMessage?: string;
  option1: string;
  option2: string;
  reference1?: React.RefObject<HTMLInputElement>;
  reference2?: React.RefObject<HTMLInputElement>;
  valid?: boolean;
}

export default class ToggleCheckbox extends Component<Props & React.HTMLProps<HTMLInputElement>> {
  changeHandler = () => {
    console.log('changed');
  };

  render() {
    const { reference1, reference2, option1, option2, valid, label, errorMessage, ...restArgs } =
      this.props;

    let isValid = false;
    if (!valid) {
      isValid = true;
    }

    return (
      <div className="toggleWrapper">
        <div className="title">{label}</div>
        <div className="switch switch--horizontal">
          <input
            id="radio-a"
            type="radio"
            value="male"
            defaultChecked
            ref={reference1}
            {...restArgs}
          />
          <label htmlFor="radio-a">{option1}</label>
          <input id="radio-b" type="radio" value="female" ref={reference2} {...restArgs} />
          <label htmlFor="radio-b">{option2}</label>
          <span className="toggle-outside">
            <span className="toggle-inside"></span>
          </span>
        </div>

        {isValid && <span>{errorMessage}</span>}
      </div>
    );
  }
}
