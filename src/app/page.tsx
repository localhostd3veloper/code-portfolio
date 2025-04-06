import { homepageRepos, socialMediaLinks } from '@/constants/self';
import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';
import { VscRepo } from 'react-icons/vsc';

export default function WelcomePage() {
  return (
    <div className="flex flex-col md:flex-row  p-4 gap-4 md:p-20 overflow-y-auto">
      <div className="md:w-2/3 flex flex-col gap-2">
        <h1 className="text-xl md:text-4xl font-medium ">Gautam Anand</h1>
        <p className="text-muted text-xs md:text-base">
          ENGINEERING | CONVERSATIONAL AI | OPEN SOURCE | PHOTOGRAPHER |
          GUITARIST
        </p>
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-medium">
            Public Repositories
          </h2>
          <p className="text-muted ">
            Please check out my repositories on GitHub, drop a ⭐ if you like it
          </p>
          <div className="flex flex-col gap-3 mt-4">
            {homepageRepos.map(({ name, description, url }) => (
              <a
                key={name}
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-col border border-border p-2 md:w-3/4 hover:scale-105 duration-100 hover:text-blue-400  hover:border-blue-400"
              >
                <h3 className="flex items-center gap-2  duration-300 font-semibold">
                  <VscRepo className="w-5 h-5 text-sky-400" />
                  {name}
                </h3>
                <p className="text-muted text-sm ml-6">{description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-1/3 flex flex-col gap-2">
        <h2 className="text-2xl font-medium ">Social Media Links</h2>
        <p className="text-muted">
          PS: I am not a social media person, but you can find me here
        </p>
        <div className="grid grid-cols-1 gap-3">
          {socialMediaLinks.map(({ name, link, icon: Icon }) => (
            <div key={name} className="flex items-center gap-2">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 duration-300 hover:scale-105"
              >
                <Icon className="w-6 h-6" />
                {name}
              </a>
            </div>
          ))}
          <h2 className="text-2xl font-medium">Contact</h2>
          <div>
            <b>Email:</b> Try{' '}
            <Link
              href="mailto:gautamanand022@gmail.com"
              className="cursor-pointer underline text-blue-400"
              target="_blank"
            >
              This
            </Link>{' '}
            or{' '}
            <Link
              href="mailto:work.gautam16@gmail.com"
              className="cursor-pointer underline text-blue-400"
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
              className="flex items-center gap-2 hover:text-blue-400 duration-300"
            >
              <FaLocationDot className="w-4 h-4 text-amber-300" />
              Udaipur, Rajasthan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
