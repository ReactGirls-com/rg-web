import Image from 'next/image';

import { StatsCard } from './StatsCard';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { SOCIAL_LINKS } from '@/src/constants';
import { IconButton } from '@/src/components/IconButton';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { COLORS } from '@/src/styles/color';
import { Section } from '@/src/components/Section';
import { BorderBox } from '@/src/components/BorderBox';
import heroImage from '../../../assets/hero-image.png';
import { HeroButtons } from './HeroButtons';
import { HeroTypewriter } from './HeroTypewriter';
import style from './HeroSection.module.scss';

export const HeroSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();
  const typewriterWords = [
    t.COMMUNITY_SECTION_HEADING_HIGHLIGHT_1,
    t.COMMUNITY_SECTION_HEADING_HIGHLIGHT_2,
    t.COMMUNITY_SECTION_HEADING_HIGHLIGHT_3,
    t.COMMUNITY_SECTION_HEADING_HIGHLIGHT_4,
    t.COMMUNITY_SECTION_HEADING_HIGHLIGHT_5,
  ];

  return (
    <Section className={style.heroSection}>
      <div className={style.content}>
        <div className={style.leftContentWrapper}>
          <div className={style.headingWrapper}>
            <h2 className={style.heading}>
              {t.COMMUNITY_SECTION_HEADING_BEFORE}{' '}
              <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
                <HeroTypewriter words={typewriterWords} />
              </HeadingHighlight>{' '}
              <div>{t.COMMUNITY_SECTION_HEADING_AFTER}</div>
            </h2>
            <p className={style.paragraph}>{t.COMMUNITY_SECTION_PARAGRAPH}</p>
          </div>

          <div className={style.buttonsStatsWrapper}>
            <HeroButtons
              joinText={t.COMMUNITY_SECTION_BUTTON_JOIN}
              supportText={t.COMMUNITY_SECTION_BUTTON_SUPPORT}
            />

            <div className={style.statsCardList}>
              <StatsCard
                value={500}
                valueSuffix="+"
                label={t.COMMUNITY_SECTION_STATS_SUPPORTED_LABEL}
                underLabel={t.COMMUNITY_SECTION_STATS_SUPPORTED_UNDER_LABEL}
                colorClassName={style.grapefruitPulp}
                shouldAnimate
              />
              <StatsCard
                value={80}
                valueSuffix="+"
                label={t.COMMUNITY_SECTION_STATS_JOINED_LABEL}
                underLabel={t.COMMUNITY_SECTION_STATS_JOINED_UNDER_LABEL}
                colorClassName={style.aztecAtom}
                shouldAnimate
              />
              <StatsCard
                value={60}
                valueSuffix="+"
                label={t.COMMUNITY_SECTION_STATS_EVENTS_LABEL}
                underLabel={t.COMMUNITY_SECTION_STATS_EVENTS_UNDER_LABEL}
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
          aria-label={t.ARIA_SOCIAL_MEDIA_LINKS}
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
