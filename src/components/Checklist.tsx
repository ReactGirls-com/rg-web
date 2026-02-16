import clsx from 'clsx';

import style from './Checklist.module.scss';

type ChecklistProps = {
  items: string[];
  ariaLabel?: string;
  variant?: 'default' | 'coral';
};

export const Checklist: React.FC<ChecklistProps> = ({
  items,
  ariaLabel = 'Checklist',
  variant = 'default',
}) => (
  <ul className={style.list} aria-label={ariaLabel}>
    {items.map((item) => (
      <li key={item} className={style.item}>
        <span
          className={clsx(style.icon, variant === 'coral' && style.iconCoral)}
          aria-hidden
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
