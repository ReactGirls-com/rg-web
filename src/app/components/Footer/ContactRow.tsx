import { ReactNode } from 'react';

import { Row } from '../../../components/Row';
import style from './ContactRow.module.scss';

type ContactRowProps = {
  iconClass: string;
  value: ReactNode;
  className?: string;
};

export const ContactRow: React.FC<ContactRowProps> = ({
  iconClass,
  value,
  className,
}) => (
  <Row gap="16px" className={className}>
    <span className={iconClass} aria-hidden="true" />
    <Row gap="8px">
      <span className={style.contactValue}>{value}</span>
    </Row>
  </Row>
);
