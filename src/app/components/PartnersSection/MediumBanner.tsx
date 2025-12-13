import { BorderBox } from '@/src/components/BorderBox';
import { Button } from '@/src/components/Button';
import { TRANSLATIONS } from '@/src/constants/translations';
import { MEDIUM_LINK } from '@/src/constants';
import { IconWrapper } from '@/src/components/IconWrapper';
import { COLORS } from '@/src/styles/color';
import style from './MediumBanner.module.scss';

export const MediumBanner = () => (
  <BorderBox className={style.mediumBanner}>
    <IconWrapper iconClassName={style.icon} iconColor={COLORS.carbonFiber} />

    <div className={style.content}>
      <h3 className={style.title}>{TRANSLATIONS.PARTNERS_MEDIUM_TITLE}</h3>
      <p className={style.description}>
        {TRANSLATIONS.PARTNERS_MEDIUM_DESCRIPTION}
      </p>
    </div>
    <Button variant="aztecAtom" href={MEDIUM_LINK}>
      {TRANSLATIONS.PARTNERS_MEDIUM_BUTTON}
    </Button>
  </BorderBox>
);
