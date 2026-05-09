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
          {t.BACKEND_ACADEMY_LEARN_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.paleLavender}>
            {t.BACKEND_ACADEMY_LEARN_HEADING_HIGHLIGHT}
          </HeadingHighlight>
          {t.BACKEND_ACADEMY_LEARN_HEADING_AFTER}
        </>
      }
    >
      <div className={style.cardsGrid}>
        <BasicCard
          iconClassName={style.iconSql}
          title={t.BACKEND_ACADEMY_LEARN_CARD_1_TITLE}
          description={t.BACKEND_ACADEMY_LEARN_CARD_1_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
          checklistContent={
            <>
              <p className={style.learnChecklistSubheading}>
                {t.BACKEND_ACADEMY_LEARN_CHECKLIST_SUBHEADING}
              </p>
              <Checklist
                items={[
                  t.BACKEND_ACADEMY_LEARN_CARD_1_CHECKLIST_1,
                  t.BACKEND_ACADEMY_LEARN_CARD_1_CHECKLIST_2,
                  t.BACKEND_ACADEMY_LEARN_CARD_1_CHECKLIST_3,
                  t.BACKEND_ACADEMY_LEARN_CARD_1_CHECKLIST_4,
                  t.BACKEND_ACADEMY_LEARN_CARD_1_CHECKLIST_5,
                ]}
                ariaLabel={t.BACKEND_ACADEMY_LEARN_CARD_1_TITLE}
              />
            </>
          }
        />
        <BasicCard
          iconClassName={style.iconNode}
          title={t.BACKEND_ACADEMY_LEARN_CARD_2_TITLE}
          description={t.BACKEND_ACADEMY_LEARN_CARD_2_DESCRIPTION}
          iconColor={COLORS.explodingStar}
          checklistContent={
            <>
              <p className={style.learnChecklistSubheading}>
                {t.BACKEND_ACADEMY_LEARN_CHECKLIST_SUBHEADING}
              </p>
              <Checklist
                items={[
                  t.BACKEND_ACADEMY_LEARN_CARD_2_CHECKLIST_1,
                  t.BACKEND_ACADEMY_LEARN_CARD_2_CHECKLIST_2,
                  t.BACKEND_ACADEMY_LEARN_CARD_2_CHECKLIST_3,
                  t.BACKEND_ACADEMY_LEARN_CARD_2_CHECKLIST_4,
                  t.BACKEND_ACADEMY_LEARN_CARD_2_CHECKLIST_5,
                ]}
                ariaLabel={t.BACKEND_ACADEMY_LEARN_CARD_2_TITLE}
              />
            </>
          }
        />
      </div>
    </Section>
  );
};
