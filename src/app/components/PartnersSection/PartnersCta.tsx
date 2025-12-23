import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { CONTACT_LINK } from '@/src/constants';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { getLocale } from '@/src/utils/getTranslations';
import style from './PartnersCta.module.scss';

type PartnersCtaProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
};

export const PartnersCta: React.FC<PartnersCtaProps> = async ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}) => {
  const locale = await getLocale();

  return (
    <CtaBanner
      title={title}
      description={description}
      buttonsContainerClassName={style.buttons}
    >
      <Button variant="aztecAtom" href="https://forms.gle/zYT9YLroDXtgTCMBA">
        {primaryButtonText}
      </Button>

      <Button
        variant="explodingStar"
        href={`${getLocaleAwareLink(CONTACT_LINK, locale)}#our-team`}
      >
        {secondaryButtonText}
      </Button>
    </CtaBanner>
  );
};
