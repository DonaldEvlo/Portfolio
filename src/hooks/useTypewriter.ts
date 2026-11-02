import { useEffect, useState } from 'react';

/** Écrit puis efface chaque mot de la liste, en boucle. */
export const useTypewriter = (words: readonly string[], typeMs = 70, deleteMs = 35, pauseMs = 1800) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!isDeleting && text === word) {
      const pause = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === '') {
      const next = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 0);
      return () => clearTimeout(next);
    }

    const step = setTimeout(
      () => setText(isDeleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      isDeleting ? deleteMs : typeMs,
    );
    return () => clearTimeout(step);
  }, [words, index, text, isDeleting, typeMs, deleteMs, pauseMs]);

  return text;
};
