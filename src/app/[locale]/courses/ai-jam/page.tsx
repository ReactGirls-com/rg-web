import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { BorderBox } from '@/src/components/BorderBox';
import { Button } from '@/src/components/Button';
import { COLORS } from '@/src/styles/color';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';
import { AI_JAM_REGISTRATION_LINK } from '@/src/constants';
import { isAiJamRegistrationOpen } from '@/src/utils/isAiJamRegistrationOpen';
import { AboutCourseSection } from './AboutCourseSection';
import { TopicProposalsSection } from './TopicProposalsSection';
import style from './page.module.scss';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_AI_JAM_TITLE,
    description: t.META_AI_JAM_DESCRIPTION,
    alternates: getPageAlternates('/courses/ai-jam', locale),
  };
};

const AIJamPage: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();
  const registrationOpen = isAiJamRegistrationOpen();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.paleLavender}
        headingHighlight={t.AI_JAM_HERO_HEADING_HIGHLIGHT}
        subheading={t.AI_JAM_HERO_SUBHEADING}
        contentAfterCards={<TopicProposalsSection />}
      >
        <div className={style.heroActions}>
          <BorderBox className={style.dateBadge}>
            <span className={style.dateIcon} aria-hidden />
            <span>{t.AI_JAM_HERO_DATE}</span>
          </BorderBox>

          {registrationOpen && (
            <Button
              variant="grapefruitPulp"
              href={AI_JAM_REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.AI_JAM_HERO_BUTTON}
            </Button>
          )}
        </div>
      </SecondaryHero>
      <AboutCourseSection />
    </>
  );
};

export default AIJamPage;
