import { BorderBox } from '@/src/components/BorderBox';
import { IconWrapper } from '@/src/components/IconWrapper';
import { ChildrenFC } from '@/src/utils/types';
import style from './InfoBox.module.scss';

type InfoBoxProps = {
  title: string;
  iconClassName: string;
  iconColor: string;
};

export const InfoBox: ChildrenFC<InfoBoxProps> = ({
  title,
  iconClassName,
  iconColor,
  children,
}) => (
  <BorderBox className={style.box}>
    <IconWrapper
      className={style.iconWrapper}
      iconClassName={iconClassName}
      iconColor={iconColor}
    />
    <div className={style.boxContent}>
      <h3 className={style.boxTitle}>{title}</h3>
      {children}
    </div>
  </BorderBox>
);
