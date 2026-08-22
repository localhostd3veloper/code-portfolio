'use client';

import { VscArrowRight } from 'react-icons/vsc';

import { isKnownCommand } from '@/utils/terminal-completions';

export function ShellPrompt() {
  return (
    <>
      <VscArrowRight size={14} color="#ef4444" />
      <span className="font-semibold text-green-400">visitor@portfolio</span>
      <span>:</span>
      <span className="text-blue-400">~</span>
      <span>$</span>
    </>
  );
}

export function HighlightedInput({ value }: { value: string }) {
  if (!value) return null;

  const spaceIndex = value.search(/\s/);
  const command = spaceIndex === -1 ? value : value.slice(0, spaceIndex);
  const rest = spaceIndex === -1 ? '' : value.slice(spaceIndex);

  return (
    <>
      <span className={isKnownCommand(command) ? 'text-blue-400' : 'text-red-400'}>
        {command}
      </span>
      <span>{rest}</span>
    </>
  );
}
