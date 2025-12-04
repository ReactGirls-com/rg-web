import { Section } from '@/src/components/Section';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { CopyEmailButton } from '@/src/components/AreYouLostBanner/CopyEmailButton';
import { TRANSLATIONS } from '@/src/constants/translations';
import style from './MentoringCtaSection.module.scss';

export const MentoringCtaSection = () => (
  <Section>
    <CtaBanner
      title={TRANSLATIONS.MENTORING_CTA_TITLE}
      description={TRANSLATIONS.MENTORING_CTA_DESCRIPTION}
      className={style.ctaBanner}
      buttonsContainerClassName={style.buttonsContainer}
    >
      <Button
        variant="grapefruitPulp"
        href="https://forms.gle/EdLmU3fv5rpMm4W88"
        target="_blank"
        rel="noopener noreferrer"
      >
        {TRANSLATIONS.MENTORING_CTA_BUTTON_PRELIMINARY}
      </Button>
      <CopyEmailButton
        email="reactgirlsprague@gmail.com"
        copyText={TRANSLATIONS.CTA_BUTTON}
        copiedText={TRANSLATIONS.CTA_COPIED_EMAIL}
      />
    </CtaBanner>
  </Section>
);
