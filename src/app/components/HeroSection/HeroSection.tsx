'use client';

import Image from 'next/image';

import { StatsCard } from './StatsCard';
import { TRANSLATIONS } from '@/src/constants/translations';
import { SOCIAL_LINKS } from '@/src/constants';
import { IconButton } from '@/src/components/IconButton';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { COLORS } from '@/src/styles/color';
import { Section } from '@/src/components/Section';
import { BorderBox } from '@/src/components/BorderBox';
import { useTypewriter } from '@/src/hooks/useTypewriter';
import heroImage from '../../../assets/hero-image.png';
import { HeroButtons } from './HeroButtons';
import style from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  const { displayedText } = useTypewriter();

  return (
    <Section className={style.heroSection}>
      <div className={style.content}>
        <div className={style.leftContentWrapper}>
          <div className={style.headingWrapper}>
            <h2 className={style.heading}>
              {TRANSLATIONS.COMMUNITY_SECTION_HEADING_BEFORE}{' '}
              <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
                <span className={style.typewriterText}>
                  {displayedText}
                  <span className={style.cursor} aria-hidden="true" />
                </span>
              </HeadingHighlight>{' '}
              <div>{TRANSLATIONS.COMMUNITY_SECTION_HEADING_AFTER}</div>
            </h2>
            <p className={style.paragraph}>
              {TRANSLATIONS.COMMUNITY_SECTION_PARAGRAPH}
            </p>
          </div>

          <div className={style.buttonsStatsWrapper}>
            <HeroButtons />

            <div className={style.statsCardList}>
              <StatsCard
                value={500}
                valueSuffix="+"
                label={TRANSLATIONS.COMMUNITY_SECTION_STATS_SUPPORTED_LABEL}
                underLabel={
                  TRANSLATIONS.COMMUNITY_SECTION_STATS_SUPPORTED_UNDER_LABEL
                }
                colorClassName={style.grapefruitPulp}
                shouldAnimate
              />
              <StatsCard
                value={80}
                valueSuffix="+"
                label={TRANSLATIONS.COMMUNITY_SECTION_STATS_JOINED_LABEL}
                underLabel={
                  TRANSLATIONS.COMMUNITY_SECTION_STATS_JOINED_UNDER_LABEL
                }
                colorClassName={style.aztecAtom}
                shouldAnimate
              />
              <StatsCard
                value={60}
                valueSuffix="+"
                label={TRANSLATIONS.COMMUNITY_SECTION_STATS_EVENTS_LABEL}
                underLabel={
                  TRANSLATIONS.COMMUNITY_SECTION_STATS_EVENTS_UNDER_LABEL
                }
                colorClassName={style.explodingStar}
                shouldAnimate
              />
            </div>
          </div>
        </div>

        <div className={style.rightContentWrapper}>
          <BorderBox className={style.imageWrapper}>
            <Image
              src={heroImage}
              alt=""
              className={style.image}
              fill
              sizes="(max-width: 768px) 100vw, 50vw, (min-width: 769px) 50vw; 100vw"
              priority
            />
          </BorderBox>
        </div>
      </div>

      <div className={style.socialSection}>
        <nav
          className={style.socialLinks}
          aria-label={TRANSLATIONS.ARIA_SOCIAL_MEDIA_LINKS}
        >
          {SOCIAL_LINKS.map(({ label, icon, href, ariaLabel }) => (
            <IconButton
              key={label}
              href={href}
              variant="primary"
              backgroundColor={COLORS.crystalCut}
              aria-label={ariaLabel}
              icon={icon}
            />
          ))}
        </nav>
      </div>
    </Section>
  );
};
