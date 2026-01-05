import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { COLORS } from '@/src/styles/color';
import { OurTeam } from './components/OurTeam';
import { ContactInfoSection } from './components/ContactInfoSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { FaqSection } from './components/FaqSection';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_CONTACT_TITLE,
    description: t.META_CONTACT_DESCRIPTION,
    alternates: getPageAlternates('/contact', locale),
  };
};

const ContactPage: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.aztecAtom}
        headingBefore={t.CONTACT_HERO_HEADING_BEFORE}
        headingHighlight={t.CONTACT_HERO_HEADING_HIGHLIGHT}
        subheading={t.CONTACT_HERO_SUBHEADING}
      />
      <OurTeam />
      <ContactInfoSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
};

export default ContactPage;
