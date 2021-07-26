import react, { Children } from 'react';
import './button.scss';
import classNames from 'classnames';

type ButtonType = "primary" | "circle" | "basic"

interface ButtonProps {
  type?: ButtonType;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({type, className, text, children}: ButtonProps) => {
  const classes = classNames(
    className,
    'button',
    `button--${type}`
  )

  return (
    <button className={classes}>
      {text ?? children}
    </button>
  )
}