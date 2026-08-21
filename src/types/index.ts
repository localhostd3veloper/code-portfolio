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
