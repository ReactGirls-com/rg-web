import clsx from 'clsx';

import style from './SocialLink.module.scss';

type SocialLinkProps = {
  href: string;
  ariaLabel: string;
  label: string;
  iconClass: string;
  className?: string;
};

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  ariaLabel,
  label,
  iconClass,
  className,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(style.socialLink, className)}
    aria-label={ariaLabel}
  >
    <span className={iconClass} aria-hidden="true" />
    <span className="visually-hidden">{label}</span>
  </a>
);
