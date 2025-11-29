import { ChildrenFC } from '@/src/utils/types';
import style from './Section.module.scss';

type SectionProps = {
  pillText: string;
  pillColor: string;
  heading: React.ReactNode;
  subheading: string;
};

export const Section: ChildrenFC<SectionProps> = ({
  pillText,
  pillColor,
  heading,
  subheading,
  children,
}) => (
  <section className={style.section}>
    <div className={style.header}>
      <div
        style={{ '--pill-color': pillColor } as React.CSSProperties}
        className={style.pill}
      >
        {pillText}
      </div>
      <h2 className={style.heading}>{heading}</h2>
      <p className={style.subheading}>{subheading}</p>
    </div>
    {children}
  </section>
);
