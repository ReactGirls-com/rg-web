import { AI_JAM_REGISTRATION_CUTOFF } from '@/src/constants';

export const isAiJamRegistrationOpen = (): boolean =>
  Date.now() < AI_JAM_REGISTRATION_CUTOFF.getTime();
