import { socialMediaLinks } from '@/constants/self';
import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';

import FadeIn from '@/components/fade-in';
import HomepageRepos from '@/components/welcome/homepage-repos';

export default function WelcomePage() {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto p-4 md:flex-row md:p-12 lg:p-20">
      <div className="flex flex-col gap-2 md:w-2/3">
        <FadeIn className="text-xl font-medium md:text-4xl">Gautam Anand</FadeIn>
        <FadeIn delay={0.1} className="text-muted text-xs md:text-base">
          ENGINEERING | CONVERSATIONAL AI | OPEN SOURCE | PHOTOGRAPHER | GUITARIST
        </FadeIn>
        <div className="mt-2 flex flex-col md:mt-6">
          <FadeIn delay={0.2} className="text-lg font-medium md:text-xl">
            Public Repositories
          </FadeIn>
          <FadeIn delay={0.25} className="text-muted">
            Please check out my repositories on GitHub, drop a ⭐ if you like it
          </FadeIn>
          <div className="mt-4 flex flex-col gap-3">
            <HomepageRepos />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:w-1/3">
        <FadeIn className="text-2xl font-medium">Social Media Links</FadeIn>
        <FadeIn delay={0.1} className="text-muted">
          PS: I am not a social media person, but you can find me here
        </FadeIn>
        <FadeIn delay={0.2} className="grid w-3/4 grid-cols-1 gap-3">
          {socialMediaLinks.map(({ name, link, icon: Icon }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-border bg-editor hover:bg-token-hover flex items-center gap-3 border px-3 py-2 transition-all duration-150 hover:border-blue-500"
            >
              <Icon className="text-foreground h-5 w-5 transition-colors duration-150 group-hover:text-blue-400" />
              <span className="text-foreground text-sm font-medium group-hover:text-blue-400">
                {name}
              </span>
            </a>
          ))}

          <h2 className="text-2xl font-medium">Contact</h2>
          <div>
            <b>Email:</b> Try{' '}
            <Link
              href="mailto:gautamanand022@gmail.com"
              className="cursor-pointer text-blue-400 underline"
              target="_blank"
            >
              This
            </Link>{' '}
            or{' '}
            <Link
              href="mailto:work.gautam16@gmail.com"
              className="cursor-pointer text-blue-400 underline"
              target="_blank"
            >
              This
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <b>City: </b>
            <a
              href="https://maps.app.goo.gl/JtSYmsuUSu7svhYo8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-150 hover:text-blue-400"
            >
              <FaLocationDot className="h-4 w-4 text-amber-300" />
              Udaipur, Rajasthan
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
