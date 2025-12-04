import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';

export const OurTeam = () => (
  <Section
    titleText={TRANSLATIONS.TEAM_SECTION_TITLE}
    titleColor={COLORS.grapefruitPulp}
    heading={
      <>
        {TRANSLATIONS.TEAM_SECTION_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
          {TRANSLATIONS.TEAM_SECTION_HEADING_HIGHLIGHT}
        </HeadingHighlight>{' '}
        {TRANSLATIONS.TEAM_SECTION_HEADING_AFTER}
      </>
    }
    subheading={TRANSLATIONS.TEAM_SECTION_DESCRIPTION}
  >
    TBD
  </Section>
);
