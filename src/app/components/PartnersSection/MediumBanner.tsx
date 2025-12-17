import { BorderBox } from '@/src/components/BorderBox';
import { Button } from '@/src/components/Button';
import { MEDIUM_LINK } from '@/src/constants';
import { IconWrapper } from '@/src/components/IconWrapper';
import { COLORS } from '@/src/styles/color';
import style from './MediumBanner.module.scss';

type MediumBannerProps = {
  title: string;
  description: string;
  buttonText: string;
};

export const MediumBanner: React.FC<MediumBannerProps> = ({
  title,
  description,
  buttonText,
}) => (
  <BorderBox className={style.mediumBanner}>
    <IconWrapper iconClassName={style.icon} iconColor={COLORS.carbonFiber} />

    <div className={style.content}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
    </div>
    <Button variant="aztecAtom" href={MEDIUM_LINK}>
      {buttonText}
    </Button>
  </BorderBox>
);
