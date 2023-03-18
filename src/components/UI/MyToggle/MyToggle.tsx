import React, { Component } from 'react';
import './MyToggle.scss';

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
      <div className="toggle-switch-wrapper">
        <label className={`label ${isValid ? 'invalid' : ''}`}>
          {label}
          <div className="toggle-switch small-switch">
            <input
              id={label}
              type="checkbox"
              ref={reference}
              className="toggle-switch-checkbox"
              {...restProps}
            />
            <label className="toggle-switch-label" htmlFor={label}>
              <span className="toggle-switch-inner" data-yes="yes" data-no="no" />
              <span className="toggle-switch-switch" />
            </label>
          </div>
        </label>

        {isValid && <span>{errorMessage}</span>}
      </div>
    );
  }
}
