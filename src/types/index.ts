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
