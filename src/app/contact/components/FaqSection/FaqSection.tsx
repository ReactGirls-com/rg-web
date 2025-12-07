import { Section } from '@/src/components/Section';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { FaqItem } from './FaqItem';
import style from './FaqSection.module.scss';

const FAQ_ITEMS = [
  {
    question: TRANSLATIONS.FAQ_QUESTION_1,
    answer: TRANSLATIONS.FAQ_ANSWER_1,
    color: COLORS.grapefruitPulp,
  },
  {
    question: TRANSLATIONS.FAQ_QUESTION_2,
    answer: TRANSLATIONS.FAQ_ANSWER_2,
    color: COLORS.aztecAtom,
  },
  {
    question: TRANSLATIONS.FAQ_QUESTION_3,
    answer: TRANSLATIONS.FAQ_ANSWER_3,
    color: COLORS.paleLavender,
  },
  {
    question: TRANSLATIONS.FAQ_QUESTION_4,
    answer: TRANSLATIONS.FAQ_ANSWER_4,
    color: COLORS.explodingStar,
  },
  {
    question: TRANSLATIONS.FAQ_QUESTION_5,
    answer: TRANSLATIONS.FAQ_ANSWER_5,
    color: COLORS.grapefruitPulp,
  },
  {
    question: TRANSLATIONS.FAQ_QUESTION_6,
    answer: TRANSLATIONS.FAQ_ANSWER_6,
    color: COLORS.aztecAtom,
  },
];

export const FaqSection = () => (
  <Section
    titleText={TRANSLATIONS.FAQ_SECTION_TITLE}
    titleColor={COLORS.carbonFiber}
  >
    <div className={style.faqContainer}>
      {FAQ_ITEMS.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          questionColor={item.color}
        />
      ))}
    </div>
  </Section>
);
