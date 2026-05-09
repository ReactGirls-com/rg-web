import { COURSE_REGISTRATION_CUTOFF } from '@/src/constants';

export const isCourseRegistrationOpen = (): boolean =>
  Date.now() < COURSE_REGISTRATION_CUTOFF.getTime();
