import { ReactNode, RefObject } from 'react';
import clsx from 'clsx';

import { ChildrenFC } from '@/src/utils/types';
import style from './Section.module.scss';

type SectionProps = {
  ref?: RefObject<HTMLElement | null>;
  titleText?: string;
  titleColor?: string;
  heading?: ReactNode;
  headingClassName?: string;
  subheading?: string;
  className?: string;
};

export const Section: ChildrenFC<SectionProps> = ({
  ref,
  titleText,
  titleColor,
  heading,
  headingClassName,
  subheading,
  children,
  className,
}) => (
  <section className={style.section} ref={ref}>
    <div className={clsx(style.content, className)}>
      {titleText && (
        <div
          style={{ '--title-color': titleColor } as React.CSSProperties}
          className={style.title}
        >
          {titleText}
        </div>
      )}

      {(heading || subheading) && (
        <div className={style.header}>
          {heading && (
            <h2 className={clsx(style.heading, headingClassName)}>{heading}</h2>
          )}
          {subheading && <p className={style.subheading}>{subheading}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);
