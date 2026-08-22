import { ReactNode } from 'react';
import { socialMediaLinks } from '@/constants/self';
import { isThemeId, ThemeId, themes } from '@/constants/themes';

import { resolveRoute, routeEntries } from '@/utils/terminal-routes';

export interface RunCommandContext {
  navigate: (href: string) => void;
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}

export type RunCommandResult = { type: 'output'; content: ReactNode } | { type: 'clear' };

const link = (text: string) => <span className="text-blue-400">{text}</span>;
const highlight = (text: string) => <span className="text-green-400">{text}</span>;
const error = (text: string) => <span className="text-red-400">{text}</span>;
export const listOutput = (items: string[]) => (
  <div className="flex flex-wrap gap-x-6 gap-y-1">
    {items.map((item) => (
      <span key={item} className="text-blue-400">
        {item}
      </span>
    ))}
  </div>
);

const helpOutput = (
  <div className="space-y-1">
    <div>Available commands:</div>
    <div>{link('help')} - list available commands</div>
    <div>{link('whoami')} - who this portfolio belongs to</div>
    <div>{link('ls')} - list site pages</div>
    <div>{link('open, cd')} &lt;page&gt; - navigate to a page</div>
    <div>{link('socials')} - list social links</div>
    <div>{link('theme')} [name] - list or switch the color theme</div>
    <div>{link('date')} - print the current date and time</div>
    <div>{link('echo')} &lt;text&gt; - print text back</div>
    <div>{link('clear')} - clear the terminal</div>
  </div>
);

const whoamiOutput = (
  <div>
    {highlight('Gautam Anand')} - Frontend / Full Stack Engineer. Run{' '}
    {link('open about-me')} for the full story.
  </div>
);

const routesOutput = listOutput(routeEntries.map((entry) => entry.slug));

const socialsOutput = (
  <div className="space-y-1">
    {socialMediaLinks.map((social) => (
      <div key={social.name}>
        {link(social.name)}:{' '}
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-blue-400"
        >
          {social.link}
        </a>
      </div>
    ))}
  </div>
);

const sudoOutput = (
  <div>{error('Permission denied: visitor is not in the sudoers file.')}</div>
);

const notFoundOutput = (command: string) => (
  <div>
    {error(`command not found: ${command}`)}. Type {link('help')} for a list of commands.
  </div>
);

const runNavigate = (slug: string | undefined, ctx: RunCommandContext): ReactNode => {
  if (!slug) {
    return <div>usage: open &lt;page&gt;. Try {link('ls')} to see pages.</div>;
  }

  const href = resolveRoute(slug);
  if (!href) {
    return (
      <div>
        {error(`no such page: ${slug}`)}. Try {link('ls')} to see pages.
      </div>
    );
  }

  ctx.navigate(href);
  return <div>Opening {link(href)}...</div>;
};

const runTheme = (name: string | undefined, ctx: RunCommandContext): ReactNode => {
  if (!name) {
    return (
      <div className="space-y-1">
        <div>current theme: {highlight(ctx.theme)}</div>
        {listOutput(themes.map((t) => t.id))}
      </div>
    );
  }

  if (!isThemeId(name)) {
    return (
      <div>
        {error(`no such theme: ${name}`)}. Run {link('theme')} to see options.
      </div>
    );
  }

  ctx.setTheme(name);
  return <div>Switched theme to {highlight(name)}.</div>;
};

export function runCommand(rawInput: string, ctx: RunCommandContext): RunCommandResult {
  const [command, ...args] = rawInput.trim().split(/\s+/);
  const key = command.toLowerCase();

  switch (key) {
    case 'help':
      return { type: 'output', content: helpOutput };
    case 'whoami':
      return { type: 'output', content: whoamiOutput };
    case 'ls':
      return { type: 'output', content: routesOutput };
    case 'socials':
      return { type: 'output', content: socialsOutput };
    case 'sudo':
      return { type: 'output', content: sudoOutput };
    case 'clear':
      return { type: 'clear' };
    case 'date':
      return { type: 'output', content: <span>{new Date().toString()}</span> };
    case 'echo':
      return { type: 'output', content: <span>{args.join(' ')}</span> };
    case 'theme':
      return { type: 'output', content: runTheme(args[0], ctx) };
    case 'open':
    case 'cd':
      return { type: 'output', content: runNavigate(args[0], ctx) };
    default: {
      const href = resolveRoute(key);
      if (href) {
        ctx.navigate(href);
        return { type: 'output', content: <div>Opening {link(href)}...</div> };
      }
      return { type: 'output', content: notFoundOutput(key) };
    }
  }
}
