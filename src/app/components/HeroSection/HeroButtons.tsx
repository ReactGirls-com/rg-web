import { Button } from '@/src/components/Button';
import { Row } from '@/src/components/Row';
import { SECTION_IDS } from '@/src/constants';
import { TRANSLATIONS } from '@/src/constants/translations';

const SCROLL_OFFSET = 40;

const handleSmoothScroll = (sectionId: string) => {
  const targetElement = window.document.getElementById(sectionId);

  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
export const HeroButtons: React.FC = () => (
  <Row flexWrap gap="16px">
    <Button
      variant="aztecAtom"
      onClick={() => {
        handleSmoothScroll(SECTION_IDS.OUR_ACTIVITIES);
      }}
    >
      {TRANSLATIONS.COMMUNITY_SECTION_BUTTON_JOIN}
    </Button>
    <Button
      variant="explodingStar"
      onClick={() => {
        handleSmoothScroll(SECTION_IDS.PARTNERS);
      }}
    >
      {TRANSLATIONS.COMMUNITY_SECTION_BUTTON_SUPPORT}
    </Button>
  </Row>
);
