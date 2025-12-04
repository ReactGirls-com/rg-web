import { ReactNode } from 'react';
import clsx from 'clsx';

import { ChildrenFC } from '@/src/utils/types';
import style from './Section.module.scss';

type SectionProps = {
  id?: string;
  titleText?: string;
  titleColor?: string;
  heading?: ReactNode;
  headingClassName?: string;
  subheading?: string;
  className?: string;
};

export const Section: ChildrenFC<SectionProps> = ({
  id,
  titleText,
  titleColor,
  heading,
  headingClassName,
  subheading,
  children,
  className,
}) => (
  <section id={id} className={style.section}>
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
