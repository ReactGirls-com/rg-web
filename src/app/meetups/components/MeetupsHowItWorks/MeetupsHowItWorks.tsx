import { StepProcess } from '@/src/components/StepProcess';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';

export const MeetupsHowItWorks = () => (
  <StepProcess
    headingBefore={TRANSLATIONS.MEETUPS_HOW_IT_WORKS_SECTION_HEADING_BEFORE}
    headingHighlight={
      TRANSLATIONS.MEETUPS_HOW_IT_WORKS_SECTION_HEADING_HIGHLIGHT
    }
    headingAfter={TRANSLATIONS.MEETUPS_HOW_IT_WORKS_SECTION_HEADING_AFTER}
    headingHighlightColor={COLORS.aztecAtom}
    subheading={TRANSLATIONS.MEETUPS_HOW_IT_WORKS_SECTION_SUBHEADING}
    steps={[
      {
        number: '01',
        title: TRANSLATIONS.MEETUPS_HOW_IT_WORKS_STEP_1_TITLE,
        description: TRANSLATIONS.MEETUPS_HOW_IT_WORKS_STEP_1_DESCRIPTION,
        color: COLORS.grapefruitPulp,
      },
      {
        number: '02',
        title: TRANSLATIONS.MEETUPS_HOW_IT_WORKS_STEP_2_TITLE,
        description: TRANSLATIONS.MEETUPS_HOW_IT_WORKS_STEP_2_DESCRIPTION,
        color: COLORS.aztecAtom,
      },
      {
        number: '03',
        title: TRANSLATIONS.MEETUPS_HOW_IT_WORKS_STEP_3_TITLE,
        description: TRANSLATIONS.MEETUPS_HOW_IT_WORKS_STEP_3_DESCRIPTION,
        color: COLORS.paleLavender,
      },
      {
        number: '04',
        title: TRANSLATIONS.MEETUPS_HOW_IT_WORKS_STEP_4_TITLE,
        description: TRANSLATIONS.MEETUPS_HOW_IT_WORKS_STEP_4_DESCRIPTION,
        color: COLORS.explodingStar,
      },
    ]}
  />
);
