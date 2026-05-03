import clsx from 'clsx';

import clockSvg from '@/src/assets/clock.svg';
import { BorderBox } from '@/src/components/BorderBox';
import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { COLORS } from '@/src/styles/color';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { BACKEND_ACADEMY_CALENDAR_SESSIONS } from './backendAcademyCalendarSessions';
import style from './CalendarSection.module.scss';

export const CalendarSection: React.FC = async () => {
  const { locale, t } = await getTranslationsWithLocale();
  const sessions = BACKEND_ACADEMY_CALENDAR_SESSIONS[locale];

  return (
    <Section
      heading={
        <>
          {t.BACKEND_ACADEMY_SCHEDULE_HEADING_BEFORE}
          <HeadingHighlight highlightColor={COLORS.aztecAtom}>
            {t.BACKEND_ACADEMY_SCHEDULE_HEADING_HIGHLIGHT}
          </HeadingHighlight>
          {t.BACKEND_ACADEMY_SCHEDULE_HEADING_AFTER}
        </>
      }
      subheading={t.BACKEND_ACADEMY_SCHEDULE_DESCRIPTION}
    >
      <ul
        className={style.grid}
        aria-label={t.BACKEND_ACADEMY_CALENDAR_GRID_LABEL}
      >
        {sessions.map((session, index) => {
          const lessonNumber = index + 1;
          const isEvening = session.variant === 'evening';

          return (
            <li
              key={`${session.date}-${session.weekday}`}
              className={style.gridItem}
            >
              <BorderBox className={style.itemBox}>
                <div className={style.itemInner}>
                  <div
                    className={clsx(
                      style.numberBadge,
                      isEvening ? style.badgeEvening : style.badgeFullDay,
                    )}
                    aria-hidden
                  >
                    {lessonNumber}
                  </div>
                  <div className={style.cardBody}>
                    <p className={style.date}>{session.date}</p>
                    <p className={style.day}>{session.weekday}</p>
                    <p className={style.timeRow}>
                      <span
                        className={style.clockIcon}
                        style={
                          {
                            WebkitMaskImage: `url(${clockSvg.src})`,
                            maskImage: `url(${clockSvg.src})`,
                          } as React.CSSProperties
                        }
                        aria-hidden
                      />
                      <span>{session.timeRange}</span>
                    </p>
                  </div>
                </div>
              </BorderBox>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
