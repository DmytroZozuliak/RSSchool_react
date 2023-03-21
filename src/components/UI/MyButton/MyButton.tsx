import React, { Component } from 'react';
import styles from './MyButton.module.scss';
export default class MyButton extends Component<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> {
  render() {
    const { disabled, ...restProps } = this.props;

    return (
      <button disabled={disabled} className={styles.button} {...restProps}>
        {this.props.children}
      </button>
    );
  }
}
