import Link from 'next/link';
import clsx from 'clsx';

import style from './IconButton.module.scss';

type IconButtonProps = {
  backgroundColor?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  iconClassName?: string;
  icon?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  backgroundColor,
  href,
  variant = 'primary',
  className,
  iconClassName,
  icon,
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

  const buttonStyle = backgroundColor
    ? ({ '--icon-button-color': backgroundColor } as React.CSSProperties)
    : undefined;

  const iconProps = {
    className: clsx(style.icon, iconClassName),
    style: { maskImage: `url(${icon})` },
  };

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
