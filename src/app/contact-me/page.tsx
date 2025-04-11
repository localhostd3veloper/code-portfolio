'use client';

import React from 'react';
import { socialMediaLinks } from '@/constants/self';
import { motion } from 'motion/react';

export default function ContactMePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 md:py-12">
      <h1 className="mb-6 text-2xl font-semibold">Contact Me</h1>
      {socialMediaLinks.map(({ icon: Icon, link, name }, idx) => (
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          href={link}
          key={link}
          className="border-border hover:bg-token-comment flex items-center gap-2 border p-4 duration-300"
        >
          <Icon className="h-6 w-6" />
          {name}
        </motion.a>
      ))}
    </div>
  );
}
