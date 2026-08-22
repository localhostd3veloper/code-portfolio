import { themes } from '@/constants/themes';

import { resolveRoute, routeAliases } from '@/utils/terminal-routes';

export const commandNames = [
  'help',
  'whoami',
  'ls',
  'socials',
  'sudo',
  'clear',
  'date',
  'echo',
  'theme',
  'open',
  'cd',
] as const;

const KNOWN_COMMANDS = new Set<string>(commandNames);
const ARG_COMMANDS = new Set(['open', 'cd', 'theme']);

export const isKnownCommand = (word: string): boolean => {
  const key = word.toLowerCase();
  return KNOWN_COMMANDS.has(key) || resolveRoute(key) !== null;
};

const argCandidates = (command: string): string[] => {
  switch (command.toLowerCase()) {
    case 'open':
    case 'cd':
      return Object.keys(routeAliases);
    case 'theme':
      return themes.map((t) => t.id);
    default:
      return [];
  }
};

export interface Completion {
  candidates: string[];
  applyTo: (input: string) => string;
}

export const getCompletions = (input: string): Completion => {
  const hasTrailingSpace = /\s$/.test(input);
  const parts = input.split(/\s+/).filter(Boolean);
  const firstWord = parts[0] ?? '';
  const isCompletingFirstWord = parts.length <= 1 && !hasTrailingSpace;

  if (isCompletingFirstWord && !ARG_COMMANDS.has(firstWord.toLowerCase())) {
    const candidates = commandNames.filter((name) =>
      name.startsWith(firstWord.toLowerCase()),
    );
    return {
      candidates,
      applyTo: (value) => (candidates.length === 1 ? `${candidates[0]} ` : value),
    };
  }

  const command = firstWord.toLowerCase();
  const partial =
    isCompletingFirstWord || hasTrailingSpace ? '' : parts[parts.length - 1];
  const candidates = argCandidates(command).filter((c) =>
    c.startsWith(partial.toLowerCase()),
  );

  return {
    candidates,
    applyTo: (value) => {
      if (candidates.length !== 1) return value;
      if (isCompletingFirstWord) return `${command} ${candidates[0]} `;
      const base = hasTrailingSpace
        ? value
        : value.slice(0, value.length - partial.length);
      return `${base}${candidates[0]} `;
    },
  };
};
