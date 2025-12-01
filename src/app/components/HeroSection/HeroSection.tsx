'use client';

import Image from 'next/image';

import { StatsCard } from './StatsCard';
import { TRANSLATIONS } from '@/src/constants/translations';
import { SOCIAL_LINKS } from '@/src/constants';
import { Button } from '@/src/components/Button';
import { IconButton } from '@/src/components/IconButton';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver';
import { COLORS } from '@/src/styles/color';
import { Section } from '@/src/components/Section';
import { Row } from '@/src/components/Row';
import { BorderBox } from '@/src/components/BorderBox';
import heroImage from '../../../assets/hero-image.png';
import style from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  const { elementRef: sectionRef, isIntersecting: startAnimation } =
    useIntersectionObserver({ threshold: 0.3 });

  return (
    <Section ref={sectionRef} className={style.heroSection}>
      <div className={style.content}>
        <div className={style.leftContentWrapper}>
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
              {/* TODO: Scroll to "Nase Aktivity", we should use scroll to anchor */}
              <Button variant="aztecAtom">
                {TRANSLATIONS.COMMUNITY_SECTION_BUTTON_JOIN}
              </Button>
              {/* TODO: Scroll to "Nasi partneri", we should use scroll to anchor */}
              <Button variant="explodingStar">
                {TRANSLATIONS.COMMUNITY_SECTION_BUTTON_SUPPORT}
              </Button>
            </Row>

            <div className={style.statsCardList}>
              <StatsCard
                value={500}
                valueSuffix="+"
                label={TRANSLATIONS.COMMUNITY_SECTION_STATS_SUPPORTED_LABEL}
                underLabel={
                  TRANSLATIONS.COMMUNITY_SECTION_STATS_SUPPORTED_UNDER_LABEL
                }
                colorClassName={style.grapefruitPulp}
                startAnimation={startAnimation}
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
                startAnimation={startAnimation}
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
                startAnimation={startAnimation}
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
              sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 40vw"
              priority
            />
          </BorderBox>
        </div>
      </div>

      <div className={style.socialSection}>
        <nav className={style.socialLinks} aria-label="Social media links">
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
