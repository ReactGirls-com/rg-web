import clsx from 'clsx';

import style from './IconWrapper.module.scss';

type IconWrapperProps = {
  iconClassName: string;
  iconColor: string;
  className?: string;
};

export const IconWrapper: React.FC<IconWrapperProps> = ({
  iconClassName,
  iconColor,
  className,
}) => (
  <div
    className={clsx(style.iconWrapper, className)}
    style={{ '--icon-color': iconColor } as React.CSSProperties}
  >
    <div className={clsx(style.baseIcon, iconClassName)} />
  </div>
);
