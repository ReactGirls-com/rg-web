import { Section } from '../../../components/Section';
import { HeadingHighlight } from '../../../components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import style from './RegistrationProcess.module.scss';

type StepProps = {
  number: string;
  title: string;
  description: string;
  color: string;
};

const Step = ({ number, title, description, color }: StepProps) => (
  <div className={style.step}>
    <div
      className={style.stepCircle}
      style={{ '--step-color': color } as React.CSSProperties}
    >
      {number}
    </div>
    <h3 className={style.stepTitle}>{title}</h3>
    <p className={style.stepDescription}>{description}</p>
  </div>
);

export const RegistrationProcess = () => (
  <Section
    heading={
      <>
        {TRANSLATIONS.REGISTRATION_PROCESS_SECTION_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
          {TRANSLATIONS.REGISTRATION_PROCESS_SECTION_HEADING_HIGHLIGHT}
        </HeadingHighlight>
      </>
    }
  >
    <div className={style.stepsContainer}>
      <Step
        number="01"
        title={TRANSLATIONS.REGISTRATION_PROCESS_STEP_1_TITLE}
        description={TRANSLATIONS.REGISTRATION_PROCESS_STEP_1_DESCRIPTION}
        color={COLORS.grapefruitPulp}
      />
      <Step
        number="02"
        title={TRANSLATIONS.REGISTRATION_PROCESS_STEP_2_TITLE}
        description={TRANSLATIONS.REGISTRATION_PROCESS_STEP_2_DESCRIPTION}
        color={COLORS.aztecAtom}
      />
      <Step
        number="03"
        title={TRANSLATIONS.REGISTRATION_PROCESS_STEP_3_TITLE}
        description={TRANSLATIONS.REGISTRATION_PROCESS_STEP_3_DESCRIPTION}
        color={COLORS.paleLavender}
      />
      <Step
        number="04"
        title={TRANSLATIONS.REGISTRATION_PROCESS_STEP_4_TITLE}
        description={TRANSLATIONS.REGISTRATION_PROCESS_STEP_4_DESCRIPTION}
        color={COLORS.explodingStar}
      />
    </div>
  </Section>
);
