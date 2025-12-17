import { AboutSection } from '../components/AboutSection';
import { HeroSection } from '../components/HeroSection';
import { OurActivities } from '../components/OurActivities/OurActivities';
import { PartnersSection } from '../components/PartnersSection';

const Home: React.FC = () => (
  <>
    <HeroSection />
    <AboutSection />
    <OurActivities />
    <PartnersSection />
  </>
);

export default Home;
