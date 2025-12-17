import { CopyEmailButton } from './CopyEmailButton';
import { CtaBanner } from '../CtaBanner';

type AreYouLostBannerProps = {
  title?: string;
  description?: string;
};

export const AreYouLostBanner: React.FC<AreYouLostBannerProps> = ({
  title,
  description,
}) => (
  <CtaBanner title={title} description={description}>
    <CopyEmailButton />
  </CtaBanner>
);
