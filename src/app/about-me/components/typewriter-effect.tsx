'use client';

import { typeWriterText } from '@/constants/self';
import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterEffect() {
  return (
    <Typewriter
      words={typeWriterText}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
}
