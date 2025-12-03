import { CopyEmailButton } from './CopyEmailButton';
import { TRANSLATIONS } from '../../constants/translations';
import { CtaBanner } from '../CtaBanner';

export const AreYouLostBanner: React.FC = () => (
  <CtaBanner
    title={TRANSLATIONS.CTA_TITLE}
    description={TRANSLATIONS.CTA_DESCRIPTION}
  >
    <CopyEmailButton
      email="reactgirlsprague@gmail.com"
      copyText={TRANSLATIONS.CTA_COPY_EMAIL}
      copiedText={TRANSLATIONS.CTA_COPIED_EMAIL}
    />
  </CtaBanner>
);
