import { RegistrationProcess as AbstractedRegistrationProcess } from '@/src/components/RegistrationProcess';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';

export const RegistrationProcess = () => (
  <AbstractedRegistrationProcess
    headingBefore={TRANSLATIONS.REGISTRATION_PROCESS_SECTION_HEADING_BEFORE}
    headingHighlight={
      TRANSLATIONS.REGISTRATION_PROCESS_SECTION_HEADING_HIGHLIGHT
    }
    headingHighlightColor={COLORS.grapefruitPulp}
    steps={[
      {
        number: '01',
        title: TRANSLATIONS.REGISTRATION_PROCESS_STEP_1_TITLE,
        description: TRANSLATIONS.REGISTRATION_PROCESS_STEP_1_DESCRIPTION,
        color: COLORS.grapefruitPulp,
      },
      {
        number: '02',
        title: TRANSLATIONS.REGISTRATION_PROCESS_STEP_2_TITLE,
        description: TRANSLATIONS.REGISTRATION_PROCESS_STEP_2_DESCRIPTION,
        color: COLORS.aztecAtom,
      },
      {
        number: '03',
        title: TRANSLATIONS.REGISTRATION_PROCESS_STEP_3_TITLE,
        description: TRANSLATIONS.REGISTRATION_PROCESS_STEP_3_DESCRIPTION,
        color: COLORS.paleLavender,
      },
      {
        number: '04',
        title: TRANSLATIONS.REGISTRATION_PROCESS_STEP_4_TITLE,
        description: TRANSLATIONS.REGISTRATION_PROCESS_STEP_4_DESCRIPTION,
        color: COLORS.explodingStar,
      },
    ]}
  />
);
