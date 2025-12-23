import { Section } from '@/src/components/Section';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import style from './ContactCtaSection.module.scss';

export const ContactCtaSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section>
      <CtaBanner
        title={t.CONTACT_CTA_TITLE}
        description={t.CONTACT_CTA_DESCRIPTION}
        className={style.ctaBanner}
        buttonsContainerClassName={style.buttonsContainer}
      >
        <Button variant="aztecAtom" href="https://forms.gle/uz9xhZWEWLTwLqGr9">
          {t.CONTACT_CTA_BUTTON}
        </Button>
      </CtaBanner>
    </Section>
  );
};
