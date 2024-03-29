import {
  useEffect,
  useState,
} from "react";
import styles from './TypeAnimation.module.css';

interface DataProps {
  strings: string[];
}


const TypingAnimation = ({strings}: DataProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const phrase = strings[currentPhraseIndex];
      const length = currentPhrase.length;
      if (length < phrase.length) {
        setCurrentPhrase(phrase.substring(0, length + 1));
      } else {
        // setTimeout(() => {
          setShowCursor(false);
          setTimeout(() => {
            setShowCursor(true);
            setCurrentPhrase('');
            setCurrentPhraseIndex((currentPhraseIndex + 1) % strings.length);
          }, 500);
        // }, 1000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentPhrase, currentPhraseIndex, strings]);

  return (
    <div className={styles.typingContainer}>
      <span id="element">{currentPhrase}</span>
      {showCursor && <span className={styles.cursor}>_</span>}
    </div>
  );
};

export default TypingAnimation;
