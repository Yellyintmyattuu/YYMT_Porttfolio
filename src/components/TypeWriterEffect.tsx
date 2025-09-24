import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  words, 
  className = '' 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting effect
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deleting than typing

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`${className} font-mono`}>
      {displayedText}
      <span className="animate-pulse text-yellow-400">|</span>
    </span>
  );
};
