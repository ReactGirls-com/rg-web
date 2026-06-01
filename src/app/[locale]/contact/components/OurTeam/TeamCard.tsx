import Image from 'next/image';

import { BorderBox } from '@/src/components/BorderBox';
import { IconButton } from '@/src/components/IconButton';
import linkedinIcon from '@/src/assets/linkedin.svg';
import instagramIcon from '@/src/assets/instagram.svg';
import emailIcon from '@/src/assets/email.svg';
import { COLORS } from '@/src/styles/color';
import {
  getTranslationsWithLocale,
  type Translations,
} from '@/src/utils/getTranslations';
import style from './TeamCard.module.scss';

export type RoleType =
  | 'ceo'
  | 'founder'
  | 'organization'
  | 'education'
  | 'marketing'
  | 'creative';

const TEAM_COLORS: Record<RoleType, string> = {
  ceo: COLORS.aztecAtom,
  founder: COLORS.grapefruitPulp,
  organization: COLORS.explodingStar,
  education: COLORS.grapefruitPulp,
  marketing: COLORS.aztecAtom,
  creative: COLORS.paleLavender,
};

const getRoleName = (role: RoleType, t: Translations) => {
  const roleNames: Record<RoleType, string> = {
    ceo: t.TEAM_MEMBER_ZUZANA_ROLE,
    founder: t.TEAM_MEMBER_TEREZA_ROLE,
    organization: t.TEAM_MEMBER_ORGANIZATION_ROLE,
    education: t.TEAM_MEMBER_EDUCATION_ROLE,
    marketing: t.TEAM_MEMBER_MARKETING_ROLE,
    creative: t.TEAM_MEMBER_CREATIVE_ROLE,
  };

  return roleNames[role];
};

type TeamMemberSocialLinks = {
  linkedin?: string;
  email?: string;
  instagram?: string;
};

type TeamCardProps = {
  name: string;
  roles: RoleType[];
  description: string;
  image: string;
  socialLinks?: TeamMemberSocialLinks;
};

export const TeamCard: React.FC<TeamCardProps> = async ({
  name,
  roles,
  description,
  image,
  socialLinks,
}) => {
  const { t } = await getTranslationsWithLocale();

  const teamColor = TEAM_COLORS[roles[0]];

  return (
    <BorderBox as="article" className={style.card}>
      <div className={style.imageWrapper}>
        <Image
          src={image}
          alt={`${name} - ${roles.map((role) => getRoleName(role, t)).join(', ')}`}
          width={200}
          height={200}
          className={style.image}
        />
      </div>
      <div>
        <h3 className={style.name}>{name}</h3>
        <div className={style.roles}>
          {roles.map((role) => (
            <span
              key={role}
              className={style.role}
              style={
                { '--team-color': TEAM_COLORS[role] } as React.CSSProperties
              }
            >
              {getRoleName(role, t)}
            </span>
          ))}
        </div>
      </div>
      <p className={style.description}>{description}</p>
      {socialLinks &&
        (socialLinks.linkedin ||
          socialLinks.email ||
          socialLinks.instagram) && (
          <nav
            className={style.socialLinks}
            aria-label={`${name} social links`}
          >
            {socialLinks.linkedin && (
              <IconButton
                className={style.icon}
                href={socialLinks.linkedin}
                variant="primary"
                iconColor={COLORS.carbonFiber}
                aria-label={`${name} LinkedIn profile`}
                icon={linkedinIcon.src}
                style={{ '--team-color': teamColor } as React.CSSProperties}
              />
            )}
            {socialLinks.email && (
              <IconButton
                className={style.icon}
                href={`mailto:${socialLinks.email}`}
                variant="primary"
                iconColor={COLORS.carbonFiber}
                aria-label={`${name} email`}
                icon={emailIcon.src}
                style={{ '--team-color': teamColor } as React.CSSProperties}
              />
            )}
            {socialLinks.instagram && (
              <IconButton
                className={style.icon}
                href={socialLinks.instagram}
                variant="primary"
                iconColor={COLORS.carbonFiber}
                aria-label={`${name} Instagram profile`}
                icon={instagramIcon.src}
                style={{ '--team-color': teamColor } as React.CSSProperties}
              />
            )}
          </nav>
        )}
    </BorderBox>
  );
};
