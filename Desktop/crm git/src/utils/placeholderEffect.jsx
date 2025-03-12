import { useState, useEffect } from "react";

export const placeholderEffect = () => {
  const [placeholder, setPlaceholder] = useState("");
  const placeholderTexts = [
    "Search for Lenskart Topics...",
    "Search for IMM Topics...",
    "Search for Pre-Sales Topics...",
    "Search for Post-Sales Topics...",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentText = placeholderTexts[placeholderIndex];

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
    }
  }, [charIndex, isDeleting, placeholderIndex]);

  return { placeholder };
};