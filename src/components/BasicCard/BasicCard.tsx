import { ReactNode } from 'react';
import clsx from 'clsx';

import style from './BasicCard.module.scss';

type BasicCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  iconColor?: 'red' | 'cyan' | 'purple';
};

export const BasicCard: React.FC<BasicCardProps> = ({
  icon,
  title,
  description,
  iconColor = 'red',
}) => (
  <article className={style.basicCard}>
    <div
      className={clsx(style.iconWrapper, {
        [style.iconRed]: iconColor === 'red',
        [style.iconCyan]: iconColor === 'cyan',
        [style.iconPurple]: iconColor === 'purple',
      })}
    >
      {icon}
    </div>
    <h3 className={style.title}>{title}</h3>
    <p className={style.description}>{description}</p>
  </article>
);
