import { ChildrenFC } from '@/src/utils/types';
import style from './HeadingHighlight.module.scss';

type HeadingHighlightProps = {
  highlightColor: string;
};

export const HeadingHighlight: ChildrenFC<HeadingHighlightProps> = ({
  children,
  highlightColor,
}) => (
  <span
    style={{ '--highlight-color': highlightColor } as React.CSSProperties}
    className={style.highlight}
  >
    {children}
  </span>
);
