import { Section } from '@/src/components/Section';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { WriteToUsButton } from '@/src/components/AreYouLostBanner/WriteToUsButton';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { MENTORING_FORM_LINK } from '@/src/constants';
import style from './MentoringCtaSection.module.scss';

export const MentoringCtaSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section>
      <CtaBanner
        title={t.MENTORING_CTA_TITLE}
        description={t.MENTORING_CTA_DESCRIPTION}
        className={style.ctaBanner}
        buttonsContainerClassName={style.buttonsContainer}
      >
        <Button variant="aztecAtom" href={MENTORING_FORM_LINK}>
          {t.MENTORING_CTA_BUTTON_PRELIMINARY}
        </Button>
        <WriteToUsButton />
      </CtaBanner>
    </Section>
  );
};
