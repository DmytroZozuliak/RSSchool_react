import React, { Component } from 'react';
import styles from './MyButton.module.scss';
export default class MyButton extends Component<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> {
  render() {
    const { disabled, ...restProps } = this.props;

    return (
      <button className={`${styles.button} ${disabled && styles.disable}`} {...restProps}>
        {this.props.children}
      </button>
    );
  }
}
