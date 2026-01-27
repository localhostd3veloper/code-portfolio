import { IProject } from '@/types';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaHackerrank } from 'react-icons/fa';
import { PiDevToLogo } from 'react-icons/pi';

export const socialMediaLinks = [
  {
    name: 'Github',
    link: 'https://github.com/localhostd3veloper',
    icon: BsGithub,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gautam-anand16/',
    icon: BsLinkedin,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/the.vscode.guy/',
    icon: BsInstagram,
  },
  {
    name: 'Hackerrank',
    link: 'https://www.hackerrank.com/gautam_anand',
    icon: FaHackerrank,
  },
  {
    name: 'Dev To',
    link: 'https://www.dev.to/localhostd3veloper',
    icon: PiDevToLogo,
  },
];

export const typeWriterText = [
  'Tech Enthusiast',
  'Frontend Engineer',
  'Full Stack Engineer',
  'Guitarist',
  'Photographer',
  'Blogger',
];

export const projectsData: IProject[] = [
  {
    name: 'Code Portfolio',
    description: 'This very own project, ',
    techStack: ['Next.JS', 'React', 'TailwindCSS', 'Zustand', 'More..'],
    projectURL: '#',
    imageURLs: ['/portfolio-1.png', '/portfolio-2.png', '/portfolio-3.png'],
  },
  {
    name: 'Drift UI (Under Construction)',
    description:
      'This is a component library for TailwindCSS and GSAP, this is a work in progress and will be completly open sourced available on npmjs',
    techStack: ['Next.JS', 'React', 'TailwindCSS', 'Zustand', 'More..'],
    projectURL: '#',
    imageURLs: ['/drift-ui-1.png', '/drift-ui-2.png', '/drift-ui-3.png'],
  },
  {
    name: 'Institute Dashboard',
    description:
      'Institute Dashboard for DOT100 for scheduling, monitoring, evaluating and managing students and ongoing examinations',
    techStack: ['React', 'NodeJS', 'Express', 'MongoDB'],
    projectURL: '#',
    imageURLs: ['/login.png', '/dashboard-1.png', '/dashboard-2.png'],
  },
  {
    name: 'TicketLess',
    description:
      'A web application that allows users to book tickets for heritage sites.',
    techStack: ['React', 'Python', 'FastAPI', 'MongoDB'],
    projectURL: '#',
    imageURLs: ['/ticketless.png'],
  },
  {
    name: 'Question Paper Generator',
    description:
      'A Question Paper Generator that generates Question Papers for institutes and universities using AI.',
    techStack: ['React', 'NodeJS', 'Express', 'MongoDB'],
    projectURL: '#',
    imageURLs: ['/register.png', '/paper-gen.png', '/landing-2.png'],
  },
  {
    name: 'Notion Replication',
    description: 'This is Notion - Task Page clone with Drag and Drop functionality',
    techStack: ['React', 'TailwindCSS'],
    projectURL: 'https://notion-replication.vercel.app/',
    imageURLs: ['/notion-1.png', '/notion-2.png'],
  },
  {
    name: 'Mac OS Clone',
    description: 'A clone of the Mac OS desktop. It is a static website',
    techStack: ['React', 'TailwindCSS', 'LottieFiles'],
    projectURL: 'https://mac-os-clone-ten.vercel.app/',
    imageURLs: ['/mac-osx.png', '/mac-osx-2.png'],
  },
  {
    name: 'Netflix Landing Page',
    description: 'A clone of the Netflix landing page. It is a static website',
    techStack: ['React', 'TailwindCSS'],
    projectURL: 'https://netflix-clone-2022-chi.vercel.app/',
    imageURLs: ['/netflix.png', '/netflix-2.png'],
  },
];

interface ExperienceItem {
  startDate: Date;
  endDate: Date;
  cardTitle: string;
  jobRole: string;
  cardSubtitle: string;
  cardDetailedText: string;
  url: string;
  isActive: boolean;
}

