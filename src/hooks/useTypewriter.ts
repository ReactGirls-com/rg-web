import { useCallback, useEffect, useState } from 'react';

const typingSpeed = 80;
const deletingSpeed = 40;
const pauseAfterType = 2000;
const pauseAfterDelete = 300;

type TypewriterPhase = 'typing' | 'pausing' | 'deleting' | 'waiting';

export const useTypewriter = (words: string[]) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState<TypewriterPhase>('typing');

  const currentWord = words[currentWordIndex] || '';

  const moveToNextWord = useCallback(() => {
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    if (words.length === 0) {
      return;
    }

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
  }, [phase, displayedText, currentWord, moveToNextWord, words.length]);

  return { displayedText, isDeleting: phase === 'deleting' };
};
