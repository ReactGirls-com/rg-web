import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { COLORS } from '@/src/styles/color';
import { CourseCard } from './CourseCard';
import {
  AI_JAM_REGISTRATION_LINK,
  REACT_ACADEMY_REGISTRATION_LINK,
} from '@/src/constants';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { Section } from '@/src/components/Section';
import style from './CoursesCardsSection.module.scss';

export const CoursesCardsSection: React.FC = async () => {
  const { locale, t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.COURSES_REGISTRATION_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
            {t.COURSES_REGISTRATION_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>{' '}
          {t.COURSES_REGISTRATION_SECTION_HEADING_AFTER}
        </>
      }
    >
      <div className={style.cardsGrid}>
        <CourseCard
          iconClassName={style.iconReact}
          iconColor={COLORS.aztecAtom}
          title={t.COURSES_CARD_REACT_TITLE}
          description={t.COURSES_CARD_REACT_DESCRIPTION}
          additionalDescription={
            <div className={style.additionalDescription}>
              <span className={style.hoursIcon} />{' '}
              <span>{t.COURSES_CARD_REACT_INSTRUCTION_HOURS}</span>
              <span className={style.typeIcon} />{' '}
              <span>{t.COURSES_CARD_REACT_INSTRUCTION_TYPE}</span>
            </div>
          }
          bullets={[
            t.COURSES_CARD_REACT_BULLET_1,
            t.COURSES_CARD_REACT_BULLET_2,
            t.COURSES_CARD_REACT_BULLET_3,
            t.COURSES_CARD_REACT_BULLET_4,
          ]}
          showBadge
          badgeText={t.COURSES_CARD_REACT_BADGE}
          primaryButtonText={t.COURSES_CARD_REACT_PRIMARY_BUTTON}
          primaryButtonHref={REACT_ACADEMY_REGISTRATION_LINK}
          primaryButtonVariant="explodingStar"
          secondaryButtonText={t.COURSES_CARD_LEARN_MORE_BUTTON}
          secondaryButtonHref={getLocaleAwareLink(
            '/courses/react-akademie',
            locale,
          )}
          secondaryButtonVariant="aztecAtom"
        />
        <CourseCard
          iconClassName={style.iconBackend}
          iconColor={COLORS.grapefruitPulp}
          title={t.COURSES_CARD_BACKEND_TITLE}
          description={t.COURSES_CARD_BACKEND_DESCRIPTION}
          secondaryButtonText={t.COURSES_CARD_LEARN_MORE_BUTTON}
          secondaryButtonHref={getLocaleAwareLink(
            '/courses/backend-akademie',
            locale,
          )}
          secondaryButtonVariant="grapefruitPulp"
          showComingSoon
        />
        <CourseCard
          iconClassName={style.iconAi}
          iconColor={COLORS.paleLavender}
          title={t.COURSES_CARD_AI_TITLE}
          description={t.COURSES_CARD_AI_DESCRIPTION}
          primaryButtonText={t.COURSES_CARD_REACT_PRIMARY_BUTTON}
          primaryButtonHref={AI_JAM_REGISTRATION_LINK}
          primaryButtonVariant="explodingStar"
          secondaryButtonText={t.COURSES_CARD_LEARN_MORE_BUTTON}
          secondaryButtonHref={getLocaleAwareLink('/courses/ai-jam', locale)}
          secondaryButtonVariant="paleLavender"
        />
      </div>
    </Section>
  );
};
