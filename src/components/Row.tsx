import clsx from 'clsx';

import { ChildrenFC } from '@/src/utils/types';
import style from './Row.module.scss';

type RowProps = {
  flexCol?: boolean;
  flexWrap?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  justifyBetween?: boolean;
  itemsCenter?: boolean;
  itemsStart?: boolean;
  itemsEnd?: boolean;
  isFullWidth?: boolean;
  dataTestId?: string;
  gap?: string;
  className?: string;
};

export const Row: ChildrenFC<RowProps> = ({
  children,
  flexCol,
  flexWrap,
  justifyCenter,
  justifyEnd,
  justifyStart,
  justifyBetween,
  itemsCenter,
  itemsStart,
  itemsEnd,
  isFullWidth,
  dataTestId,
  gap,
  className,
}) => (
  <div
    data-testid={dataTestId}
    style={{ gap }}
    className={clsx(
      {
        [style.flexCol]: flexCol,
        [style.justifyCenter]: justifyCenter,
        [style.justifyEnd]: justifyEnd,
        [style.justifyStart]: justifyStart,
        [style.justifyBetween]: justifyBetween,
        [style.itemsCenter]: itemsCenter,
        [style.itemsStart]: itemsStart,
        [style.itemsEnd]: itemsEnd,
        [style.fullWidth]: isFullWidth,
        [style.flexWrap]: flexWrap,
      },
      style.row,
      className,
    )}
  >
    {children}
  </div>
);
