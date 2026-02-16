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
    title: t.META_AI_JAM_TITLE,
    description: t.META_AI_JAM_DESCRIPTION,
    alternates: getPageAlternates('/courses/ai-jam', locale),
  };
};

const AIJamPage: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.aztecAtom}
        headingBefore={t.AI_JAM_HERO_HEADING_BEFORE}
        headingHighlight={t.AI_JAM_HERO_HEADING_HIGHLIGHT}
        subheading={
          <>
            <p>{t.AI_JAM_HERO_SUBHEADING_1}</p>
            <p>{t.AI_JAM_HERO_SUBHEADING_2}</p>
            <p>{t.AI_JAM_HERO_SUBHEADING_3}</p>
          </>
        }
      />

      <Section>
        <CtaBanner
          title={t.AI_JAM_CTA_TITLE}
          description={t.AI_JAM_CTA_DESCRIPTION}
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

export default AIJamPage;
