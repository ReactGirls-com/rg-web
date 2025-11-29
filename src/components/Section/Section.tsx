import { ChildrenFC } from '@/src/utils/types';
import style from './Section.module.scss';

type SectionProps = {
  pillText: string;
  heading: React.ReactNode;
  subheading: string;
};

export const Section: ChildrenFC<SectionProps> = ({
  pillText,
  heading,
  subheading,
  children,
}) => (
  <section className={style.section}>
    <div className={style.pill}>{pillText}</div>
    <h2 className={style.heading}>{heading}</h2>
    <p className={style.subheading}>{subheading}</p>
    {children}
  </section>
);
