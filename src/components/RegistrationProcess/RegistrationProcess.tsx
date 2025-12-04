import { Section } from '../Section';
import { HeadingHighlight } from '../HeadingHighlight';
import style from './RegistrationProcess.module.scss';

type StepData = {
  number: string;
  title: string;
  description: string;
  color: string;
};

type RegistrationProcessProps = {
  headingBefore: string;
  headingHighlight: string;
  headingHighlightColor: string;
  steps: StepData[];
};

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

export const RegistrationProcess: React.FC<RegistrationProcessProps> = ({
  headingBefore,
  headingHighlight,
  headingHighlightColor,
  steps,
}) => (
  <Section
    heading={
      <>
        {headingBefore}{' '}
        <HeadingHighlight highlightColor={headingHighlightColor}>
          {headingHighlight}
        </HeadingHighlight>
      </>
    }
  >
    <div className={style.stepsContainer}>
      {steps.map((step) => (
        <Step
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          color={step.color}
        />
      ))}
    </div>
  </Section>
);
