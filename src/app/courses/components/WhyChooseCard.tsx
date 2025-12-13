import { BorderBox } from '@/src/components/BorderBox';
import { IconWrapper } from '@/src/components/IconWrapper';
import style from './WhyChooseCard.module.scss';

type WhyChooseCardProps = {
  iconClassName: string;
  description: string;
  iconColor: string;
};

export const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  iconClassName,
  description,
  iconColor,
}) => (
  <BorderBox as="article" className={style.card}>
    <IconWrapper
      iconClassName={iconClassName}
      iconColor={iconColor}
      className={style.iconWrapper}
    />
    <p className={style.description}>{description}</p>
  </BorderBox>
);
