import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { TRANSLATIONS } from '@/src/constants/translations';
import { CONTACT_LINK } from '@/src/constants';
import style from './PartnersCta.module.scss';

export const PartnersCta = () => (
  <CtaBanner
    title={TRANSLATIONS.PARTNERS_CTA_TITLE}
    description={TRANSLATIONS.PARTNERS_CTA_DESCRIPTION}
    buttonsContainerClassName={style.buttons}
  >
    <Button variant="aztecAtom" href="https://forms.gle/zYT9YLroDXtgTCMBA">
      {TRANSLATIONS.PARTNERS_CTA_BUTTON_PRIMARY}
    </Button>

    <Button variant="explodingStar" href={CONTACT_LINK}>
      {TRANSLATIONS.PARTNERS_CTA_BUTTON_SECONDARY}
    </Button>
  </CtaBanner>
);