export const experienceItems: ExperienceItem[] = [
  {
    startDate: new Date('2026-02-01'),
    endDate: new Date('2030-06-30'),
    isActive: true,
    cardTitle: 'Lead Software Engineer',
    cardSubtitle: 'Oraczen AI',
    jobRole: 'Product Team',
    cardDetailedText: `- Adding...`,
    url: 'https://oraczen.ai',
  },
  {
    startDate: new Date('2025-06-01'),
    endDate: new Date('2026-01-31'),
    cardTitle: 'Principal Engineer',
    jobRole: 'Core Product Team',
    cardSubtitle: 'Turium AI',
    cardDetailedText: `- Led a cross-functional team of 7–8 developers to build a full-scale SaaS platform from scratch, integrating AI chat systems, real-time 1:1 and team calling, and event management features — achieving end-to-end delivery within aggressive timelines.\n- Collaborated directly with the founder and product team to conceptualize, design, and prioritize roadmap features, driving 25%+ growth in user engagement and retention through rapid prototyping and feedback loops.\n- Defined and enforced coding standards across all engineering teams, resulting in a more consistent user experience and a 30% reduction in code refactoring time.`,
    url: 'https://turium.ai',
    isActive: false,
  },
  {
    startDate: new Date('2024-07-01'),
    endDate: new Date('2025-05-31'),
    cardTitle: 'SDE II',
    jobRole: 'Founding Engineer',
    cardSubtitle: 'Treacle Technologies',
    cardDetailedText: `- Led and contributed to full-stack development efforts alongside a team of 5+ developers, while setting up scalable development pipelines to streamline workflows.\n- Redesigned the database architecture, increasing scalability by 10x, supporting future growth and improving query performance.\n- Reduced CPU utilization on low-resource VMs from 90%+ to 15–20% by identifying performance bottlenecks and refactoring resource-heavy processes.\n- Migrated a monolithic architecture to microservices, resulting in 5x faster development and debugging capabilities.\n- Implemented automated CI/CD pipelines using Docker and custom shell scripts, enabling seamless deployment for 10+ unique client environments.\n- Optimized MongoDB aggregation pipelines, reducing query times from 10+ seconds to 700ms, dramatically improving API response times.`,
    url: 'https://treacletech.com',
    isActive: false,
  },
  {
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-08-31'),
    cardTitle: 'Full Stack Lead',
    jobRole: 'Founding Engineer',
    cardSubtitle: 'GENIE AI',
    cardDetailedText: `- Managed a distributed team of 10 developers across multiple time zones, establishing efficient development pipelines and assigning tasks to ensure continuous delivery.\n- Led agile sprints across 3 cross-functional teams, consistently delivering client demos on schedule and improving overall client satisfaction.\n- Refactored and optimized legacy codebases, removing ~2,000+ lines of redundant code per project to improve maintainability and future developer onboarding.\n- Conducted in-depth code reviews for an average of 10 GitHub pull requests daily, enforcing best practices and significantly improving team-wide code quality.`,
    url: 'https://albisai.com/',
    isActive: false,
  },
  {
    startDate: new Date('2022-10-01'),
    endDate: new Date('2022-12-31'),
    cardTitle: 'Frontend Intern',
    jobRole: 'Frontend Developer',
    cardSubtitle: 'Treacle Technologies',
    cardDetailedText: `- Translated complex Figma designs into fully responsive and interactive React-based user interfaces, achieving a 100% match to design specifications.\n- Optimized UI components for performance, reducing load times by 20% and enhancing the overall user experience.\n- Gained hands-on experience with cyber-attack simulations (SQL injection, XSS, DoS), strengthening understanding of secure coding practices and improving system resilience.`,
    url: 'https://treacletech.com',
    isActive: false,
  },
  {
    startDate: new Date('2022-07-01'),
    endDate: new Date('2022-08-31'),
    cardTitle: 'SDE Intern',
    jobRole: 'Core Product Team',
    cardSubtitle: 'Listnr, Inc.',
    cardDetailedText: `- Worked closely with the CTO and the CEO to develop/write features on the platform listnr.fm\n- Replicating complex UI's from the wireframes and parallelly writing logic for the same\n- Improving the lighthouse score by reducing the overall bundle size of the web-pack and by using the best practices.\n- Co-authored pull requests on GitHub with other engineers on the team`,
    url: 'https://listnr.fm',
    isActive: false,
  },
  {
    startDate: new Date('2020-10-01'),
    endDate: new Date('2022-06-31'),
    cardTitle: 'Trainee Intern & Full Stack Web Developer Intern',
    jobRole: 'Founding Engineer',
    cardSubtitle: 'Botosynthesis®',
    cardDetailedText: `Developed fully-fledged Full-Stack Applications collaborating with other
      engineers for various companies using MERN.
      Developed complex conversational APIs and Algorithms. I've also played a major
      role at the the backend of a few conventional AI platforms.
      Working on projects and simultaneously creating SDLC for the same`,
    url: 'https://botosynthesis.ai/',
    isActive: false,
  },
];
export const blogs = [
  {
    name: 'Javascript Essentials 👨🏼‍💻',
    description: 'A collection of Javascript Essentials',
    hashtags: ['#javascript', '#codenewbie', '#webdev', '#programming'],
    url: 'https://dev.to/localhostd3veloper/javascript-essentials-40he',
    imgURL:
      'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcikhxmaw2liabhjj4ojp.JPG',
  },
  {
    name: 'Map, Filter and Reduce in Javascript 👨🏼‍💻',
    description: 'A collection of Higher Order Functions',
    hashtags: ['#javascript', '#codenewbie', '#programming', '#tutorial'],
    url: 'https://dev.to/localhostd3veloper/map-filter-and-reduce-in-javascript-51fj',
    imgURL:
      'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3ruql1kl0atctnan11sp.JPG',
  },
  {
    name: 'Javascript Sort: Simplified 👨🏼‍💻',
    description: 'From Basics to writing your own Compartor function',
    hashtags: ['#compartor', '#javascript', '#webdev', '#tutorial'],
    url: 'https://dev.to/localhostd3veloper/javascript-sort-simplified-akm',
    imgURL:
      'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpvtyjw1hku0xp7pfsfio.JPG',
  },
];

export const homepageRepos = [
  {
    name: 'code-portfolio',
    description: 'This very website, self written source code',
    url: 'https://github.com/localhostd3veloper/code-portfolio',
  },
  {
    name: 'noobjs',
    description: 'This is a headstart javascript guid e for absolute beginners',
    url: 'https://github.com/localhostd3veloper/noobjs',
  },
  {
    name: 'notion-replication',
    description: 'This is Notion - Task Page clone with Drag and Drop functionality',
    url: 'https://github.com/localhostd3veloper/notion-replication',
  },
  {
    name: 'realtime-chat-app',
    description:
      'A realtime chat application to demonstrate websockets with react and nodejs',
    url: 'https://github.com/localhostd3veloper/realtime-chat-app',
  },
];
