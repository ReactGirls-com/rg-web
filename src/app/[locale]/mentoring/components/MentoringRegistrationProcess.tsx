import { StepProcess } from '@/src/components/StepProcess';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';

export const MentoringRegistrationProcess: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <StepProcess
      headingBefore={t.MENTORING_REGISTRATION_HEADING_BEFORE}
      headingHighlight={t.MENTORING_REGISTRATION_HEADING_HIGHLIGHT}
      headingHighlightColor={COLORS.paleLavender}
      steps={[
        {
          number: '01',
          title: t.MENTORING_REGISTRATION_STEP_1_TITLE,
          description: t.MENTORING_REGISTRATION_STEP_1_DESCRIPTION,
          color: COLORS.grapefruitPulp,
        },
        {
          number: '02',
          title: t.MENTORING_REGISTRATION_STEP_2_TITLE,
          description: t.MENTORING_REGISTRATION_STEP_2_DESCRIPTION,
          color: COLORS.aztecAtom,
        },
        {
          number: '03',
          title: t.MENTORING_REGISTRATION_STEP_3_TITLE,
          description: t.MENTORING_REGISTRATION_STEP_3_DESCRIPTION,
          color: COLORS.paleLavender,
        },
        {
          number: '04',
          title: t.MENTORING_REGISTRATION_STEP_4_TITLE,
          description: t.MENTORING_REGISTRATION_STEP_4_DESCRIPTION,
          color: COLORS.explodingStar,
        },
      ]}
    />
  );
};
