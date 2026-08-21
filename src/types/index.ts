import { IconType } from 'react-icons';

export interface SidebarLinksType {
  label: string;
  icon: IconType;
  color: string;
  href: string;
  isActive?: boolean;
}

export interface IProject {
  name: string;
  description: string;
  techStack: string[];
  projectURL: string;
  imageURLs: string[];
}

export interface ProjectRecord {
  name: string;
  description: string;
  techStack: string[];
  projectURL: string;
  imageCount: number;
}

export interface ExperienceRecord {
  startDate: string;
  endDate: string;
  cardTitle: string;
  jobRole: string;
  cardSubtitle: string;
  cardDetailedText: string;
  url: string;
  isActive: boolean;
}

export interface BlogRecord {
  name: string;
  description: string;
  hashtags: string[];
  url: string;
  imgURL: string;
}

export interface RepoRecord {
  name: string;
  description: string;
  url: string;
}

export type SearchGroup =
  | 'Pages'
  | 'Projects'
  | 'Work Experience'
  | 'Blogs'
  | 'Repositories'
  | 'Socials';

export type SearchAction =
  | { type: 'navigate'; href: string; anchorId?: string }
  | { type: 'external'; url: string };

export interface SearchItem {
  id: string;
  group: SearchGroup;
  label: string;
  description: string;
  keywords: string[];
  icon: IconType;
  color?: string;
  action: SearchAction;
}
