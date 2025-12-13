import { Section } from '@/src/components/Section';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { TRANSLATIONS } from '@/src/constants/translations';
import { CopyEmailButton } from '@/src/components/AreYouLostBanner/CopyEmailButton';
import style from './ContactCtaSection.module.scss';

export const ContactCtaSection = () => (
  <Section>
    <CtaBanner
      title={TRANSLATIONS.CONTACT_CTA_TITLE}
      description={TRANSLATIONS.CONTACT_CTA_DESCRIPTION}
      className={style.ctaBanner}
      buttonsContainerClassName={style.buttonsContainer}
    >
      <Button variant="aztecAtom" href="https://forms.gle/uz9xhZWEWLTwLqGr9">
        {TRANSLATIONS.CONTACT_CTA_BUTTON}
      </Button>

      <CopyEmailButton />
    </CtaBanner>
  </Section>
);
