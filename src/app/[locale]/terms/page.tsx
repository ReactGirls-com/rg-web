import { getLocaleFromParams } from '@/src/utils/getTranslations';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';
import { LegalDocument } from '@/src/components/LegalDocument/LegalDocument';
import { PRIVACY_PATH } from '@/src/constants';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { termsContentByLocale } from './termsContent';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const content = termsContentByLocale[locale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: getPageAlternates('/terms', locale),
  };
};

const TermsPage = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const content = termsContentByLocale[locale];
  const privacyHref = getLocaleAwareLink(PRIVACY_PATH, locale);

  return (
    <LegalDocument
      pageTitle={content.pageTitle}
      sections={content.sections}
      privacyHref={privacyHref}
    />
  );
};

export default TermsPage;
