'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useEditorStore } from '@/store';
import { useRouter } from 'next/navigation';

import { HighlightedInput, ShellPrompt } from '@/components/terminal-shell-parts';

import { listOutput, runCommand } from '@/utils/terminal-commands';
import { getCompletions } from '@/utils/terminal-completions';

let shellLineId = 0;

type ShellLine =
  | { id: number; type: 'input'; value: string }
  | { id: number; type: 'output'; content: ReactNode };

const introLine: ShellLine = {
  id: shellLineId++,
  type: 'output',
  content: (
    <div>
      Type <span className="text-blue-400">help</span> to see available commands. Press{' '}
      <span className="text-blue-400">Tab</span> to autocomplete.
    </div>
  ),
};

export default function TerminalShell() {
  const { activeTerminalTab, theme, setTheme } = useEditorStore();
  const router = useRouter();
  const [lines, setLines] = useState<ShellLine[]>([introLine]);
  const [input, setInput] = useState('');
  const [historyPointer, setHistoryPointer] = useState<number | null>(null);
  const commandsRef = useRef<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  useEffect(() => {
    if (activeTerminalTab === 'shell') inputRef.current?.focus();
  }, [activeTerminalTab]);

  const navigateHistory = (direction: 'up' | 'down') => {
    const commands = commandsRef.current;
    if (!commands.length) return;

    if (direction === 'up') {
      const nextIndex =
        historyPointer === null ? commands.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextIndex);
      setInput(commands[nextIndex]);
      return;
    }

    if (historyPointer === null) return;
    const nextIndex = historyPointer + 1;
    if (nextIndex >= commands.length) {
      setHistoryPointer(null);
      setInput('');
      return;
    }
    setHistoryPointer(nextIndex);
    setInput(commands[nextIndex]);
  };

  const submit = () => {
    const trimmed = input.trim();
    setHistoryPointer(null);
    setInput('');

    if (!trimmed) {
      setLines((prev) => [...prev, { id: shellLineId++, type: 'input', value: '' }]);
      return;
    }

    commandsRef.current.push(trimmed);
    const inputLine: ShellLine = { id: shellLineId++, type: 'input', value: trimmed };
    const result = runCommand(trimmed, {
      navigate: (href) => router.push(href),
      theme,
      setTheme,
    });

    if (result.type === 'clear') {
      setLines([]);
      return;
    }

    setLines((prev) => [
      ...prev,
      inputLine,
      { id: shellLineId++, type: 'output', content: result.content },
    ]);
  };

  const completeInput = () => {
    const completion = getCompletions(input);

    if (completion.candidates.length === 1) {
      setInput(completion.applyTo(input));
      return;
    }

    if (completion.candidates.length > 1) {
      setLines((prev) => [
        ...prev,
        { id: shellLineId++, type: 'input', value: input },
        { id: shellLineId++, type: 'output', content: listOutput(completion.candidates) },
      ]);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        submit();
        break;
      case 'Tab':
        event.preventDefault();
        completeInput();
        break;
      case 'ArrowUp':
        event.preventDefault();
        navigateHistory('up');
        break;
      case 'ArrowDown':
        event.preventDefault();
        navigateHistory('down');
        break;
    }
  };

  return (
    <div
      className="flex min-h-0 flex-1 flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={bodyRef} className="flex-1 space-y-1 overflow-y-scroll scroll-smooth">
        {lines.map((line) =>
          line.type === 'input' ? (
            <div key={line.id} className="flex items-center gap-2">
              <ShellPrompt />
              <span>{line.value}</span>
            </div>
          ) : (
            <div key={line.id} className="ml-5">
              {line.content}
            </div>
          ),
        )}
      </div>

      <div className="mt-1 flex items-center gap-2">
        <ShellPrompt />
        <div className="relative flex-1">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 whitespace-pre"
          >
            <HighlightedInput value={input} />
          </div>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            className="caret-foreground w-full bg-transparent text-transparent outline-none"
            aria-label="terminal input"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
