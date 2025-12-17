import Image from 'next/image';

import { BorderBox } from '@/src/components/BorderBox';
import { IconButton } from '@/src/components/IconButton';
import linkedinIcon from '@/src/assets/linkedin.svg';
import instagramIcon from '@/src/assets/instagram.svg';
import emailIcon from '@/src/assets/email.svg';
import style from './TeamCard.module.scss';

type TeamMemberSocialLinks = {
  linkedin?: string;
  email?: string;
  instagram?: string;
};

type TeamCardProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks?: TeamMemberSocialLinks;
  teamColor?: string;
};

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  image,
  socialLinks,
  teamColor,
}) => (
  <BorderBox as="article" className={style.card}>
    <div className={style.imageWrapper}>
      <Image
        src={image}
        alt={`${name} - ${role}`}
        width={200}
        height={200}
        className={style.image}
      />
    </div>
    <div>
      <h3 className={style.name}>{name}</h3>
      <p
        className={style.role}
        style={{ '--team-color': teamColor } as React.CSSProperties}
      >
        {role}
      </p>
    </div>
    <p className={style.description}>{description}</p>
    {socialLinks &&
      (socialLinks.linkedin || socialLinks.email || socialLinks.instagram) && (
        <nav className={style.socialLinks} aria-label={`${name} social links`}>
          {socialLinks.linkedin && (
            <IconButton
              className={style.icon}
              href={socialLinks.linkedin}
              variant="primary"
              iconColor={teamColor}
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
              iconColor={teamColor}
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
              iconColor={teamColor}
              aria-label={`${name} Instagram profile`}
              icon={instagramIcon.src}
              style={{ '--team-color': teamColor } as React.CSSProperties}
            />
          )}
        </nav>
      )}
  </BorderBox>
);
