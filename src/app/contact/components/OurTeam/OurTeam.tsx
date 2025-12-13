import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { TeamCard } from './TeamCard';
import zuzkaImage from '@/src/assets/profileImages/zuzka-avatar.jpg';
import marketaImage from '@/src/assets/profileImages/marketa-avatar.jpg';
import eliskaImage from '@/src/assets/profileImages/eliska-avatar.jpg';
import ondraImage from '@/src/assets/profileImages/ondra-avatar.jpg';
import helcaImage from '@/src/assets/profileImages/helca-avatar.jpg';
import adamImage from '@/src/assets/profileImages/adam-avatar.jpg';
import style from './OurTeam.module.scss';

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    email?: string;
    instagram?: string;
  };
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Zuzana Vlachovská',
    role: TRANSLATIONS.TEAM_MEMBER_ZUZANA_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_ZUZANA_DESCRIPTION,
    image: zuzkaImage.src,
    socialLinks: {
      email: 'zuzka.v@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/zuzana-vlachovska/',
    },
  },
  {
    name: 'Tereza Vaňková',
    role: TRANSLATIONS.TEAM_MEMBER_TEREZA_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_TEREZA_DESCRIPTION,
    image: eliskaImage.src,
    socialLinks: {
      email: 'terka@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/tereza-vankova/',
    },
  },
  {
    name: 'Eliška Vo',
    role: TRANSLATIONS.TEAM_MEMBER_ORGANIZATION_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_ELISKA_DESCRIPTION,
    image: eliskaImage.src,
    socialLinks: {
      email: 'eliska@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/thi-phuong-vo/',
    },
  },
  {
    name: 'Ondřej Kučera',
    role: TRANSLATIONS.TEAM_MEMBER_EDUCATION_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_ONDREJ_DESCRIPTION,
    image: ondraImage.src,
    socialLinks: {
      email: 'ondra@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/ond%C5%99ej-ku%C4%8Dera-9410167/',
    },
  },
  {
    name: 'Markéta Krejčí Snížková',
    role: TRANSLATIONS.TEAM_MEMBER_MARKETING_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_MARKETA_DESCRIPTION,
    image: marketaImage.src,
    socialLinks: {
      email: 'marketa@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/markta-krejci-snizkova/',
    },
  },
  {
    name: 'Lukáš Čížek',
    role: TRANSLATIONS.TEAM_MEMBER_EDUCATION_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_LUKAS_DESCRIPTION,
    image: eliskaImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/lukascizek/',
    },
  },
  {
    name: 'Adam Jahelka',
    role: TRANSLATIONS.TEAM_MEMBER_MARKETING_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_ADAM_DESCRIPTION,
    image: adamImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/adam-jahelka-a4b01326b/',
    },
  },
  {
    name: 'Eva Čechová',
    role: TRANSLATIONS.TEAM_MEMBER_CREATIVE_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_EVA_DESCRIPTION,
    image: eliskaImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/evacechova/',
    },
  },
  {
    name: 'Helena Beranová',
    role: TRANSLATIONS.TEAM_MEMBER_ORGANIZATION_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_HELENA_DESCRIPTION,
    image: helcaImage.src,
    socialLinks: {
      email: 'helca@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/helena-beranov%C3%A1-908611226/',
    },
  },
  {
    name: 'Tony Truong',
    role: TRANSLATIONS.TEAM_MEMBER_CREATIVE_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_TONY_DESCRIPTION,
    image: eliskaImage.src,
    socialLinks: {
      email: 'tonda.truong@seznam.cz',
      instagram: 'https://www.instagram.com/luong.manh.truong',
    },
  },
  {
    name: 'Jan Čuma',
    role: TRANSLATIONS.TEAM_MEMBER_EDUCATION_ROLE,
    description: TRANSLATIONS.TEAM_MEMBER_JAN_DESCRIPTION,
    image: eliskaImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jan-czuma/',
    },
  },
];

const TEAM_COLORS = {
  [TRANSLATIONS.TEAM_MEMBER_ORGANIZATION_ROLE]: COLORS.explodingStar,
  [TRANSLATIONS.TEAM_MEMBER_EDUCATION_ROLE]: COLORS.grapefruitPulp,
  [TRANSLATIONS.TEAM_MEMBER_MARKETING_ROLE]: COLORS.aztecAtom,
  [TRANSLATIONS.TEAM_MEMBER_CREATIVE_ROLE]: COLORS.paleLavender,
  [TRANSLATIONS.TEAM_MEMBER_ZUZANA_ROLE]: COLORS.aztecAtom,
  [TRANSLATIONS.TEAM_MEMBER_TEREZA_ROLE]: COLORS.grapefruitPulp,
};

export const OurTeam = () => (
  <Section
    id="our-team"
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
    <div className={style.teamLeadership}>
      {TEAM_MEMBERS.slice(0, 2).map((member) => (
        <TeamCard
          key={member.name}
          name={member.name}
          role={member.role}
          description={member.description}
          image={member.image}
          socialLinks={member.socialLinks}
          teamColor={TEAM_COLORS[member.role]}
        />
      ))}
    </div>

    <div className={style.teamGrid}>
      {TEAM_MEMBERS.slice(2).map((member) => (
        <TeamCard
          key={member.name}
          name={member.name}
          role={member.role}
          description={member.description}
          image={member.image}
          socialLinks={member.socialLinks}
          teamColor={TEAM_COLORS[member.role]}
        />
      ))}
    </div>
  </Section>
);
