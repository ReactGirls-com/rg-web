import { StepProcess } from '@/src/components/StepProcess';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';

export const MentoringRegistrationProcess = () => (
  <StepProcess
    headingBefore={TRANSLATIONS.MENTORING_REGISTRATION_HEADING_BEFORE}
    headingHighlight={TRANSLATIONS.MENTORING_REGISTRATION_HEADING_HIGHLIGHT}
    headingHighlightColor={COLORS.paleLavender}
    steps={[
      {
        number: '01',
        title: TRANSLATIONS.MENTORING_REGISTRATION_STEP_1_TITLE,
        description: TRANSLATIONS.MENTORING_REGISTRATION_STEP_1_DESCRIPTION,
        color: COLORS.grapefruitPulp,
      },
      {
        number: '02',
        title: TRANSLATIONS.MENTORING_REGISTRATION_STEP_2_TITLE,
        description: TRANSLATIONS.MENTORING_REGISTRATION_STEP_2_DESCRIPTION,
        color: COLORS.aztecAtom,
      },
      {
        number: '03',
        title: TRANSLATIONS.MENTORING_REGISTRATION_STEP_3_TITLE,
        description: TRANSLATIONS.MENTORING_REGISTRATION_STEP_3_DESCRIPTION,
        color: COLORS.paleLavender,
      },
      {
        number: '04',
        title: TRANSLATIONS.MENTORING_REGISTRATION_STEP_4_TITLE,
        description: TRANSLATIONS.MENTORING_REGISTRATION_STEP_4_DESCRIPTION,
        color: COLORS.explodingStar,
      },
    ]}
  />
);
