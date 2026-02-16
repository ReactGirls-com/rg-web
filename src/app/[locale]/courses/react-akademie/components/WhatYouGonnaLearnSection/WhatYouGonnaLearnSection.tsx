import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { BasicCard } from '@/src/components/BasicCard';
import { Checklist } from '@/src/components/Checklist';
import { COLORS } from '@/src/styles/color';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import style from './WhatYouGonnaLearnSection.module.scss';

export const WhatYouGonnaLearnSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.REACT_ACADEMY_LEARN_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.paleLavender}>
            {t.REACT_ACADEMY_LEARN_HEADING_HIGHLIGHT}
          </HeadingHighlight>
          {t.REACT_ACADEMY_LEARN_HEADING_AFTER}
        </>
      }
    >
      <div className={style.cardsGrid}>
        <BasicCard
          iconClassName={style.iconReact}
          title={t.REACT_ACADEMY_LEARN_CARD_1_TITLE}
          description={t.REACT_ACADEMY_LEARN_CARD_1_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
          checklistContent={
            <>
              <p className={style.learnChecklistSubheading}>
                {t.REACT_ACADEMY_LEARN_CHECKLIST_SUBHEADING}
              </p>
              <Checklist
                variant="coral"
                items={[
                  t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_1,
                  t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_2,
                  t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_3,
                  t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_4,
                  t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_5,
                  t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_6,
                ]}
                ariaLabel={t.REACT_ACADEMY_LEARN_CARD_1_TITLE}
              />
            </>
          }
        />
        <BasicCard
          iconClassName={style.iconGit}
          title={t.REACT_ACADEMY_LEARN_CARD_2_TITLE}
          description={t.REACT_ACADEMY_LEARN_CARD_2_DESCRIPTION}
          iconColor={COLORS.grapefruitPulp}
          checklistContent={
            <>
              <p className={style.learnChecklistSubheading}>
                {t.REACT_ACADEMY_LEARN_CHECKLIST_SUBHEADING}
              </p>
              <Checklist
                variant="coral"
                items={[
                  t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_1,
                  t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_2,
                  t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_3,
                  t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_4,
                  t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_5,
                  t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_6,
                ]}
                ariaLabel={t.REACT_ACADEMY_LEARN_CARD_2_TITLE}
              />
            </>
          }
        />
        <BasicCard
          iconClassName={style.iconTypescript}
          title={t.REACT_ACADEMY_LEARN_CARD_3_TITLE}
          description={t.REACT_ACADEMY_LEARN_CARD_3_DESCRIPTION}
          iconColor={COLORS.explodingStar}
          checklistContent={
            <>
              <p className={style.learnChecklistSubheading}>
                {t.REACT_ACADEMY_LEARN_CHECKLIST_SUBHEADING}
              </p>
              <Checklist
                variant="coral"
                items={[
                  t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_1,
                  t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_2,
                  t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_3,
                  t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_4,
                  t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_5,
                  t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_6,
                ]}
                ariaLabel={t.REACT_ACADEMY_LEARN_CARD_3_TITLE}
              />
            </>
          }
        />
      </div>
    </Section>
  );
};
