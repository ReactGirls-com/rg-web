import { TRANSLATIONS } from './translations';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mediumIcon from '../assets/medium.svg';
import facebookIcon from '../assets/facebook.svg';
import meetupIcon from '../assets/meeetup.svg';
import slackIcon from '../assets/slack.svg';
import youtubeIcon from '../assets/youtube.svg';
import tiktokIcon from '../assets/tiktok.svg';

export const SECTION_IDS = {
  OUR_ACTIVITIES: 'our-activities',
  PARTNERS: 'partners',
};

export const COURSES_LINK = '/courses';
export const MENTORING_LINK = '/mentoring';
export const MEETUPS_LINK = '/meetups';
export const CONTACT_LINK = '/contact';
export const MEDIUM_LINK = 'https://reactgirls.medium.com/';
export const MENTORING_FORM_LINK = 'https://forms.gle/EdLmU3fv5rpMm4W88';

export const NAV_LINKS = [
  {
    label: TRANSLATIONS.COURSES_LINK_TEXT,
    href: COURSES_LINK,
  },
  {
    label: TRANSLATIONS.MENTORING_LINK_TEXT,
    href: MENTORING_LINK,
  },
  {
    label: TRANSLATIONS.MEETUPS_LINK_TEXT,
    href: MEETUPS_LINK,
  },
  {
    label: TRANSLATIONS.CONTACT_LINK_TEXT,
    href: CONTACT_LINK,
  },
];

export const SOCIAL_LINKS = [
  {
    icon: instagramIcon.src,
    label: 'Instagram',
    href: 'https://www.instagram.com/reactgirlsprague/',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Instagram`,
  },
  {
    icon: linkedinIcon.src,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/reactgirlsprague/posts/?feedView=all',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} LinkedIn`,
  },
  {
    icon: meetupIcon.src,
    label: 'Meetup',
    href: 'https://www.meetup.com/reactgirls/',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Meetup`,
  },
  {
    icon: mediumIcon.src,
    label: 'Medium',
    href: MEDIUM_LINK,
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Medium`,
  },
  {
    icon: facebookIcon.src,
    label: 'Facebook',
    href: 'https://www.facebook.com/ReactGirlsPrague/',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Facebook`,
  },
  {
    icon: slackIcon.src,
    label: 'Slack',
    href: 'https://join.slack.com/t/reactgirls/shared_invite/zt-13s227qut-vopmSvIsVjbIt_GNTHPetA',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Slack`,
  },
  {
    icon: youtubeIcon.src,
    label: 'YouTube',
    href: 'https://www.youtube.com/@ReactGirls',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} YouTube`,
  },
  {
    icon: tiktokIcon.src,
    label: 'TikTok',
    href: 'https://www.tiktok.com/@reactgirls_prague?_r=1&_t=ZN-92CJn2aa8Hu',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} TikTok`,
  },
] as const;
