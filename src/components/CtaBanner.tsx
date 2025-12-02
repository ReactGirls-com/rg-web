import clsx from 'clsx';

import { ChildrenFC } from '@/src/utils/types';
import { BorderBox } from './BorderBox';
import style from './CtaBanner.module.scss';

type CtaBannerProps = {
  title: string;
  description: string;
  className?: string;
};

export const CtaBanner: ChildrenFC<CtaBannerProps> = ({
  title,
  description,
  children,
  className,
}) => (
  <BorderBox className={clsx(style.ctaBanner, className)}>
    <h3 className={style.title}>{title}</h3>
    <p className={style.description}>{description}</p>
    <div className={className}>{children}</div>
  </BorderBox>
);
