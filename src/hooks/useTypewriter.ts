import { useCallback, useEffect, useState } from 'react';

import { TRANSLATIONS } from '../constants/translations';

const words = [
  TRANSLATIONS.COMMUNITY_SECTION_HEADING_HIGHLIGHT_1,
  TRANSLATIONS.COMMUNITY_SECTION_HEADING_HIGHLIGHT_2,
  TRANSLATIONS.COMMUNITY_SECTION_HEADING_HIGHLIGHT_3,
  TRANSLATIONS.COMMUNITY_SECTION_HEADING_HIGHLIGHT_4,
  TRANSLATIONS.COMMUNITY_SECTION_HEADING_HIGHLIGHT_5,
];

const typingSpeed = 80;
const deletingSpeed = 40;
const pauseAfterType = 2000;
const pauseAfterDelete = 300;

type TypewriterPhase = 'typing' | 'pausing' | 'deleting' | 'waiting';

export const useTypewriter = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState<TypewriterPhase>('typing');

  const currentWord = words[currentWordIndex];

  const moveToNextWord = useCallback(() => {
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case 'typing': {
        if (displayedText.length < currentWord.length) {
          timeout = setTimeout(() => {
            setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          }, typingSpeed);
        } else {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setPhase('pausing');
        }

        break;
      }

      case 'pausing': {
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, pauseAfterType);

        break;
      }

      case 'deleting': {
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, -1));
          }, deletingSpeed);
        } else {
          setPhase('waiting');
        }

        break;
      }

      case 'waiting': {
        timeout = setTimeout(() => {
          moveToNextWord();
          setPhase('typing');
        }, pauseAfterDelete);

        break;
      }
    }

    return () => clearTimeout(timeout);
  }, [
    phase,
    displayedText,
    currentWord,
    typingSpeed,
    deletingSpeed,
    pauseAfterType,
    pauseAfterDelete,
    moveToNextWord,
  ]);

  return { displayedText, isDeleting: phase === 'deleting' };
};
