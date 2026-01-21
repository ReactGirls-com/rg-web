import { DataCard } from '@/src/components/DataCard';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { BorderBox } from '../../../components/BorderBox';
import { SUFFIX } from '@/src/constants';
import { getLocalizedPercentSuffix } from '@/src/utils/getTranslations';
import style from './YellowSection.module.scss';

export const YellowSection: React.FC = async () => {
  const { locale, t } = await getTranslationsWithLocale();

  return (
    <BorderBox as="section" className={style.container}>
      <div className={style.textContent}>
        <h2 className={style.heading}>{t.WHY_REACT_GIRLS_HEADING}</h2>
        <p className={style.paragraph}>{t.WHY_REACT_GIRLS_PARAGRAPH}</p>
        <ul className={style.bulletList}>
          <li className={style.bulletItem}>
            {t.WHY_REACT_GIRLS_BULLET_POINTS_1}
          </li>
          <li className={style.bulletItem}>
            {t.WHY_REACT_GIRLS_BULLET_POINTS_2}
          </li>
          <li className={style.bulletItem}>
            {t.WHY_REACT_GIRLS_BULLET_POINTS_3}
          </li>
        </ul>
      </div>

      <div className={style.dataGrid}>
        <DataCard
          value={97}
          valueSuffix={getLocalizedPercentSuffix(locale)}
          label={t.WHY_REACT_GIRLS_STATS_SATISFACTION_LABEL}
          colorClassName={style.grapefruitPulp}
          shouldAnimate
        />
        <DataCard
          value="4.9"
          label={t.WHY_REACT_GIRLS_STATS_RATING_LABEL}
          colorClassName={style.aztecAtom}
          showStar
        />
        <DataCard
          value={900}
          valueSuffix={SUFFIX.plus}
          label={t.WHY_REACT_GIRLS_STATS_MEMBERS_LABEL}
          colorClassName={style.paleLavender}
          shouldAnimate
        />
        <DataCard
          value="24/7"
          label={t.WHY_REACT_GIRLS_STATS_SUPPORT_LABEL}
          colorClassName={style.explodingStar}
        />
      </div>
    </BorderBox>
  );
};
