import { SOCIAL_LINKS } from '@/src/constants';
import { IconButton } from './IconButton';
import { COLORS } from '@/src/styles/color';

type SocialLinksProps = {
  ariaLabel: string;
  className?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  ariaLabel,
  className,
}) => (
  <nav className={className} aria-label={ariaLabel}>
    {SOCIAL_LINKS.map(({ label, icon, href, ariaLabel: linkAriaLabel }) => (
      <IconButton
        key={label}
        href={href}
        variant="primary"
        backgroundColor={COLORS.crystalCut}
        aria-label={linkAriaLabel}
        icon={icon}
      />
    ))}
  </nav>
);
