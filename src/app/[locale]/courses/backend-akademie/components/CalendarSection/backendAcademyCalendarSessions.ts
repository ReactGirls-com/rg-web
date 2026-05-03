import type { Locale } from '@/src/constants/translations';

export type SessionVariant = 'evening' | 'fullDay';

export type CalendarSession = {
  date: string;
  weekday: string;
  timeRange: string;
  variant: SessionVariant;
};

export const BACKEND_ACADEMY_CALENDAR_SESSIONS: Record<
  Locale,
  CalendarSession[]
> = {
  cs: [
    {
      date: '1. června 2026',
      weekday: 'Pondělí',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '3. června 2026',
      weekday: 'Středa',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '8. června 2026',
      weekday: 'Pondělí',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '11. června 2026',
      weekday: 'Čtvrtek',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '15. června 2026',
      weekday: 'Pondělí',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '17. června 2026',
      weekday: 'Středa',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '20. června 2026',
      weekday: 'Sobota',
      timeRange: '9:00 - 16:00',
      variant: 'fullDay',
    },
  ],
  en: [
    {
      date: '1 June 2026',
      weekday: 'Monday',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '3 June 2026',
      weekday: 'Wednesday',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '8 June 2026',
      weekday: 'Monday',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '11 June 2026',
      weekday: 'Thursday',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '15 June 2026',
      weekday: 'Monday',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '17 June 2026',
      weekday: 'Wednesday',
      timeRange: '18:00 - 21:00',
      variant: 'evening',
    },
    {
      date: '20 June 2026',
      weekday: 'Saturday',
      timeRange: '9:00 - 16:00',
      variant: 'fullDay',
    },
  ],
};
