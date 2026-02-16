import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { Section } from '@/src/components/Section';
import { CtaBanner } from '@/src/components/CtaBanner';
import { SocialLinks } from '@/src/components/SocialLinks';
import { COLORS } from '@/src/styles/color';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';
import style from './page.module.scss';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_BACKEND_ACADEMY_TITLE,
    description: t.META_BACKEND_ACADEMY_DESCRIPTION,
    alternates: getPageAlternates('/courses/backend-akademie', locale),
  };
};

const BackendAcademyPage: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.grapefruitPulp}
        headingBefore={t.BACKEND_ACADEMY_HERO_HEADING_BEFORE}
        headingHighlight={t.BACKEND_ACADEMY_HERO_HEADING_HIGHLIGHT}
        headingAfter={t.BACKEND_ACADEMY_HERO_HEADING_AFTER}
        subheading={t.BACKEND_ACADEMY_HERO_SUBHEADING}
      />

      <Section>
        <CtaBanner
          title={t.BACKEND_ACADEMY_CTA_TITLE}
          description={t.BACKEND_ACADEMY_CTA_DESCRIPTION}
          className={style.ctaBanner}
          buttonsContainerClassName={style.socialLinksContainer}
        >
          <SocialLinks
            ariaLabel={t.ARIA_SOCIAL_MEDIA_LINKS}
            className={style.socialLinks}
          />
        </CtaBanner>
      </Section>
    </>
  );
};

export default BackendAcademyPage;
