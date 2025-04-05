import { SidebarLinksType } from '@/store/editor';
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
  VscHome,
  VscBriefcase,
  VscBook,
  VscGraph,
  VscMail,
} from 'react-icons/vsc';

export const topBarMenus = [
  {
    label: 'File',
    items: [
      { label: 'New File', shortcut: 'Ctrl+N' },
      { label: 'Open...', shortcut: 'Ctrl+O' },
      { label: 'Save', shortcut: 'Ctrl+S' },
      { label: 'Save As', shortcut: 'Ctrl+Shift+S' },
      { separator: true },
      { label: 'Exit' },
    ],
  },
  {
    label: 'Edit',
    items: [
      { label: 'Undo', shortcut: 'Ctrl+Z' },
      { label: 'Redo', shortcut: 'Ctrl+Y' },
      { separator: true },
      { label: 'Cut', shortcut: 'Ctrl+X' },
      { label: 'Copy', shortcut: 'Ctrl+C' },
      { label: 'Paste', shortcut: 'Ctrl+V' },
    ],
  },
  {
    label: 'Selection',
    items: [
      { label: 'Select All', shortcut: 'Ctrl+A' },
      { label: 'Expand Selection', shortcut: 'Shift+Alt+Right' },
      { label: 'Shrink Selection', shortcut: 'Shift+Alt+Left' },
    ],
  },
  {
    label: 'View',
    items: [
      { label: 'Appearance' },
      { label: 'Layout' },
      { label: 'Extensions', shortcut: 'Ctrl+Shift+X' },
    ],
  },
  {
    label: 'Go',
    items: [
      { label: 'Back', shortcut: 'Alt+Left' },
      { label: 'Forward', shortcut: 'Alt+Right' },
      { separator: true },
      { label: 'Go to File...', shortcut: 'Ctrl+P' },
      { label: 'Go to Symbol...', shortcut: 'Ctrl+Shift+O' },
    ],
  },
  {
    label: 'Run',
    items: [
      { label: 'Start Debugging', shortcut: 'F5' },
      { label: 'Run Without Debugging', shortcut: 'Ctrl+F5' },
      { label: 'Stop', shortcut: 'Shift+F5' },
    ],
  },
  {
    label: 'Terminal',
    items: [
      { label: 'New Terminal', shortcut: 'Ctrl+Shift+`' },
      { label: 'Split Terminal', shortcut: 'Ctrl+Shift+5' },
      { separator: true },
      { label: 'Run Task' },
      { label: 'Run Build Task...', shortcut: 'Ctrl+Shift+B' },
      { separator: true },
      { label: 'Configure Build Task...', shortcut: 'Ctrl+Shift+C' },
    ],
  },
  {
    label: 'Help',
    items: [
      { label: 'Welcome', shortcut: 'F1' },
      { label: 'Keyboard Shortcuts', shortcut: 'Ctrl+Shift+P' },
      { label: 'Welcome', shortcut: 'F1' },
      { label: 'Keyboard Shortcuts', shortcut: 'Ctrl+Shift+P' },
    ],
  },
];

export const sidebarIcons = [
  { id: 'explorer', icon: VscFiles, label: 'Explorer' },
  { id: 'search', icon: VscSearch, label: 'Search' },
  { id: 'scm', icon: VscSourceControl, label: 'Source Control' },
  { id: 'debug', icon: VscDebugAlt, label: 'Run and Debug' },
  { id: 'extensions', icon: VscExtensions, label: 'Extensions' },
  { id: 'account', icon: VscAccount, label: 'Accounts' },
  { id: 'settings', icon: VscSettingsGear, label: 'Settings' },
];

export const sidebarLinks: SidebarLinksType[] = [
  {
    label: 'Welcome',
    icon: VscHome,
    color: '#4ade80', // green-400
    href: '/',
  },
  {
    label: 'About Me',
    icon: VscAccount,
    color: '#60a5fa', // blue-400
    href: '/about-me',
  },
  {
    label: 'Projects',
    icon: VscBriefcase,
    color: '#f472b6', // pink-400
    href: '/projects',
  },
  {
    label: 'Blogs',
    icon: VscBook,
    color: '#facc15', // yellow-400
    href: '/blogs',
  },
  {
    label: 'Work Experience',
    icon: VscGraph,
    color: '#a78bfa', // purple-400
    href: '/work-experience',
  },
  {
    label: 'Contact Me',
    icon: VscMail,
    color: '#fb923c', // orange-400
    href: '/contact-me',
  },
];
