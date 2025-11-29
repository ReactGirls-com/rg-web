import { Row } from '../Row';
import style from './ContactRow.module.scss';

type ContactRowProps = {
  iconClass: string;
  label: string;
  value: string;
  className?: string;
};

export const ContactRow: React.FC<ContactRowProps> = ({
  iconClass,
  label,
  value,
  className,
}) => (
  <Row gap="16px" className={className}>
    <span className={iconClass} aria-hidden="true" />
    <Row gap="8px">
      <span className={style.contactLabel}>{label}</span>
      <span className={style.contactValue}>{value}</span>
    </Row>
  </Row>
);
