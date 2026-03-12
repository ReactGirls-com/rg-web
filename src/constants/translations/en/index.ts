import { common } from './common';
import { home } from './home';
import { courses } from './courses';
import { mentoring } from './mentoring';
import { meetups } from './meetups';
import { contact } from './contact';
import { reactAcademy } from './react-academy';
import { aiJam } from './ai-jam';
import { backendAcademy } from './backend-academy';
import { TranslationKey } from '../cs';

export const TRANSLATIONS_EN: Record<TranslationKey, string> = {
  ...common,
  ...home,
  ...courses,
  ...mentoring,
  ...meetups,
  ...contact,
  ...reactAcademy,
  ...aiJam,
  ...backendAcademy,
} as const;
