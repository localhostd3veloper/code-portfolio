import React from 'react';
import { socialMediaLinks } from '@/constants/self';
import Image from 'next/image';

import TypewriterEffect from './components/typewriter-effect';

export default function AboutMePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-12 lg:p-20">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/profile.jpg"
          alt="Gautam Anand"
          width={300}
          height={300}
          quality={100}
          className="h-24 w-24 rounded object-cover md:h-60 md:w-60"
        />
        <h1 className="text-2xl font-semibold md:text-4xl">Gautam Anand</h1>
        <div className="flex gap-4">
          {socialMediaLinks.map(({ icon: Icon, link }) => (
            <a href={link} key={link}>
              <Icon className="h-6 w-6 hover:text-blue-500" />
            </a>
          ))}
        </div>
        <div className="text-lg font-medium md:text-2xl">
          I &apos;m a <TypewriterEffect />
        </div>
        <div className="text-lg font-semibold md:text-2xl">About Me</div>
      </div>
      <div className="text-muted max-w-3xl text-center text-sm leading-relaxed tracking-wide md:text-base">
        Ever since I was a kid, I have been fascinated by technology and its potential to
        change the world. I started learning programming when I was 15 years old and have
        been hooked ever since. Over the years, I have worked on a wide range of projects,
        from simple websites to complex applications. I am always eager to learn new
        technologies and stay up to date with the latest trends in the industry.
        <br />
        <br />
        In my free time, I enjoy playing video games, working out, and spending time with
        friends and family. I also have a passion for singing and photography.
      </div>
    </div>
  );
}
