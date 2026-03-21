import style from './LegalDocumentBulletList.module.scss';

type LegalDocumentBulletListProps = {
  items?: string[];
  keyPrefix: string;
};

export const LegalDocumentBulletList: React.FC<
  LegalDocumentBulletListProps
> = ({ items, keyPrefix }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className={style.list}>
      {items.map((item, index) => (
        <li key={`${keyPrefix}-${index}`} className={style.listItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};
