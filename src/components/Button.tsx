import { ComponentProps } from 'react';
import clsx from 'clsx';

import { COLORS } from '../styles/color';
import style from './Button.module.scss';

type ButtonProps = ComponentProps<'button'> & {
  variant: 'aztecAtom' | 'explodingStar' | 'grapefruitPulp' | 'paleLavender';
};

export const Button = ({
  children,
  variant,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(
      style.button,
      {
        [style.darkText]:
          variant === 'aztecAtom' || variant === 'explodingStar',
      },
      className,
    )}
    style={{ '--button-color': COLORS[variant] } as React.CSSProperties}
    {...props}
  >
    {children}
  </button>
);
