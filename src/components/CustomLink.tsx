'use client';

import { ComponentProps } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type CustomLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
};

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  className,
  activeClassName = '',
  children,
  ...props
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(className, {
        [activeClassName]: pathname === href,
      })}
      {...props}
    >
      {children}
    </Link>
  );
};
