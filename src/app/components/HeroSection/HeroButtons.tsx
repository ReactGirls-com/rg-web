'use client';

import { Button } from '@/src/components/Button';
import { Row } from '@/src/components/Row';
import { SECTION_IDS } from '@/src/constants';

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

type HeroButtonsProps = {
  joinText: string;
  supportText: string;
};

export const HeroButtons: React.FC<HeroButtonsProps> = ({
  joinText,
  supportText,
}) => (
  <Row flexWrap gap="16px">
    <Button
      variant="aztecAtom"
      onClick={() => {
        handleSmoothScroll(SECTION_IDS.OUR_ACTIVITIES);
      }}
    >
      {joinText}
    </Button>
    <Button
      variant="explodingStar"
      onClick={() => {
        handleSmoothScroll(SECTION_IDS.PARTNERS);
      }}
    >
      {supportText}
    </Button>
  </Row>
);
