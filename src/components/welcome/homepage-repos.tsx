'use client';

import React from 'react';
import { homepageRepos } from '@/constants/self';
import { motion } from 'motion/react';
import { VscRepo } from 'react-icons/vsc';

export default function HomepageRepos() {
  return homepageRepos.map(({ name, description, url }, index) => (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      key={name}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="border-border flex flex-col border p-2 duration-100 hover:scale-105 hover:border-blue-400 hover:text-blue-400 md:w-3/4"
    >
      <h3 className="flex items-center gap-2 font-semibold duration-300">
        <VscRepo className="h-5 w-5 text-sky-400" />
        {name}
      </h3>
      <p className="text-muted ml-6 text-sm">{description}</p>
    </motion.a>
  ));
}
