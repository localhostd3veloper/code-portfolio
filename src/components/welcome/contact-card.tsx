import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';
import { VscMail } from 'react-icons/vsc';

import Reveal from '@/components/motion/reveal';

export default function ContactCard() {
  return (
    <div className="border-border bg-editor flex flex-col gap-3 border p-3 text-sm">
      <Reveal className="flex items-start gap-2">
        <VscMail className="text-muted mt-0.5 h-4 w-4 shrink-0" />
        <p>
          Try{' '}
          <Link
            href="mailto:gautamanand022@gmail.com"
            target="_blank"
            className="text-blue-400 underline"
          >
            this
          </Link>{' '}
          or{' '}
          <Link
            href="mailto:work.gautam16@gmail.com"
            target="_blank"
            className="text-blue-400 underline"
          >
            this
          </Link>
        </p>
      </Reveal>
      <Reveal className="flex items-center gap-2">
        <FaLocationDot className="h-4 w-4 shrink-0 text-amber-300" />
        <a
          href="https://maps.app.goo.gl/JtSYmsuUSu7svhYo8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Udaipur, Rajasthan
        </a>
      </Reveal>
    </div>
  );
}
