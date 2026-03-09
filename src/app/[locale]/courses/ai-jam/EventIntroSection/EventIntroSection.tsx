import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { Button } from '@/src/components/Button';
import { COLORS } from '@/src/styles/color';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { AI_JAM_REGISTRATION_LINK } from '@/src/constants';
import style from './EventIntroSection.module.scss';

export const EventIntroSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section>
      <div className={style.wrapper}>
        <span className={style.statusBadge} aria-label={t.AI_JAM_EVENT_STATUS}>
          {t.AI_JAM_EVENT_STATUS}
        </span>
        <h2 className={style.heading}>
          {t.AI_JAM_EVENT_TITLE_BEFORE}
          <HeadingHighlight highlightColor={COLORS.paleLavender}>
            {t.AI_JAM_EVENT_TITLE_HIGHLIGHT}
          </HeadingHighlight>
          {t.AI_JAM_EVENT_TITLE_AFTER}
        </h2>
        <p className={style.description}>{t.AI_JAM_EVENT_DESCRIPTION}</p>
        <div className={style.actions}>
          <div className={style.dateBlock} aria-hidden="true">
            <span className={style.calendarIcon} aria-hidden="true" />
            <span>{t.AI_JAM_EVENT_DATE}</span>
          </div>
          <Button
            variant="grapefruitPulp"
            href={AI_JAM_REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.AI_JAM_EVENT_REGISTER_BUTTON}
          >
            {t.AI_JAM_EVENT_REGISTER_BUTTON}
          </Button>
        </div>
      </div>
    </Section>
  );
};
