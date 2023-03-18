import React, { Component } from 'react';
import classes from './MyButton.module.scss';

// interface Props {
// type?: 'button' | 'submit' | 'reset' | undefined;
// }

export default class MyButton extends Component<
  // Props &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> {
  // constructor(props: Props) {
  //   super(props);
  // }

  render() {
    const { disabled, ...restProps } = this.props;
    const cls = [classes.Button];
    if (disabled) {
      cls.push(classes.disable);
    }

    return (
      <button className={cls.join(' ')} {...restProps}>
        {this.props.children}
      </button>
    );
  }
}
