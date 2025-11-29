import { ComponentProps } from 'react';
import clsx from 'clsx';

import { ChildrenFC } from '../utils/types';
import style from './IconButton.module.scss';

type IconButtonProps = ComponentProps<'button'> & {
  backgroundColor?: string;
};

export const IconButton: ChildrenFC<IconButtonProps> = ({
  backgroundColor,
  className,
  children,
  ...props
}) => (
  <button
    className={clsx(style.iconButton, className)}
    style={
      backgroundColor
        ? ({ '--icon-button-color': backgroundColor } as React.CSSProperties)
        : undefined
    }
    {...props}
  >
    {children}
  </button>
);
