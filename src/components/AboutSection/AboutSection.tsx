import { ChildrenFC } from '@/src/utils/types';
import style from './AboutSection.module.scss';

type AboutSectionProps = {
  pillText: string;
  heading: React.ReactNode;
  subheading: string;
};

export const AboutSection: ChildrenFC<AboutSectionProps> = ({
  pillText,
  heading,
  subheading,
  children,
}) => (
  <section className={style.aboutSection}>
    <div className={style.pill}>{pillText}</div>
    <h2 className={style.heading}>{heading}</h2>
    <p className={style.subheading}>{subheading}</p>
    {children}
  </section>
);
