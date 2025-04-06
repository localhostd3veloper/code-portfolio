import Image from 'next/image';
import React from 'react';
import TypewriterEffect from './components/typewriter-effect';
import { socialMediaLinks } from '@/constants/self';

export default function AboutMePage() {
  return (
    <div className="h-full p-4 md:p-20 flex flex-col gap-4 justify-center items-center">
      <div className="flex items-center gap-6 flex-col">
        <Image
          src="/profile.jpg"
          alt="Gautam Anand"
          width={300}
          height={300}
          quality={100}
          className="rounded w-24 h-24 md:w-60 md:h-60 object-cover"
        />
        <h1 className="text-2xl md:text-4xl font-semibold">Gautam Anand</h1>
        <div className="flex gap-4">
          {socialMediaLinks.map(({ icon: Icon, link }) => (
            <a href={link} key={link}>
              <Icon className="w-6 h-6 hover:text-blue-500" />
            </a>
          ))}
        </div>
        <div className="text-lg md:text-2xl font-medium">
          I'm a <TypewriterEffect />
        </div>
        <div className="text-lg md:text-2xl font-semibold">About Me</div>
      </div>
      <div className="text-muted text-sm  text-center md:text-base max-w-3xl leading-relaxed tracking-wide">
        Ever since I was a kid, I have been fascinated by technology and its
        potential to change the world. I started learning programming when I was
        15 years old and have been hooked ever since. Over the years, I have
        worked on a wide range of projects, from simple websites to complex
        applications. I am always eager to learn new technologies and stay up to
        date with the latest trends in the industry.
        <br />
        <br />
        In my free time, I enjoy playing video games, working out, and spending
        time with friends and family. I also have a passion for singing and
        photography.
      </div>
    </div>
  );
}
