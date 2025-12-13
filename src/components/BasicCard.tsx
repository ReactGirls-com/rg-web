import { COLORS } from '@/src/styles/color';
import { BorderBox } from './BorderBox';
import { IconWrapper } from './IconWrapper';
import style from './BasicCard.module.scss';

type BasicCardProps = {
  iconClassName: string;
  title: string;
  description: string;
  iconColor?: string;
};

export const BasicCard: React.FC<BasicCardProps> = ({
  iconClassName,
  title,
  description,
  iconColor = COLORS.aztecAtom,
}) => (
  <BorderBox as="article" className={style.basicCard}>
    <IconWrapper
      iconClassName={iconClassName}
      iconColor={iconColor}
      className={style.iconWrapper}
    />
    <h3 className={style.title}>{title}</h3>
    <p className={style.description}>{description}</p>
  </BorderBox>
);
