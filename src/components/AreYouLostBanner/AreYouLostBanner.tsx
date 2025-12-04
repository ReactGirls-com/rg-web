import { CopyEmailButton } from './CopyEmailButton';
import { TRANSLATIONS } from '../../constants/translations';
import { CtaBanner } from '../CtaBanner';

type AreYouLostBannerProps = {
  title?: string;
  description?: string;
};

export const AreYouLostBanner: React.FC<AreYouLostBannerProps> = ({
  title = TRANSLATIONS.CTA_TITLE,
  description = TRANSLATIONS.CTA_DESCRIPTION,
}) => (
  <CtaBanner title={title} description={description}>
    <CopyEmailButton
      email="reactgirlsprague@gmail.com"
      copyText={TRANSLATIONS.CTA_BUTTON}
      copiedText={TRANSLATIONS.CTA_COPIED_EMAIL}
    />
  </CtaBanner>
);
