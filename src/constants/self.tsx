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
  'Frontend Developer',
  'Full Stack Developer',
  'Guitarist',
  'Photographer',
  'Blogger',
];

export const projectsData: IProject[] = [
  {
    name: 'Institute Dashboard',
    description:
      'Institute Dashboard for DOT100 for scheduling, monitoring, evaluating and managing students and ongoing examinations',
    techStack: ['React', 'NodeJS', 'Express', 'MongoDB'],
    projectURL: 'http://dashboard.dot100.in',
    imageURLs: ['/login.png', '/dashboard-1.png', '/dashboard-2.png'],
  },
  {
    name: 'TicketLess',
    description:
      'A web application that allows users to book tickets for heritage sites.',
    techStack: ['React', 'Python', 'FastAPI', 'MongoDB'],
    projectURL: 'https://devcubes-ticketless-66427.web.app/',
    imageURLs: ['/ticketless.png'],
  },
  {
    name: 'Question Paper Generator',
    description:
      'A Question Paper Generator that generates Question Papers for institutes and universities using AI.',
    techStack: ['React', 'NodeJS', 'Express', 'MongoDB'],
    projectURL: 'http://generator.dot100.in',
    imageURLs: ['/register.png', '/paper-gen.png', '/landing-2.png'],
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
  {
    name: 'Coming Soon Page',
    description: 'A coming soon landing page. It is a static website',
    techStack: ['React', 'TailwindCSS'],
    projectURL: 'https://scan-ai.vercel.app/',
    imageURLs: ['/landing.png'],
  },
];

export const experienceItems = [
  {
    title: 'Aug 2024 - Present',
    cardTitle: 'SDE 2',
    jobRole: 'Full Stack Lead',
    cardSubtitle: 'Treacle Tech.',
    cardDetailedText: `- Led and contributed to full-stack development efforts alongside a team of 5+ developers, while setting up scalable development pipelines to streamline workflows.\n- Redesigned the database architecture, increasing scalability by 10x, supporting future growth and improving query performance.\n- Reduced CPU utilization on low-resource VMs from 90%+ to 15–20% by identifying performance bottlenecks and refactoring resource-heavy processes.\n- Migrated a monolithic architecture to microservices, resulting in 5x faster development and debugging capabilities.\n- Implemented automated CI/CD pipelines using Docker and custom shell scripts, enabling seamless deployment for 10+ unique client environments.\n- Optimized MongoDB aggregation pipelines, reducing query times from 10+ seconds to 700ms, dramatically improving API response times.`,
    url: 'https://treacletech.com',
  },
  {
    title: 'Apr 2024 - July 2024',
    cardTitle: 'Software Engineer',
    jobRole: 'Full Stack Lead',
    cardSubtitle: 'GENIE AI',
    cardDetailedText: `- Managed a distributed team of 10 developers across multiple time zones, establishing efficient development pipelines and assigning tasks to ensure continuous delivery.\n- Led agile sprints across 3 cross-functional teams, consistently delivering client demos on schedule and improving overall client satisfaction.\n- Refactored and optimized legacy codebases, removing ~2,000+ lines of redundant code per project to improve maintainability and future developer onboarding.\n- Conducted in-depth code reviews for an average of 10 GitHub pull requests daily, enforcing best practices and significantly improving team-wide code quality.`,
    url: 'https://albisai.com/',
  },
  {
    title: 'Oct 2023 - Mar 2024',
    cardTitle: 'Full Stack Engineer (Freelance)',
    jobRole: 'Founding Team Member',
    cardSubtitle: 'TestNTrack',
    cardDetailedText: `- Designed and implemented a comprehensive admin dashboard for educational institutes, reducing manual administrative tasks by 40% through process automation.\n- Developed and secured APIs for encrypted OTP-based user authentication, increasing login security by 30% and enhancing user trust.\n- Integrated robust modules for exam management, student records, and performance tracking, streamlining operations and significantly improving data accessibility for staff.`,
    url: 'https://www.testntrack.com/',
  },
  {
    title: 'Oct 2022 - Jan 2023',
    cardTitle: 'Frontend Engineer Intern',
    jobRole: 'Product Development Team',
    cardSubtitle: 'Treacle Tech.',
    cardDetailedText: `- Translated complex Figma designs into fully responsive and interactive React-based user interfaces, achieving a 100% match to design specifications.\n- Optimized UI components for performance, reducing load times by 20% and enhancing the overall user experience.\n- Gained hands-on experience with cyber-attack simulations (SQL injection, XSS, DoS), strengthening understanding of secure coding practices and improving system resilience.`,
    url: 'https://treacletech.com',
  },
  {
    title: 'Feb 2022 - Jul 2022',
    cardTitle: 'Full Stack Developer Intern',
    jobRole: 'Founding Team Member',
    cardSubtitle: 'Botosynthesis®',
    cardDetailedText: `- Developed and deployed 5 full-stack applications across 3 distinct industries, resulting in improved system performance and increased user engagement.\n- Designed and launched 3 conversational APIs, enhancing the platform experience for 100+ active users through personalized, real-time interactions.\n- Managed multiple projects concurrently and contributed to the creation of a structured Software Development Life Cycle (SDLC) for a client, collaborating closely with a tech team of 8+ engineers.\n- Led and mentored a team of 6 interns, guiding the successful development of 20+ chatbots that automated over 200 weekly customer interactions, significantly boosting engagement and operational efficiency.`,
    url: 'https://botosynthesis.ai/',
  },
  {
    title: 'Oct 2020 - Jan 2022',
    cardTitle: 'Trainee Intern & Full Stack Web Developer Intern',
    jobRole: 'Founding Team Member',
    cardSubtitle: 'Botosynthesis®',
    cardDetailedText: `Developed fully-fledged Full-Stack Applications collaborating with other
      engineers for various companies using MERN.
      Developed complex conversational APIs and Algorithms. I've also played a major
      role at the the backend of a few conventional AI platforms.
      Working on projects and simultaneously creating SDLC for the same`,
    url: 'https://botosynthesis.ai/',
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
