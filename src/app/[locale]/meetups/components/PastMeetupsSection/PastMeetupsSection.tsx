import Image from 'next/image';

import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { BorderBox } from '@/src/components/BorderBox';
import { Button } from '@/src/components/Button';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';
import willisThumb from '@/src/assets/thumbnails/willis.jpg';
import nulickovaThumb from '@/src/assets/thumbnails/nulickova.jpg';
import machovaThumb from '@/src/assets/thumbnails/machova.jpg';
import nagyThumb from '@/src/assets/thumbnails/nagy.jpg';
import voberanmuzThumb from '@/src/assets/thumbnails/voberanmuz.jpg';
import rudolfovaThumb from '@/src/assets/thumbnails/rudolfova.jpg';
import style from './PastMeetupsSection.module.scss';

const PAST_MEETUPS = [
  {
    title: 'Rest API & HTTP metody',
    author: 'Markéta Willis',
    thumbnail: willisThumb,
    videoUrl: 'https://www.youtube.com/watch?v=UuG-fMEAuPM',
  },
  {
    title: 'Na co si dát pozor při hledání práce',
    author: 'Petra Nulíčková',
    thumbnail: nulickovaThumb,
    videoUrl: 'https://www.youtube.com/watch?v=uNL3yEzNsbQ',
  },
  {
    title: 'Jak přežít na treku',
    author: 'Eva Machová',
    thumbnail: machovaThumb,
    videoUrl: 'https://www.youtube.com/watch?v=rsAKEv9_zas',
  },
  {
    title: 'Jak uspět jako junior developer',
    author: 'Gašpar Nagy',
    thumbnail: nagyThumb,
    videoUrl: 'https://www.youtube.com/watch?v=FJbVpaYIeUg',
  },
  {
    title: 'Cesta k programování',
    author: 'Eliška Võ, Helena Beranová a Tereza Mužíková',
    thumbnail: voberanmuzThumb,
    videoUrl: 'https://www.youtube.com/watch?v=zT8pnA768aU',
  },
  {
    title: 'Práce na cestách',
    author: 'Michaela Rudolfová',
    thumbnail: rudolfovaThumb,
    videoUrl: 'https://www.youtube.com/watch?v=3WyvP10ZWmQ',
  },
];

export const PastMeetupsSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.PAST_MEETUPS_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.aztecAtom}>
            {t.PAST_MEETUPS_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>
        </>
      }
    >
      <div className={style.cardsContainer}>
        {PAST_MEETUPS.map((meetup) => (
          <BorderBox key={meetup.videoUrl} className={style.card}>
            <div className={style.thumbnailWrapper}>
              <Image
                src={meetup.thumbnail}
                alt={`${meetup.title} - ${meetup.author}`}
                fill
                className={style.thumbnail}
              />
            </div>
            <div className={style.cardContent}>
              <div>
                <h3 className={style.cardTitle}>{meetup.title}</h3>
                <p className={style.cardAuthor}>
                  {t.PAST_MEETUPS_BY} {meetup.author}
                </p>
              </div>

              <Button variant="grapefruitPulp" href={meetup.videoUrl}>
                {t.PAST_MEETUPS_WATCH_BUTTON}
              </Button>
            </div>
          </BorderBox>
        ))}
      </div>
    </Section>
  );
};
