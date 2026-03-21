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
export const TERMS_PATH = '/terms';
export const PRIVACY_PATH = '/privacy';
export const MEDIUM_LINK = 'https://reactgirls.medium.com/';
export const MENTORING_FORM_LINK = 'https://forms.gle/EdLmU3fv5rpMm4W88';
export const REACT_ACADEMY_REGISTRATION_LINK =
  'https://docs.google.com/forms/d/1Ge7IKDAzykRLro9W68YhHfQepMrP4yrVwwt216gunQA/viewform?edit_requested=true';
export const AI_JAM_REGISTRATION_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdvnq3A3bZmJdyzuRuaYZkn9MIVzgb1UL9mcAyNpCOBN6tqxQ/viewform?usp=publish-editor';

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@ReactGirls';
export const PREREQUISITE_CHECK_URL = 'https://prerequisite-check.netlify.app/';
export const AI_JAM_TOPIC_PROPOSALS_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd2ezAdjLa3JMJ6yNJQ-37HeXRpoEaaan7uDFFrzC59B6tBhQ/viewform?usp=publish-editor';

export const SOCIAL_LINKS = [
  {
    icon: instagramIcon.src,
    label: 'Instagram',
    href: 'https://www.instagram.com/reactgirlsprague/',
    ariaLabel: 'Instagram',
  },
  {
    icon: linkedinIcon.src,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/reactgirlsprague/posts/?feedView=all',
    ariaLabel: 'LinkedIn',
  },
  {
    icon: meetupIcon.src,
    label: 'Meetup',
    href: 'https://www.meetup.com/reactgirls/',
    ariaLabel: 'Meetup',
  },
  {
    icon: mediumIcon.src,
    label: 'Medium',
    href: MEDIUM_LINK,
    ariaLabel: 'Medium',
  },
  {
    icon: facebookIcon.src,
    label: 'Facebook',
    href: 'https://www.facebook.com/ReactGirlsPrague/',
    ariaLabel: 'Facebook',
  },
  {
    icon: slackIcon.src,
    label: 'Slack',
    href: 'https://join.slack.com/t/reactgirls/shared_invite/zt-13s227qut-vopmSvIsVjbIt_GNTHPetA',
    ariaLabel: 'Slack',
  },
  {
    icon: youtubeIcon.src,
    label: 'YouTube',
    href: YOUTUBE_CHANNEL_URL,
    ariaLabel: 'YouTube',
  },
  {
    icon: tiktokIcon.src,
    label: 'TikTok',
    href: 'https://www.tiktok.com/@reactgirls_prague?_r=1&_t=ZN-92CJn2aa8Hu',
    ariaLabel: 'TikTok',
  },
] as const;

export * from './typography';
