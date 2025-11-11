import React from 'react';
import styles from './button.module.scss';

type AtlasIconComponent = React.ComponentType<{
  size?: number
  color?: string
  className?: string
  'aria-hidden'?: string
}>;

export type ButtonProps = {
  label: string;
  iconComponent?: AtlasIconComponent;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      iconComponent,
      variant = 'primary',
      type = 'button',
      disabled = false,
      className = '',
      ariaLabel,
      onClick,
    },
    ref
  ) => {
    const composedClassName = [
      styles.button,
      variant === 'primary' ? styles.primary : styles.secondary,
      className,
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={composedClassName}
        aria-label={ariaLabel ?? label}
        disabled={disabled}
        onClick={onClick}
      >
        {iconComponent ? (
          <span className={styles.icon} aria-hidden="true">
            {React.createElement(iconComponent, { 'aria-hidden': 'true', className: styles.svgIcon })}
          </span>
        ) : null}
        <span className={styles.label}>{label}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;


