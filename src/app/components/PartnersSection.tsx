import { Section } from '../../components/Section';
import { HeadingHighlight } from '../../components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { SECTION_IDS } from '@/src/constants';
import { COLORS } from '@/src/styles/color';

export const PartnersSection = () => (
  <Section
    id={SECTION_IDS.PARTNERS}
    titleText={TRANSLATIONS.PARTNERS_SECTION_TITLE}
    titleColor={COLORS.explodingStar}
    heading={
      <>
        {TRANSLATIONS.PARTNERS_SECTION_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.explodingStar}>
          {TRANSLATIONS.PARTNERS_SECTION_HEADING_HIGHLIGHT}
        </HeadingHighlight>{' '}
        {TRANSLATIONS.PARTNERS_SECTION_HEADING_AFTER}
      </>
    }
    subheading={TRANSLATIONS.PARTNERS_SECTION_SUBHEADING}
  >
    TBD
  </Section>
);
