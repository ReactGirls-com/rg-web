import clsx from 'clsx';

import style from './Checklist.module.scss';

type ChecklistProps = {
  items: string[];
  ariaLabel?: string;
  className?: string;
};

export const Checklist: React.FC<ChecklistProps> = ({
  items,
  ariaLabel = 'Checklist',
  className,
}) => (
  <ul className={clsx(style.list, className)} aria-label={ariaLabel}>
    {items.map((item) => (
      <li key={item} className={style.item}>
        <span className={style.icon} aria-hidden />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
