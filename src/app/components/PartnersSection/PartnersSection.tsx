import Image from 'next/image';

import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
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

export const PartnersSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      id={SECTION_IDS.PARTNERS}
      titleText={t.PARTNERS_SECTION_TITLE}
      titleColor={COLORS.explodingStar}
      heading={
        <>
          {t.PARTNERS_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.explodingStar}>
            {t.PARTNERS_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>{' '}
          {t.PARTNERS_SECTION_HEADING_AFTER}
        </>
      }
      subheading={t.PARTNERS_SECTION_SUBHEADING}
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

      <PartnersCta
        title={t.PARTNERS_CTA_TITLE}
        description={t.PARTNERS_CTA_DESCRIPTION}
        primaryButtonText={t.PARTNERS_CTA_BUTTON_PRIMARY}
        secondaryButtonText={t.PARTNERS_CTA_BUTTON_SECONDARY}
      />
      <MediumBanner
        title={t.PARTNERS_MEDIUM_TITLE}
        description={t.PARTNERS_MEDIUM_DESCRIPTION}
        buttonText={t.PARTNERS_MEDIUM_BUTTON}
      />
    </Section>
  );
};
