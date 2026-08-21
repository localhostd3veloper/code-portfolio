import { SearchGroup, SearchItem } from '@/types';
import { VscBook, VscBriefcase, VscGraph, VscRepo } from 'react-icons/vsc';

import { sidebarLinks } from '.';
import {
  blogs,
  ExperienceItem,
  experienceItems,
  homepageRepos,
  projectsData,
  socialMediaLinks,
  typeWriterText,
} from './self';

export const SEARCH_GROUP_ORDER: SearchGroup[] = [
  'Pages',
  'Projects',
  'Work Experience',
  'Blogs',
  'Repositories',
  'Socials',
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const projectAnchorId = (name: string) => `project-${slugify(name)}`;

export const experienceAnchorId = (exp: ExperienceItem) =>
  `experience-${slugify(`${exp.cardSubtitle}-${exp.cardTitle}`)}`;

const stripUrl = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const pageKeywords: Record<string, string[]> = {
  '/': ['home', 'welcome', 'readme', 'start', 'repositories', 'open source'],
  '/about-me': ['bio', 'gautam anand', 'profile', 'who', ...typeWriterText],
  '/projects': ['work', 'portfolio', 'apps', 'side projects', 'builds'],
  '/blogs': ['articles', 'writing', 'posts', 'dev.to'],
  '/work-experience': ['jobs', 'career', 'resume', 'cv', 'timeline', 'companies'],
  '/contact-me': ['email', 'hire', 'reach out', 'socials', 'connect'],
};

const pageItems: SearchItem[] = sidebarLinks.map(({ label, icon, color, href }) => ({
  id: `page:${href}`,
  group: 'Pages',
  label,
  description: href,
  keywords: pageKeywords[href] ?? [],
  icon,
  color,
  action: { type: 'navigate', href },
}));

const projectItems: SearchItem[] = projectsData.map((project) => ({
  id: `project:${slugify(project.name)}`,
  group: 'Projects',
  label: project.name,
  description: project.description,
  keywords: [...project.techStack, stripUrl(project.projectURL)],
  icon: VscBriefcase,
  color: '#f472b6',
  action: {
    type: 'navigate',
    href: '/projects',
    anchorId: projectAnchorId(project.name),
  },
}));

const experienceItemsIndex: SearchItem[] = experienceItems.map((exp) => ({
  id: `experience:${slugify(`${exp.cardSubtitle}-${exp.cardTitle}`)}`,
  group: 'Work Experience',
  label: `${exp.cardTitle} · ${exp.cardSubtitle}`,
  description: exp.jobRole,
  keywords: [
    exp.jobRole,
    exp.cardSubtitle,
    exp.cardDetailedText,
    String(exp.startDate.getFullYear()),
    String(exp.endDate.getFullYear()),
    exp.isActive ? 'present current' : '',
  ],
  icon: VscGraph,
  color: '#a78bfa',
  action: {
    type: 'navigate',
    href: '/work-experience',
    anchorId: experienceAnchorId(exp),
  },
}));

const blogItems: SearchItem[] = blogs.map((blog) => ({
  id: `blog:${slugify(blog.name)}`,
  group: 'Blogs',
  label: blog.name,
  description: blog.description,
  keywords: [...blog.hashtags, 'dev.to'],
  icon: VscBook,
  color: '#facc15',
  action: { type: 'external', url: blog.url },
}));

const repoItems: SearchItem[] = homepageRepos.map((repo) => ({
  id: `repo:${repo.name}`,
  group: 'Repositories',
  label: repo.name,
  description: repo.description,
  keywords: ['github', 'source code', stripUrl(repo.url)],
  icon: VscRepo,
  color: '#38bdf8',
  action: { type: 'external', url: repo.url },
}));

const socialItems: SearchItem[] = socialMediaLinks.map((social) => ({
  id: `social:${slugify(social.name)}`,
  group: 'Socials',
  label: social.name,
  description: stripUrl(social.link),
  keywords: ['social', 'profile', 'follow', 'contact'],
  icon: social.icon,
  action: { type: 'external', url: social.link },
}));

export const searchItems: SearchItem[] = [
  ...pageItems,
  ...projectItems,
  ...experienceItemsIndex,
  ...blogItems,
  ...repoItems,
  ...socialItems,
];

export const searchHaystack = (item: SearchItem) =>
  [item.label, item.description, item.group, ...item.keywords].join(' ').toLowerCase();
