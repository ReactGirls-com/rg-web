import Link from 'next/link';
import clsx from 'clsx';

import style from './IconButton.module.scss';

type IconButtonProps = {
  backgroundColor?: string;
  iconColor?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  iconClassName?: string;
  icon?: string;
  style?: React.CSSProperties;
};

export const IconButton: React.FC<IconButtonProps> = ({
  backgroundColor,
  iconColor,
  href,
  variant = 'primary',
  className,
  iconClassName,
  icon,
  style: iconButtonStyle,
  ...props
}) => {
  const buttonClassName = clsx(
    style.iconButton,
    {
      [style.iconButtonPrimary]: variant === 'primary',
      [style.iconButtonSecondary]: variant === 'secondary',
    },
    className,
  );

  const buttonStyle = {
    '--icon-color': iconColor,
    '--icon-button-background-color': backgroundColor,
    ...iconButtonStyle,
  } as React.CSSProperties;

  const iconProps = {
    className: clsx(style.icon, iconClassName),
    style: { maskImage: `url(${icon})` },
  };

  if (href) {
    const isExternalLink = href.startsWith('http');

    return (
      <Link
        href={href}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
        className={buttonClassName}
        style={buttonStyle}
        {...props}
      >
        {icon && <span {...iconProps} aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} style={buttonStyle} {...props}>
      {icon && <span {...iconProps} aria-hidden="true" />}
    </button>
  );
};
