import Image from 'next/image';

import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { SECTION_IDS } from '@/src/constants';
import { COLORS } from '@/src/styles/color';
import { PartnersCta } from './PartnersCta';
import { MediumBanner } from './MediumBanner';
import ackeeLogo from '@/src/assets/partners/ackee.png';
import signageOsLogo from '@/src/assets/partners/signage-os.png';
import mewsLogo from '@/src/assets/partners/mews.png';
import accoladeLogo from '@/src/assets/partners/accolade.png';
import eduPunksLogo from '@/src/assets/partners/edu-punks.png';
import style from './PartnersSection.module.scss';

const PARTNERS = [
  { name: 'Ackee', logo: ackeeLogo },
  { name: 'signageOS', logo: signageOsLogo },
  { name: 'MEWS', logo: mewsLogo },
  { name: 'Accolade', logo: accoladeLogo },
  { name: 'EDU PUNKS', logo: eduPunksLogo },
];

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
    <div className={style.partnersLogos}>
      {PARTNERS.map((partner) => (
        <div key={partner.name} className={style.partnerLogo}>
          <Image
            src={partner.logo}
            alt={partner.name}
            className={style.partnerLogoImage}
            width={150}
            height={100}
          />
        </div>
      ))}
    </div>

    <PartnersCta />
    <MediumBanner />
  </Section>
);
