import { TRANSLATIONS } from './translations';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mediumIcon from '../assets/medium.svg';
import facebookIcon from '../assets/facebook.svg';
import meetupIcon from '../assets/meeetup.svg';

export const NAV_LINKS = [
  {
    label: TRANSLATIONS.COURSES_LINK_TEXT,
    href: '/courses',
  },
  {
    label: TRANSLATIONS.MENTORING_LINK_TEXT,
    href: '/mentoring',
  },
  {
    label: TRANSLATIONS.MEETUPS_LINK_TEXT,
    href: '/meetups',
  },
  {
    label: TRANSLATIONS.CONTACT_LINK_TEXT,
    href: '/contact',
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
    href: 'https://www.meetup.com/reactgirls-prague/',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Meetup`,
  },
  {
    icon: mediumIcon.src,
    label: 'Medium',
    href: 'https://medium.com/@reactgirlsprague',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Medium`,
  },
  {
    icon: facebookIcon.src,
    label: 'Facebook',
    href: 'https://www.facebook.com/ReactGirlsPrague/',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Facebook`,
  },
  {
    icon: mediumIcon.src,
    label: 'Slack',
    href: 'https://join.slack.com/t/reactgirls/shared_invite/zt-13s227qut-vopmSvIsVjbIt_GNTHPetA',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} Slack`,
  },
  {
    icon: mediumIcon.src,
    label: 'YouTube',
    href: 'https://www.youtube.com/@reactgirlsprague',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} YouTube`,
  },
  {
    icon: mediumIcon.src,
    label: 'TikTok',
    href: 'https://www.tiktok.com/@reactgirlsprague',
    ariaLabel: `${TRANSLATIONS.SOCIAL_ARIA_LABEL} TikTok`,
  },
] as const;
