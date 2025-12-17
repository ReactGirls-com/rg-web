import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';
import { BasicCard } from '@/src/components/BasicCard';
import style from './WhyChooseMentoringSection.module.scss';

export const WhyChooseMentoringSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.MENTORING_WHY_CHOOSE_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.paleLavender}>
            {t.MENTORING_WHY_CHOOSE_HEADING_HIGHLIGHT}
          </HeadingHighlight>{' '}
          {t.MENTORING_WHY_CHOOSE_HEADING_AFTER}
        </>
      }
      subheading={t.MENTORING_WHY_CHOOSE_SUBHEADING}
    >
      <div className={style.cardsContainer}>
        <BasicCard
          iconClassName={style.iconTarget}
          title={t.MENTORING_WHY_CHOOSE_CARD_1_TITLE}
          description={t.MENTORING_WHY_CHOOSE_CARD_1_DESCRIPTION}
          iconColor={COLORS.grapefruitPulp}
        />
        <BasicCard
          iconClassName={style.iconCalendar}
          title={t.MENTORING_WHY_CHOOSE_CARD_2_TITLE}
          description={t.MENTORING_WHY_CHOOSE_CARD_2_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
        />
        <BasicCard
          iconClassName={style.iconChat}
          title={t.MENTORING_WHY_CHOOSE_CARD_3_TITLE}
          description={t.MENTORING_WHY_CHOOSE_CARD_3_DESCRIPTION}
          iconColor={COLORS.paleLavender}
        />
        <BasicCard
          iconClassName={style.iconMedal}
          title={t.MENTORING_WHY_CHOOSE_CARD_4_TITLE}
          description={t.MENTORING_WHY_CHOOSE_CARD_4_DESCRIPTION}
          iconColor={COLORS.explodingStar}
        />
      </div>
    </Section>
  );
};
