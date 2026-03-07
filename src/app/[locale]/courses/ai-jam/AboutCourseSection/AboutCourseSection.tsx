import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { COLORS } from '@/src/styles/color';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { BasicCard } from '@/src/components/BasicCard';
import style from './AboutCourseSection.module.scss';

export const AboutCourseSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.AI_JAM_ABOUT_COURSE_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
            {t.AI_JAM_ABOUT_COURSE_HEADING_HIGHLIGHT}
          </HeadingHighlight>
          {t.AI_JAM_ABOUT_COURSE_HEADING_AFTER}
        </>
      }
      subheading={
        <div>
          {t.AI_JAM_ABOUT_COURSE_DESCRIPTION_1}

          <div className={style.description}>
            {t.AI_JAM_ABOUT_COURSE_DESCRIPTION_2}
          </div>
        </div>
      }
    >
      <div className={style.cardsContainer}>
        <BasicCard
          iconClassName={style.iconComputer}
          title={t.AI_JAM_ABOUT_FORMAT_TITLE}
          description={t.AI_JAM_ABOUT_FORMAT_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
        />
        <BasicCard
          iconClassName={style.iconPeople}
          title={t.AI_JAM_ABOUT_NETWORKING_TITLE}
          description={t.AI_JAM_ABOUT_NETWORKING_DESCRIPTION}
          iconColor={COLORS.paleLavender}
        />
        <BasicCard
          iconClassName={style.iconRocket}
          title={t.AI_JAM_ABOUT_TRENDS_TITLE}
          description={t.AI_JAM_ABOUT_TRENDS_DESCRIPTION}
          iconColor={COLORS.explodingStar}
        />
      </div>
    </Section>
  );
};
