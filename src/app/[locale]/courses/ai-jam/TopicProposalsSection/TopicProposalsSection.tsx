import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { BasicCard } from '@/src/components/BasicCard';
import { COLORS } from '@/src/styles/color';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { AI_JAM_TOPIC_PROPOSALS_URL } from '@/src/constants';
import style from './TopicProposalsSection.module.scss';

export const TopicProposalsSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <>
      <div className={style.topicHeader}>
        <h2 className={style.topicHeading}>
          {t.AI_JAM_TOPIC_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.aztecAtom}>
            {t.AI_JAM_TOPIC_SECTION_HEADING_HIGHLIGHT_FIRST}
          </HeadingHighlight>{' '}
          {t.AI_JAM_TOPIC_SECTION_HEADING_MIDDLE}{' '}
          <HeadingHighlight highlightColor={COLORS.aztecAtom}>
            {t.AI_JAM_TOPIC_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>
          {t.AI_JAM_TOPIC_SECTION_HEADING_AFTER}
        </h2>
      </div>

      <div className={style.cardsContainer}>
        <BasicCard
          className={style.card}
          iconClassName={style.iconAgent}
          title={t.AI_JAM_TOPIC_CARD_AGENT_TITLE}
          description={t.AI_JAM_TOPIC_CARD_AGENT_DESCRIPTION}
          iconColor={COLORS.explodingStar}
        />
        <BasicCard
          className={style.card}
          iconClassName={style.iconDesign}
          title={t.AI_JAM_TOPIC_CARD_DESIGN_TITLE}
          description={t.AI_JAM_TOPIC_CARD_DESIGN_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
        />
        <BasicCard
          className={style.card}
          iconClassName={style.iconWorkflow}
          title={t.AI_JAM_TOPIC_CARD_WORKFLOW_TITLE}
          description={t.AI_JAM_TOPIC_CARD_WORKFLOW_DESCRIPTION}
          iconColor={COLORS.grapefruitPulp}
        />
      </div>

      <CtaBanner
        title={t.AI_JAM_TOPIC_PROPOSALS_TITLE}
        description={t.AI_JAM_TOPIC_PROPOSALS_DESCRIPTION}
        className={style.ctaBanner}
      >
        <Button variant="explodingStar" href={AI_JAM_TOPIC_PROPOSALS_URL}>
          {t.AI_JAM_TOPIC_PROPOSALS_BUTTON}
        </Button>
      </CtaBanner>
    </>
  );
};
