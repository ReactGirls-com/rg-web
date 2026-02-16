import clsx from 'clsx';

import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { BorderBox } from '@/src/components/BorderBox';
import { Checklist } from '@/src/components/Checklist';
import { COLORS } from '@/src/styles/color';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { Button } from '@/src/components/Button';
import { CtaBanner } from '@/src/components/CtaBanner';
import { PREREQUISITE_CHECK_URL } from '@/src/constants';
import style from './PrerequisitesSection.module.scss';

export const PrerequisitesSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.REACT_ACADEMY_PREREQUISITES_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
            {t.REACT_ACADEMY_PREREQUISITES_HEADING_HIGHLIGHT}
          </HeadingHighlight>
        </>
      }
      subheading={t.REACT_ACADEMY_PREREQUISITES_DESCRIPTION}
    >
      <div className={style.prerequisitesGrid}>
        <BorderBox as="article" className={style.card}>
          <h3 className={style.cardTitle}>
            {t.REACT_ACADEMY_PREREQUISITES_HTML_TITLE}
          </h3>
          <Checklist
            items={[
              t.REACT_ACADEMY_PREREQUISITES_HTML_CHECKLIST_1,
              t.REACT_ACADEMY_PREREQUISITES_HTML_CHECKLIST_2,
              t.REACT_ACADEMY_PREREQUISITES_HTML_CHECKLIST_3,
              t.REACT_ACADEMY_PREREQUISITES_HTML_CHECKLIST_4,
              t.REACT_ACADEMY_PREREQUISITES_HTML_CHECKLIST_5,
            ]}
            ariaLabel={t.REACT_ACADEMY_PREREQUISITES_HTML_TITLE}
          />
        </BorderBox>
        <BorderBox as="article" className={style.card}>
          <h3 className={style.cardTitle}>
            {t.REACT_ACADEMY_PREREQUISITES_CSS_TITLE}
          </h3>
          <Checklist
            items={[
              t.REACT_ACADEMY_PREREQUISITES_CSS_CHECKLIST_1,
              t.REACT_ACADEMY_PREREQUISITES_CSS_CHECKLIST_2,
              t.REACT_ACADEMY_PREREQUISITES_CSS_CHECKLIST_3,
              t.REACT_ACADEMY_PREREQUISITES_CSS_CHECKLIST_4,
            ]}
            ariaLabel={t.REACT_ACADEMY_PREREQUISITES_CSS_TITLE}
          />
        </BorderBox>
        <BorderBox as="article" className={clsx(style.card, style.cardJs)}>
          <h3 className={style.cardTitle}>
            {t.REACT_ACADEMY_PREREQUISITES_JS_TITLE}
          </h3>
          <Checklist
            items={[
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_1,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_2,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_3,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_4,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_5,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_6,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_7,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_8,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_9,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_10,
              t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_11,
            ]}
            ariaLabel={t.REACT_ACADEMY_PREREQUISITES_JS_TITLE}
          />
        </BorderBox>
      </div>

      <CtaBanner
        title={t.REACT_ACADEMY_TEST_CTA_TITLE}
        description={t.REACT_ACADEMY_TEST_CTA_DESCRIPTION}
        className={style.testCtaBanner}
      >
        <Button variant="explodingStar" href={PREREQUISITE_CHECK_URL}>
          {t.REACT_ACADEMY_TEST_CTA_BUTTON}
        </Button>
      </CtaBanner>
    </Section>
  );
};
