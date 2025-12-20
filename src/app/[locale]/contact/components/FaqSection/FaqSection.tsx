import { Section } from '@/src/components/Section';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';
import { FaqItem } from './FaqItem';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import style from './FaqSection.module.scss';

export const FaqSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();
  const faqItems = [
    {
      question: t.FAQ_QUESTION_1,
      answer: t.FAQ_ANSWER_1,
      color: COLORS.grapefruitPulp,
    },
    {
      question: t.FAQ_QUESTION_2,
      answer: t.FAQ_ANSWER_2,
      color: COLORS.aztecAtom,
    },
    {
      question: t.FAQ_QUESTION_3,
      answer: t.FAQ_ANSWER_3,
      color: COLORS.paleLavender,
    },
    {
      question: t.FAQ_QUESTION_4,
      answer: t.FAQ_ANSWER_4,
      color: COLORS.explodingStar,
    },
    {
      question: t.FAQ_QUESTION_5,
      answer: t.FAQ_ANSWER_5,
      color: COLORS.grapefruitPulp,
    },
    {
      question: t.FAQ_QUESTION_6,
      answer: t.FAQ_ANSWER_6,
      color: COLORS.aztecAtom,
    },
  ];

  return (
    <Section
      heading={
        <>
          {t.FAQ_SECTION_TITLE}{' '}
          <HeadingHighlight highlightColor={COLORS.paleLavender}>
            {t.FAQ_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>
        </>
      }
    >
      <div className={style.faqContainer}>
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            questionColor={item.color}
            showAriaLabel={t.ARIA_FAQ_SHOW}
            hideAriaLabel={t.ARIA_FAQ_HIDE}
            answerAriaLabel={t.ARIA_FAQ_ANSWER_TO_QUESTION}
          />
        ))}
      </div>
    </Section>
  );
};
