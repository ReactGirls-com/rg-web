import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { BorderBox } from '@/src/components/BorderBox';
import { IconWrapper } from '@/src/components/IconWrapper';
import { Checklist } from '@/src/components/Checklist';
import { COLORS } from '@/src/styles/color';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import style from './ScheduleSection.module.scss';

export const ScheduleSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.REACT_ACADEMY_SCHEDULE_HEADING_BEFORE}
          <HeadingHighlight highlightColor={COLORS.aztecAtom}>
            {t.REACT_ACADEMY_SCHEDULE_HEADING_HIGHLIGHT}
          </HeadingHighlight>
          {t.REACT_ACADEMY_SCHEDULE_HEADING_AFTER}
        </>
      }
      subheading={t.REACT_ACADEMY_SCHEDULE_DESCRIPTION}
    >
      <BorderBox as="article" className={style.scheduleCard}>
        <IconWrapper
          iconClassName={style.iconSchedule}
          iconColor={COLORS.aztecAtom}
          className={style.scheduleIconWrapper}
        />
        <h3 className={style.scheduleCardTitle}>
          {t.REACT_ACADEMY_SCHEDULE_TERMS_TITLE}
        </h3>
        <p className={style.scheduleCardDescription}>
          {t.REACT_ACADEMY_SCHEDULE_TERMS_INTRO_1}
        </p>
        <p className={style.scheduleCardDescription}>
          {t.REACT_ACADEMY_SCHEDULE_TERMS_INTRO_2}
        </p>
        <p className={style.scheduleCardDescription}>
          {t.REACT_ACADEMY_SCHEDULE_TERMS_INTRO_3}
        </p>
        <p className={style.scheduleCalendarLabel}>
          {t.REACT_ACADEMY_SCHEDULE_CALENDAR_LABEL}
        </p>
        <div className={style.scheduleDatesList}>
          <Checklist
            items={[
              t.REACT_ACADEMY_SCHEDULE_DATE_1,
              t.REACT_ACADEMY_SCHEDULE_DATE_2,
              t.REACT_ACADEMY_SCHEDULE_DATE_3,
              t.REACT_ACADEMY_SCHEDULE_DATE_4,
              t.REACT_ACADEMY_SCHEDULE_DATE_5,
              t.REACT_ACADEMY_SCHEDULE_DATE_6,
              t.REACT_ACADEMY_SCHEDULE_DATE_7,
              t.REACT_ACADEMY_SCHEDULE_DATE_8,
              t.REACT_ACADEMY_SCHEDULE_DATE_9,
              t.REACT_ACADEMY_SCHEDULE_DATE_10,
              t.REACT_ACADEMY_SCHEDULE_DATE_11,
              t.REACT_ACADEMY_SCHEDULE_DATE_12,
            ]}
            ariaLabel={t.REACT_ACADEMY_SCHEDULE_TERMS_TITLE}
          />
        </div>
      </BorderBox>
    </Section>
  );
};
