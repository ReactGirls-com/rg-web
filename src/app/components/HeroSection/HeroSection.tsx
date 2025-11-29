'use client';

import { StatsCard } from './StatsCard';
import { TRANSLATIONS } from '@/src/constants/translations';
import { Button } from '@/src/components/Button';
import { IconButton } from '@/src/components/IconButton';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver';
import { COLORS } from '@/src/styles/color';
import { Section } from '@/src/components/Section';
import { Row } from '@/src/components/Row';
import style from './HeroSection.module.scss';

import { BorderBox } from '@/src/components/BorderBox';

export const HeroSection: React.FC = () => {
  const { elementRef: sectionRef, isIntersecting: startAnimation } =
    useIntersectionObserver({ threshold: 0.3 });

  return (
    <div>
      <Section ref={sectionRef}>
        <div className={style.content}>
          <div>
            <div className={style.headingWrapper}>
              <h2 className={style.heading}>
                {TRANSLATIONS.COMMUNITY_SECTION_HEADING_BEFORE}{' '}
                <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
                  {TRANSLATIONS.COMMUNITY_SECTION_HEADING_HIGHLIGHT}
                </HeadingHighlight>{' '}
                {TRANSLATIONS.COMMUNITY_SECTION_HEADING_AFTER}
              </h2>
              <p className={style.paragraph}>
                {TRANSLATIONS.COMMUNITY_SECTION_PARAGRAPH}
              </p>
            </div>

            <div className={style.buttonsStatsWrapper}>
              <Row flexWrap gap="16px">
                <Button variant="aztecAtom">
                  {TRANSLATIONS.COMMUNITY_SECTION_BUTTON_JOIN}
                </Button>
                <Button variant="explodingStar">
                  {TRANSLATIONS.COMMUNITY_SECTION_BUTTON_SUPPORT}
                </Button>
              </Row>

              <div className={style.statsCardList}>
                <StatsCard
                  value={500}
                  valueSuffix="+"
                  label={TRANSLATIONS.COMMUNITY_SECTION_STATS_SUPPORTED_LABEL}
                  colorClassName={style.grapefruitPulp}
                  startAnimation={startAnimation}
                  shouldAnimate
                />
                <StatsCard
                  value={80}
                  valueSuffix="+"
                  label={TRANSLATIONS.COMMUNITY_SECTION_STATS_JOINED_LABEL}
                  colorClassName={style.aztecAtom}
                  startAnimation={startAnimation}
                  shouldAnimate
                />
                <StatsCard
                  value={60}
                  valueSuffix="+"
                  label={TRANSLATIONS.COMMUNITY_SECTION_STATS_EVENTS_LABEL}
                  colorClassName={style.explodingStar}
                  startAnimation={startAnimation}
                  shouldAnimate
                />
              </div>
            </div>
          </div>

          <BorderBox className={style.imageWrapper}>
            <img src="/images/hero-section.png" alt="" />
          </BorderBox>
        </div>
      </Section>

      <div className={style.socialSection}>
        <nav className={style.socialLinks} aria-label="Social media links">
          <IconButton
            backgroundColor={COLORS.crystalCut}
            className={style.socialButton}
            aria-label={TRANSLATIONS.SOCIAL_INSTAGRAM_LABEL}
          >
            <span className={style.socialIconInstagram} aria-hidden="true" />
          </IconButton>
          <IconButton
            backgroundColor={COLORS.crystalCut}
            className={style.socialButton}
            aria-label={TRANSLATIONS.SOCIAL_LINKEDIN_LABEL}
          >
            <span className={style.socialIconLinkedin} aria-hidden="true" />
          </IconButton>
          <IconButton
            backgroundColor={COLORS.crystalCut}
            className={style.socialButton}
            aria-label={TRANSLATIONS.SOCIAL_CALENDAR_LABEL}
          >
            <span className={style.socialIconCalendar} aria-hidden="true" />
          </IconButton>
          <IconButton
            backgroundColor={COLORS.crystalCut}
            className={style.socialButton}
            aria-label={TRANSLATIONS.SOCIAL_MEDIUM_LABEL}
          >
            <span className={style.socialIconMedium} aria-hidden="true" />
          </IconButton>
        </nav>
      </div>
    </div>
  );
};
