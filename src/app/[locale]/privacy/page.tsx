import { getLocaleFromParams } from '@/src/utils/getTranslations';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';
import { LegalDocument } from '@/src/components/LegalDocument/LegalDocument';
import { privacyContentByLocale } from './privacyContent';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const content = privacyContentByLocale[locale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: getPageAlternates('/privacy', locale),
  };
};

const PrivacyPage = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const content = privacyContentByLocale[locale];

  return (
    <LegalDocument pageTitle={content.pageTitle} sections={content.sections} />
  );
};

export default PrivacyPage;
