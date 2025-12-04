import { SecondaryHero } from '@/src/components/SecondaryHero';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { OurTeam } from './components/OurTeam';

const ContactPage = () => (
  <>
    <SecondaryHero
      titleText={TRANSLATIONS.CONTACT_SECTION_TITLE}
      titleColor={COLORS.aztecAtom}
      headingBefore={TRANSLATIONS.CONTACT_HERO_HEADING_BEFORE}
      headingHighlight={TRANSLATIONS.CONTACT_HERO_HEADING_HIGHLIGHT}
      subheading={TRANSLATIONS.CONTACT_HERO_SUBHEADING}
    />
    <OurTeam />
  </>
);

export default ContactPage;
