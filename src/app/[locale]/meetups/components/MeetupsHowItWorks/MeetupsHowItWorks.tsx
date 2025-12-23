import { StepProcess } from '@/src/components/StepProcess';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';
import style from './MeetupsHowItWorks.module.scss';

export const MeetupsHowItWorks: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <StepProcess
      headingBefore={t.MEETUPS_HOW_IT_WORKS_SECTION_HEADING_BEFORE}
      headingHighlight={t.MEETUPS_HOW_IT_WORKS_SECTION_HEADING_HIGHLIGHT}
      headingAfter={t.MEETUPS_HOW_IT_WORKS_SECTION_HEADING_AFTER}
      headingHighlightColor={COLORS.aztecAtom}
      subheading={t.MEETUPS_HOW_IT_WORKS_SECTION_SUBHEADING}
      steps={[
        {
          iconClassName: style.iconMagnifyingGlass,
          title: t.MEETUPS_HOW_IT_WORKS_STEP_1_TITLE,
          description: t.MEETUPS_HOW_IT_WORKS_STEP_1_DESCRIPTION,
          color: COLORS.grapefruitPulp,
        },
        {
          iconClassName: style.iconPin,
          title: t.MEETUPS_HOW_IT_WORKS_STEP_2_TITLE,
          description: t.MEETUPS_HOW_IT_WORKS_STEP_2_DESCRIPTION,
          color: COLORS.aztecAtom,
        },
        {
          iconClassName: style.iconMic,
          title: t.MEETUPS_HOW_IT_WORKS_STEP_3_TITLE,
          description: t.MEETUPS_HOW_IT_WORKS_STEP_3_DESCRIPTION,
          color: COLORS.paleLavender,
        },
        {
          iconClassName: style.iconChat,
          title: t.MEETUPS_HOW_IT_WORKS_STEP_4_TITLE,
          description: t.MEETUPS_HOW_IT_WORKS_STEP_4_DESCRIPTION,
          color: COLORS.explodingStar,
        },
      ]}
    />
  );
};
