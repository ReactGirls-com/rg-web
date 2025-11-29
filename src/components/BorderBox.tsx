import { ElementType, RefObject } from 'react';
import clsx from 'clsx';

import { ChildrenFC } from '@/src/utils/types';
import style from './BorderBox.module.scss';

type BorderBoxProps = {
  className?: string;
  as?: ElementType;
  ref?: RefObject<any>;
};

export const BorderBox: ChildrenFC<BorderBoxProps> = ({
  children,
  className,
  as: Component = 'div',
  ref,
}) => (
  <Component ref={ref} className={clsx(style.borderBox, className)}>
    {children}
  </Component>
);
