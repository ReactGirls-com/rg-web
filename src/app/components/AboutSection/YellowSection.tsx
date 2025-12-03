import { DataCard } from '@/src/components/DataCard';
import { TRANSLATIONS } from '@/src/constants/translations';
import { BorderBox } from '../../../components/BorderBox';
import style from './YellowSection.module.scss';

export const YellowSection: React.FC = () => (
  <BorderBox as="section" className={style.container}>
    <div className={style.textContent}>
      <h2 className={style.heading}>{TRANSLATIONS.WHY_REACT_GIRLS_HEADING}</h2>
      <p className={style.paragraph}>
        {TRANSLATIONS.WHY_REACT_GIRLS_PARAGRAPH}
      </p>
      <ul className={style.bulletList}>
        <li className={style.bulletItem}>
          {TRANSLATIONS.WHY_REACT_GIRLS_BULLET_POINTS_1}
        </li>
        <li className={style.bulletItem}>
          {TRANSLATIONS.WHY_REACT_GIRLS_BULLET_POINTS_2}
        </li>
        <li className={style.bulletItem}>
          {TRANSLATIONS.WHY_REACT_GIRLS_BULLET_POINTS_3}
        </li>
      </ul>
    </div>

    <div className={style.dataGrid}>
      <DataCard
        value={97}
        valueSuffix="%"
        label={TRANSLATIONS.WHY_REACT_GIRLS_STATS_SATISFACTION_LABEL}
        colorClassName={style.grapefruitPulp}
        shouldAnimate
      />
      <DataCard
        value="4.9"
        label={TRANSLATIONS.WHY_REACT_GIRLS_STATS_RATING_LABEL}
        colorClassName={style.aztecAtom}
        showStar
      />
      <DataCard
        value={900}
        valueSuffix="+"
        label={TRANSLATIONS.WHY_REACT_GIRLS_STATS_MEMBERS_LABEL}
        colorClassName={style.paleLavender}
        shouldAnimate
      />
      <DataCard
        value="24/7"
        label={TRANSLATIONS.WHY_REACT_GIRLS_STATS_SUPPORT_LABEL}
        colorClassName={style.explodingStar}
      />
    </div>
  </BorderBox>
);
