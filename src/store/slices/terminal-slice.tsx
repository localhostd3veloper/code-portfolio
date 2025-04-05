import { StateCreator } from 'zustand';
import { JSX } from 'react';

export interface LogType {
  id: number;
  logline: JSX.Element;
  timestamp: Date;
}

export interface TerminalSlice {
  logs: LogType[];
  addLog: (log: JSX.Element) => void;
  isTerminalOpen: boolean;
  toggleTerminal: () => void;
}

const MAX_LOGS = 50;

export const createTerminalSlice: StateCreator<TerminalSlice> = (set) => ({
  logs: [
    {
      id: 0,
      logline: (
        <li>
          <span className="text-green-400">✓</span> Starting...
        </li>
      ),
      timestamp: new Date(),
    },
    {
      id: 1,
      logline: (
        <li>
          <span className="text-green-400">✓</span> Ready in 47ms
        </li>
      ),
      timestamp: new Date(),
    },
  ],

  addLog: (log) =>
    set((state) => ({
      logs: [
        ...state.logs,
        {
          id: state.logs.length,
          logline: log,
          timestamp: new Date(),
        },
      ].slice(-MAX_LOGS),
    })),

  isTerminalOpen: true,

  toggleTerminal: () =>
    set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
});
