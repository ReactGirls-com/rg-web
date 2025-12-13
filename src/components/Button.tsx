import { ComponentProps } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { COLORS } from '../styles/color';
import style from './Button.module.scss';

type BaseButtonProps = {
  variant: 'aztecAtom' | 'explodingStar' | 'grapefruitPulp' | 'paleLavender';
  className?: string;
  children: React.ReactNode;
};

type ButtonWithHref = BaseButtonProps & {
  href: string;
  onClick?: () => void;
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>;

type ButtonWithOnClick = BaseButtonProps & {
  href?: never;
  onClick: () => void;
} & Omit<ComponentProps<'button'>, 'onClick' | 'className' | 'children'>;

type ButtonProps = ButtonWithHref | ButtonWithOnClick;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  href,
  onClick,
  className,
  ...props
}) => {
  const buttonClassName = clsx(
    style.button,
    {
      [style.darkText]:
        variant === 'aztecAtom' ||
        variant === 'explodingStar' ||
        variant === 'grapefruitPulp',
    },
    className,
  );

  const buttonStyle = {
    '--button-color': COLORS[variant],
  } as React.CSSProperties;

  if (href) {
    const isExternalLink = href.startsWith('http');

    return (
      <Link
        href={href}
        className={clsx(buttonClassName, {
          [style.externalLink]: isExternalLink,
        })}
        style={buttonStyle}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
        {...(props as any)}
      >
        {children}
        {isExternalLink && <span className={style.icon} />}
      </Link>
    );
  }

  return (
    <button
      className={buttonClassName}
      style={buttonStyle}
      onClick={onClick}
      {...(props as any)}
    >
      {children}
    </button>
  );
};
