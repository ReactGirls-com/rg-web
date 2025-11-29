import { ChildrenFC } from '@/src/utils/types';
import style from './Section.module.scss';

type SectionProps = {
  ref?: React.RefObject<HTMLElement | null>;
  pillText?: string;
  pillColor?: string;
  heading?: React.ReactNode;
  subheading?: string;
};

export const Section: ChildrenFC<SectionProps> = ({
  ref,
  pillText,
  pillColor,
  heading,
  subheading,
  children,
}) => (
  <section ref={ref} className={style.section}>
    {(pillText || heading || subheading) && (
      <div className={style.header}>
        {pillText && (
          <div
            style={{ '--pill-color': pillColor } as React.CSSProperties}
            className={style.pill}
          >
            {pillText}
          </div>
        )}
        {heading && <h2 className={style.heading}>{heading}</h2>}
        {subheading && <p className={style.subheading}>{subheading}</p>}
      </div>
    )}
    {children}
  </section>
);
