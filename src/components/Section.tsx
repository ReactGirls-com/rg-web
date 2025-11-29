import clsx from 'clsx';

import { ChildrenFC } from '@/src/utils/types';
import style from './Section.module.scss';

type SectionProps = {
  ref?: React.RefObject<HTMLElement | null>;
  titleText?: string;
  titleColor?: string;
  heading?: React.ReactNode;
  subheading?: string;
  className?: string;
};

export const Section: ChildrenFC<SectionProps> = ({
  ref,
  titleText,
  titleColor,
  heading,
  subheading,
  children,
  className,
}) => (
  <section ref={ref} className={clsx(style.section, className)}>
    {titleText && (
      <div
        style={{ '--title-color': titleColor } as React.CSSProperties}
        className={style.pill}
      >
        {titleText}
      </div>
    )}

    {(heading || subheading) && (
      <div className={style.header}>
        {heading && <h2 className={style.heading}>{heading}</h2>}
        {subheading && <p className={style.subheading}>{subheading}</p>}
      </div>
    )}
    {children}
  </section>
);
