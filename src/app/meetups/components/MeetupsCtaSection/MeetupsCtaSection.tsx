import { Section } from '@/src/components/Section';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { CopyEmailButton } from '@/src/components/AreYouLostBanner/CopyEmailButton';
import { TRANSLATIONS } from '@/src/constants/translations';
import style from './MeetupsCtaSection.module.scss';

export const MeetupsCtaSection = () => (
  <Section>
    <CtaBanner
      title={TRANSLATIONS.MEETUPS_CTA_TITLE}
      description={TRANSLATIONS.MEETUPS_CTA_DESCRIPTION}
      className={style.ctaBanner}
      buttonsContainerClassName={style.buttonsContainer}
    >
      <Button
        variant="explodingStar"
        href="https://forms.gle/ob6V4nKuVKny3ALV8"
        target="_blank"
        rel="noopener noreferrer"
      >
        {TRANSLATIONS.MEETUPS_CTA_BUTTON}
      </Button>
      <CopyEmailButton />
    </CtaBanner>
  </Section>
);
