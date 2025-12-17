import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { CONTACT_LINK } from '@/src/constants';
import style from './PartnersCta.module.scss';

type PartnersCtaProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
};

export const PartnersCta: React.FC<PartnersCtaProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}) => (
  <CtaBanner
    title={title}
    description={description}
    buttonsContainerClassName={style.buttons}
  >
    <Button variant="aztecAtom" href="https://forms.gle/zYT9YLroDXtgTCMBA">
      {primaryButtonText}
    </Button>

    <Button variant="explodingStar" href={CONTACT_LINK}>
      {secondaryButtonText}
    </Button>
  </CtaBanner>
);
