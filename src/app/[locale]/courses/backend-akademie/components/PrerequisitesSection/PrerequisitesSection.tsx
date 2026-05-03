import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { BasicCard } from '@/src/components/BasicCard';
import { COLORS } from '@/src/styles/color';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import style from './PrerequisitesSection.module.scss';

export const PrerequisitesSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.BACKEND_ACADEMY_PREREQUISITES_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
            {t.BACKEND_ACADEMY_PREREQUISITES_HEADING_HIGHLIGHT}
          </HeadingHighlight>
          {t.BACKEND_ACADEMY_PREREQUISITES_HEADING_AFTER}
        </>
      }
      subheading={t.BACKEND_ACADEMY_PREREQUISITES_DESCRIPTION}
    >
      <div className={style.cardsContainer}>
        <BasicCard
          className={style.card}
          iconClassName={style.iconTarget}
          title={t.BACKEND_ACADEMY_PREREQUISITES_JS_TITLE}
          description={t.BACKEND_ACADEMY_PREREQUISITES_JS_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
        />
        <BasicCard
          className={style.card}
          iconClassName={style.iconTarget}
          title={t.BACKEND_ACADEMY_PREREQUISITES_VSCODE_TITLE}
          description={t.BACKEND_ACADEMY_PREREQUISITES_VSCODE_DESCRIPTION}
          iconColor={COLORS.explodingStar}
        />
        <BasicCard
          className={style.card}
          iconClassName={style.iconTarget}
          title={t.BACKEND_ACADEMY_PREREQUISITES_GIT_TITLE}
          description={t.BACKEND_ACADEMY_PREREQUISITES_GIT_DESCRIPTION}
          iconColor={COLORS.paleLavender}
        />
      </div>
    </Section>
  );
};
