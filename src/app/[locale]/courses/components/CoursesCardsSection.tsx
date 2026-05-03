import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { isCourseRegistrationOpen } from '@/src/utils/isCourseRegistrationOpen';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { BACKEND_ACADEMY_REGISTRATION_LINK } from '@/src/constants';
import { COLORS } from '@/src/styles/color';
import { CourseCard } from './CourseCard';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { Section } from '@/src/components/Section';
import style from './CoursesCardsSection.module.scss';

export const CoursesCardsSection: React.FC = async () => {
  const { locale, t } = await getTranslationsWithLocale();
  const registrationOpen = isCourseRegistrationOpen();

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
          showBadge={registrationOpen}
          badgeText={
            registrationOpen ? t.COURSES_CARD_REGISTRATION_OPEN_PILL : undefined
          }
          primaryButtonText={
            registrationOpen ? t.BACKEND_ACADEMY_HERO_BUTTON : undefined
          }
          primaryButtonHref={
            registrationOpen ? BACKEND_ACADEMY_REGISTRATION_LINK : undefined
          }
          primaryButtonVariant={registrationOpen ? 'explodingStar' : undefined}
          secondaryButtonText={t.COURSES_CARD_LEARN_MORE_BUTTON}
          secondaryButtonHref={getLocaleAwareLink(
            '/courses/backend-akademie',
            locale,
          )}
          secondaryButtonVariant="grapefruitPulp"
        />
        <CourseCard
          iconClassName={style.iconAi}
          iconColor={COLORS.paleLavender}
          title={t.COURSES_CARD_AI_TITLE}
          description={t.COURSES_CARD_AI_DESCRIPTION}
          secondaryButtonText={t.COURSES_CARD_LEARN_MORE_BUTTON}
          secondaryButtonHref={getLocaleAwareLink('/courses/ai-jam', locale)}
          secondaryButtonVariant="paleLavender"
        />
      </div>
    </Section>
  );
};
