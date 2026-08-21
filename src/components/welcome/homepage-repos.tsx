'use client';

import { fadeRise } from '@/constants/motion';
import { homepageRepos } from '@/constants/self';
import { motion } from 'motion/react';
import { VscRepo } from 'react-icons/vsc';

export default function HomepageRepos() {
  return homepageRepos.map(({ name, description, url }) => (
    <motion.a
      variants={fadeRise}
      key={name}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="border-border flex flex-col border p-2 transition-colors duration-150 hover:border-blue-400 hover:text-blue-400 md:w-3/4"
    >
      <>
        <h3 className="flex items-center gap-2 font-semibold">
          <VscRepo className="h-5 w-5 text-sky-400" />
          {name}
        </h3>
        <p className="text-muted ml-6 text-sm">{description}</p>
      </>
    </motion.a>
  ));
}
