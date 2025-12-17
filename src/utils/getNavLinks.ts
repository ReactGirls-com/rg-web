import type { Translations } from './getTranslations';
import {
  COURSES_LINK,
  MENTORING_LINK,
  MEETUPS_LINK,
  CONTACT_LINK,
} from '../constants';

export const getNavLinks = (t: Translations) => [
  {
    label: t.COURSES_LINK_TEXT,
    href: COURSES_LINK,
  },
  {
    label: t.MENTORING_LINK_TEXT,
    href: MENTORING_LINK,
  },
  {
    label: t.MEETUPS_LINK_TEXT,
    href: MEETUPS_LINK,
  },
  {
    label: t.CONTACT_LINK_TEXT,
    href: CONTACT_LINK,
  },
];
