import { AboutSection } from '../components/AboutSection';
import { HeroSection } from '../components/HeroSection';
import { OurActivities } from '../components/OurActivities/OurActivities';
import { PartnersSection } from '../components/PartnersSection';
import {
  getTranslations,
  getLocaleFromParams,
} from '@/src/utils/getTranslations';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_HOME_TITLE,
    description: t.META_HOME_DESCRIPTION,
    alternates: getPageAlternates('/', locale),
  };
};

const Home: React.FC = () => (
  <>
    <HeroSection />
    <AboutSection />
    <OurActivities />
    <PartnersSection />
  </>
);

export default Home;
