import { SecondaryHero } from '@/src/components/SecondaryHero';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { OurTeam } from './components/OurTeam';
import { ContactCtaSection } from './components/ContactCtaSection';
import { FaqSection } from './components/FaqSection';

const ContactPage = () => (
  <>
    <SecondaryHero
      titleColor={COLORS.aztecAtom}
      headingBefore={TRANSLATIONS.CONTACT_HERO_HEADING_BEFORE}
      headingHighlight={TRANSLATIONS.CONTACT_HERO_HEADING_HIGHLIGHT}
      subheading={TRANSLATIONS.CONTACT_HERO_SUBHEADING}
    />
    <OurTeam />
    <FaqSection />
    <ContactCtaSection />
  </>
);

export default ContactPage;
