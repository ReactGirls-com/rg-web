import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { IconButton } from '@/src/components/IconButton';
import { TRANSLATIONS } from '@/src/constants/translations';
import { SOCIAL_LINKS } from '@/src/constants';
import { COLORS } from '@/src/styles/color';
import { InfoBox } from './InfoBox';
import style from './ContactInfoSection.module.scss';

export const ContactInfoSection = () => (
  <Section
    heading={
      <>
        {TRANSLATIONS.CONTACT_INFO_SECTION_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.aztecAtom}>
          {TRANSLATIONS.CONTACT_INFO_SECTION_HEADING_HIGHLIGHT}
        </HeadingHighlight>
      </>
    }
    subheading={TRANSLATIONS.CONTACT_INFO_SECTION_SUBHEADING}
  >
    <div className={style.boxesContainer}>
      <InfoBox
        title={TRANSLATIONS.CONTACT_INFO_EMAIL_TITLE}
        iconClassName={style.iconEmail}
        iconColor={COLORS.grapefruitPulp}
      >
        <a
          href="mailto:reactgirlsprague@gmail.com"
          className={style.emailLink}
          aria-label={`${TRANSLATIONS.CONTACT_INFO_EMAIL_LABEL} reactgirlsprague@gmail.com`}
        >
          reactgirlsprague@gmail.com
        </a>
      </InfoBox>

      <InfoBox
        title={TRANSLATIONS.CONTACT_INFO_ORGANIZATION_TITLE}
        iconClassName={style.iconCorporate}
        iconColor={COLORS.paleLavender}
      >
        <dl className={style.infoList}>
          <div className={style.infoRow}>
            <dt>{TRANSLATIONS.CONTACT_INFO_ORGANIZATION_NAME_LABEL}</dt>
            <dd>ReactGirls z. s.</dd>
          </div>
          <div className={style.infoRow}>
            <dt>{TRANSLATIONS.CONTACT_INFO_ORGANIZATION_ID_LABEL}</dt>
            <dd>08892911</dd>
          </div>
          <div className={style.infoRow}>
            <dt>{TRANSLATIONS.CONTACT_INFO_ORGANIZATION_ADDRESS_LABEL}</dt>
            <dd>V jehličí 2106/2, Krč, 142 00 Praha 4</dd>
          </div>
        </dl>
      </InfoBox>

      <InfoBox
        title={TRANSLATIONS.CONTACT_INFO_BANK_TITLE}
        iconClassName={style.iconCard}
        iconColor={COLORS.aztecAtom}
      >
        <dl className={style.infoList}>
          <div className={style.infoRow}>
            <dt>{TRANSLATIONS.CONTACT_INFO_BANK_NAME_LABEL}</dt>
            <dd>Fio banka, a.s.</dd>
          </div>
          <div className={style.infoRow}>
            <dt>{TRANSLATIONS.CONTACT_INFO_BANK_ACCOUNT_LABEL}</dt>
            <dd>2201872429/2010</dd>
          </div>
          <div className={style.infoRow}>
            <dt>{TRANSLATIONS.CONTACT_INFO_BANK_IBAN_LABEL}</dt>
            <dd>CZ4120100000002201872429</dd>
          </div>
          <div className={style.infoRow}>
            <dt>{TRANSLATIONS.CONTACT_INFO_BANK_SWIFT_LABEL}</dt>
            <dd>FIOBCZPPXXX</dd>
          </div>
        </dl>
      </InfoBox>

      <InfoBox
        title={TRANSLATIONS.CONTACT_INFO_SOCIAL_TITLE}
        iconClassName={style.iconChat}
        iconColor={COLORS.explodingStar}
      >
        <nav
          className={style.socialLinks}
          aria-label={TRANSLATIONS.CONTACT_INFO_SOCIAL_LINKS_LABEL}
        >
          {SOCIAL_LINKS.map(({ label, icon, href, ariaLabel }) => (
            <IconButton
              key={label}
              href={href}
              aria-label={ariaLabel}
              icon={icon}
              iconClassName={style.socialIcon}
            />
          ))}
        </nav>
      </InfoBox>
    </div>
  </Section>
);
