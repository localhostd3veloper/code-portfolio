import blogRecords from '@/data/blogs.json';
import experienceRecords from '@/data/experience.json';
import projectRecords from '@/data/projects.json';
import repoRecords from '@/data/repos.json';
import {
  BlogRecord,
  ExperienceRecord,
  IProject,
  ProjectRecord,
  RepoRecord,
} from '@/types';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaHackerrank } from 'react-icons/fa';
import { PiDevToLogo } from 'react-icons/pi';

import { slugify } from '@/utils/slugify';

export const projectImages = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/projects/${slugify(name)}/${i + 1}.png`);

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
    link: 'https://www.instagram.com/aree.gautammm',
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

export const projectsData: IProject[] = (projectRecords as ProjectRecord[]).map(
  (project) => ({
    name: project.name,
    description: project.description,
    techStack: project.techStack,
    projectURL: project.projectURL,
    imageURLs: projectImages(project.name, project.imageCount),
  }),
);

export interface ExperienceItem {
  startDate: Date;
  endDate: Date;
  cardTitle: string;
  jobRole: string;
  cardSubtitle: string;
  cardDetailedText: string;
  url: string;
  isActive: boolean;
}

export const experienceItems: ExperienceItem[] = (
  experienceRecords as ExperienceRecord[]
).map((record) => ({
  ...record,
  startDate: new Date(record.startDate),
  endDate: new Date(record.endDate),
}));

export const blogs = blogRecords as BlogRecord[];

export const homepageRepos = repoRecords as RepoRecord[];
