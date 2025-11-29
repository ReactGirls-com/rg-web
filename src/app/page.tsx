import { AboutSection } from '../components/AboutSection';
import { BasicCard } from '../components/BasicCard';
import { YellowSection } from '../components/YellowSection';
import {
  TargetIcon,
  HeartIcon,
  PeopleIcon,
} from '../components/BasicCard/Icons';
import { TRANSLATIONS } from './constants/translations';
import style from './page.module.scss';

const { aboutSection, cards, whyReactGirls } = TRANSLATIONS;

const Home = () => (
  <div className={style.home}>
    <AboutSection
      pillText={aboutSection.pill}
      heading={
        <>
          {aboutSection.heading.before}{' '}
          <span className={style.highlight}>
            {aboutSection.heading.highlight}
          </span>{' '}
          {aboutSection.heading.after}
        </>
      }
      subheading={aboutSection.subheading}
    >
      <div className={style.cardsContainer}>
        <BasicCard
          icon={<TargetIcon />}
          title={cards.mission.title}
          description={cards.mission.description}
          iconColor="red"
        />
        <BasicCard
          icon={<HeartIcon />}
          title={cards.vision.title}
          description={cards.vision.description}
          iconColor="cyan"
        />
        <BasicCard
          icon={<PeopleIcon />}
          title={cards.unique.title}
          description={cards.unique.description}
          iconColor="purple"
        />
      </div>
    </AboutSection>

    <div className={style.yellowSectionWrapper}>
      <YellowSection
        heading={whyReactGirls.heading}
        paragraph={whyReactGirls.paragraph}
        bulletPoints={[...whyReactGirls.bulletPoints]}
        dataCards={[
          {
            value: whyReactGirls.stats.satisfaction.value,
            label: whyReactGirls.stats.satisfaction.label,
            valueColor: 'red',
          },
          {
            value: whyReactGirls.stats.rating.value,
            label: whyReactGirls.stats.rating.label,
            valueColor: 'blue',
            showStar: true,
          },
          {
            value: whyReactGirls.stats.members.value,
            label: whyReactGirls.stats.members.label,
            valueColor: 'purple',
          },
          {
            value: whyReactGirls.stats.support.value,
            label: whyReactGirls.stats.support.label,
            valueColor: 'orange',
          },
        ]}
      />
    </div>
  </div>
);

export default Home;
