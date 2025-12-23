import { WriteToUsButton } from './WriteToUsButton';
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
    <WriteToUsButton />
  </CtaBanner>
);
