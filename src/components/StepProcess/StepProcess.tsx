import clsx from 'clsx';

import { Section } from '../Section';
import { HeadingHighlight } from '../HeadingHighlight';
import style from './StepProcess.module.scss';

type StepData = {
  number?: string;
  iconClassName?: string;
  title: string;
  description: string;
  color: string;
};

type StepProcessProps = {
  headingBefore: string;
  headingHighlight: string;
  headingHighlightColor: string;
  headingAfter?: string;
  steps: StepData[];
  subheading?: string;
};

type StepProps = {
  number?: string;
  iconClassName?: string;
  title: string;
  description: string;
  color: string;
};

const Step: React.FC<StepProps> = ({
  number,
  iconClassName,
  title,
  description,
  color,
}) => (
  <div className={style.step}>
    <div
      className={style.stepCircle}
      style={{ '--step-color': color } as React.CSSProperties}
    >
      {iconClassName ? (
        <div className={clsx(style.stepIcon, iconClassName)} />
      ) : (
        number
      )}
    </div>
    <h3 className={style.stepTitle}>{title}</h3>
    <p className={style.stepDescription}>{description}</p>
  </div>
);

export const StepProcess: React.FC<StepProcessProps> = ({
  headingBefore,
  headingHighlight,
  headingHighlightColor,
  headingAfter,
  steps,
  subheading,
}) => (
  <Section
    heading={
      <>
        {headingBefore}{' '}
        <HeadingHighlight highlightColor={headingHighlightColor}>
          {headingHighlight}
        </HeadingHighlight>
        {headingAfter && ` ${headingAfter}`}
      </>
    }
    subheading={subheading}
  >
    <div className={style.stepsContainer}>
      {steps.map((step, index) => (
        <Step
          key={step.number || step.iconClassName || index}
          number={step.number}
          iconClassName={step.iconClassName}
          title={step.title}
          description={step.description}
          color={step.color}
        />
      ))}
    </div>
  </Section>
);
