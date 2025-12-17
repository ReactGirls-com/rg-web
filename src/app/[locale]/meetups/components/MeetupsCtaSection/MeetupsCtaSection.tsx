import { Section } from '@/src/components/Section';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { CopyEmailButton } from '@/src/components/AreYouLostBanner/CopyEmailButton';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import style from './MeetupsCtaSection.module.scss';

export const MeetupsCtaSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section>
      <CtaBanner
        title={t.MEETUPS_CTA_TITLE}
        description={t.MEETUPS_CTA_DESCRIPTION}
        className={style.ctaBanner}
        buttonsContainerClassName={style.buttonsContainer}
      >
        <Button
          variant="explodingStar"
          href="https://forms.gle/ob6V4nKuVKny3ALV8"
        >
          {t.MEETUPS_CTA_BUTTON}
        </Button>
        <CopyEmailButton />
      </CtaBanner>
    </Section>
  );
};
