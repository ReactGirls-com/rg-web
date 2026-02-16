import { ReactNode } from 'react';

import { COLORS } from '@/src/styles/color';
import { BorderBox } from './BorderBox';
import { IconWrapper } from './IconWrapper';
import style from './BasicCard.module.scss';

type BasicCardProps = {
  iconClassName: string;
  title: string;
  description: string;
  iconColor?: string;
  checklistContent?: ReactNode;
};

export const BasicCard: React.FC<BasicCardProps> = ({
  iconClassName,
  title,
  description,
  iconColor = COLORS.aztecAtom,
  checklistContent,
}) => (
  <BorderBox as="article" className={style.basicCard}>
    <IconWrapper
      iconClassName={iconClassName}
      iconColor={iconColor}
      className={style.iconWrapper}
    />
    <h3 className={style.title}>{title}</h3>
    <p className={style.description}>{description}</p>
    {checklistContent && (
      <div className={style.checklistWrapper}>{checklistContent}</div>
    )}
  </BorderBox>
);
