import { Button } from '@/src/components/Button';
import { CONTACT_LINK } from '@/src/constants';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';

export const WriteToUsButton: React.FC = async () => {
  const { t, locale } = await getTranslationsWithLocale();

  return (
    <Button
      variant="explodingStar"
      href={`${getLocaleAwareLink(CONTACT_LINK, locale)}#our-team`}
    >
      {t.CTA_BUTTON}
    </Button>
  );
};
