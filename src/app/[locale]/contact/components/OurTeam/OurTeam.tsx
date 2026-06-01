import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import {
  getTranslationsWithLocale,
  type Translations,
} from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';
import { TeamCard, type RoleType } from './TeamCard';
import zuzkaImage from '@/src/assets/profileImages/zuzka.webp';
import eliskaImage from '@/src/assets/profileImages/eliska.webp';
import ondraImage from '@/src/assets/profileImages/ondra.webp';
import helcaImage from '@/src/assets/profileImages/helca.webp';
import adamImage from '@/src/assets/profileImages/adam.webp';
import terkaImage from '@/src/assets/profileImages/terka.webp';
import lukasImage from '@/src/assets/profileImages/lukas.webp';
import honzaImage from '@/src/assets/profileImages/honza.webp';
import evaImage from '@/src/assets/profileImages/eva.webp';
import tonyImage from '@/src/assets/profileImages/tony.webp';
import marketaImage from '@/src/assets/profileImages/marketa.webp';
import jonasImage from '@/src/assets/profileImages/jonas.webp';
import blankaImage from '@/src/assets/profileImages/blanka.webp';
import jakubImage from '@/src/assets/profileImages/jakub.webp';
import filipImage from '@/src/assets/profileImages/filip.webp';
import style from './OurTeam.module.scss';

type TeamMember = {
  name: string;
  role: RoleType[];
  descriptionKey: string;
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
    role: ['ceo'],
    descriptionKey: 'TEAM_MEMBER_ZUZANA_DESCRIPTION',
    image: zuzkaImage.src,
    socialLinks: {
      email: 'zuzka.v@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/zuzana-vlachovska/',
    },
  },
  {
    name: 'Tereza Vaňková',
    role: ['founder'],
    descriptionKey: 'TEAM_MEMBER_TEREZA_DESCRIPTION',
    image: terkaImage.src,
    socialLinks: {
      email: 'terka@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/tereza-vankova/',
    },
  },
  {
    name: 'Eliška Vo',
    role: ['organization', 'education'],
    descriptionKey: 'TEAM_MEMBER_ELISKA_DESCRIPTION',
    image: eliskaImage.src,
    socialLinks: {
      email: 'eliska@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/thi-phuong-vo/',
    },
  },
  {
    name: 'Ondřej Kučera',
    role: ['organization', 'education'],
    descriptionKey: 'TEAM_MEMBER_ONDREJ_DESCRIPTION',
    image: ondraImage.src,
    socialLinks: {
      email: 'ondra@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/ond%C5%99ej-ku%C4%8Dera-9410167/',
    },
  },
  {
    name: 'Markéta Krejčí Snížková',
    role: ['marketing'],
    descriptionKey: 'TEAM_MEMBER_MARKETA_DESCRIPTION',
    image: marketaImage.src,
    socialLinks: {
      email: 'marketa@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/markta-krejci-snizkova/',
    },
  },
  {
    name: 'Lukáš Čížek',
    role: ['organization', 'education'],
    descriptionKey: 'TEAM_MEMBER_LUKAS_DESCRIPTION',
    image: lukasImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/lukascizek/',
    },
  },
  {
    name: 'Adam Jahelka',
    role: ['organization', 'marketing'],
    descriptionKey: 'TEAM_MEMBER_ADAM_DESCRIPTION',
    image: adamImage.src,
    socialLinks: {
      email: 'adam@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/adam-jahelka-a4b01326b/',
    },
  },
  {
    name: 'Eva Čechová',
    role: ['creative', 'education'],
    descriptionKey: 'TEAM_MEMBER_EVA_DESCRIPTION',
    image: evaImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/evacechova/',
    },
  },
  {
    name: 'Helena Beranová',
    role: ['organization', 'education'],
    descriptionKey: 'TEAM_MEMBER_HELENA_DESCRIPTION',
    image: helcaImage.src,
    socialLinks: {
      email: 'helca@reactgirls.com',
      linkedin: 'https://www.linkedin.com/in/helena-beranov%C3%A1-908611226/',
    },
  },
  {
    name: 'Tony Truong',
    role: ['creative', 'education'],
    descriptionKey: 'TEAM_MEMBER_TONY_DESCRIPTION',
    image: tonyImage.src,
    socialLinks: {
      email: 'tonda.truong@seznam.cz',
      instagram: 'https://www.instagram.com/luong.manh.truong',
    },
  },
  {
    name: 'Jonáš Václavek',
    role: ['education'],
    descriptionKey: 'TEAM_MEMBER_JONAS_DESCRIPTION',
    image: jonasImage.src,
    socialLinks: {
      linkedin:
        'https://www.linkedin.com/in/jon%C3%A1%C5%A1-v%C3%A1clavek-82819699/',
    },
  },
  {
    name: 'Blanka Semanová',
    role: ['education'],
    descriptionKey: 'TEAM_MEMBER_BLANKA_DESCRIPTION',
    image: blankaImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/blanka-semanov%C3%A1/',
    },
  },
  {
    name: 'Jakub Fišer',
    role: ['education'],
    descriptionKey: 'TEAM_MEMBER_JAKUB_DESCRIPTION',
    image: jakubImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jficz/',
    },
  },
  {
    name: 'Filip Jirsák',
    role: ['education'],
    descriptionKey: 'TEAM_MEMBER_FILIP_DESCRIPTION',
    image: filipImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/filipjirsak/',
    },
  },
  {
    name: 'Jan Čuma',
    role: ['education'],
    descriptionKey: 'TEAM_MEMBER_JAN_DESCRIPTION',
    image: honzaImage.src,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jan-czuma/',
    },
  },
];

const getDescription = (key: string, t: Translations) =>
  t[key as keyof typeof t] || '';

export const OurTeam: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      id="our-team"
      titleText={t.TEAM_SECTION_TITLE}
      titleColor={COLORS.grapefruitPulp}
      heading={
        <>
          {t.TEAM_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
            {t.TEAM_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>{' '}
          {t.TEAM_SECTION_HEADING_AFTER}
        </>
      }
      subheading={t.TEAM_SECTION_DESCRIPTION}
    >
      <div className={style.teamLeadership}>
        {TEAM_MEMBERS.slice(0, 2).map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            roles={member.role}
            description={getDescription(member.descriptionKey, t)}
            image={member.image}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>

      <div className={style.teamGrid}>
        {TEAM_MEMBERS.slice(2).map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            roles={member.role}
            description={getDescription(member.descriptionKey, t)}
            image={member.image}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </Section>
  );
};
