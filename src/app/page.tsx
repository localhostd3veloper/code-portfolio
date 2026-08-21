import Reveal from '@/components/motion/reveal';
import Stagger from '@/components/motion/stagger';
import ContactCard from '@/components/welcome/contact-card';
import FeaturedProjects from '@/components/welcome/featured-projects';
import Hero from '@/components/welcome/hero';
import HomepageRepos from '@/components/welcome/homepage-repos';
import QuickLinks from '@/components/welcome/quick-links';
import SocialLinks from '@/components/welcome/social-links';

export default function WelcomePage() {
  return (
    <Stagger
      startDelay={0.12}
      className="flex flex-col gap-10 p-4 md:p-12 lg:flex-row lg:items-start lg:gap-16 lg:p-20"
    >
      <Reveal
        interval={0.05}
        className="flex flex-col gap-10 lg:sticky lg:top-8 lg:w-2/3"
      >
        <Hero />
        <div className="flex flex-col gap-3">
          <Reveal className="text-lg font-medium md:text-xl">Start</Reveal>
          <QuickLinks />
        </div>
      </Reveal>
      <Reveal interval={0.05} className="flex flex-col gap-8 lg:w-1/3">
        <div className="flex flex-col gap-3">
          <Reveal className="text-lg font-medium md:text-xl">Featured Projects</Reveal>
          <FeaturedProjects />
        </div>
        <div className="flex flex-col gap-3">
          <Reveal className="text-lg font-medium md:text-xl">Public Repositories</Reveal>
          <Reveal className="text-muted text-sm">
            Drop a star on GitHub if any of these are useful to you.
          </Reveal>
          <div className="flex flex-col gap-3">
            <HomepageRepos />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Reveal className="text-lg font-medium md:text-xl">Connect</Reveal>
          <SocialLinks />
          <ContactCard />
        </div>
      </Reveal>
    </Stagger>
  );
}
