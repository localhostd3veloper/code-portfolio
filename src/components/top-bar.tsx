import {
  VscArrowLeft,
  VscArrowRight,
  VscChromeMaximize,
  VscChromeMinimize,
  VscClose,
  VscCopilot,
  VscVscode,
} from 'react-icons/vsc';
import MenuItems from './menu-items';

export default function TopBar() {
  return (
    <div className="relative z-10 bg-sidebar border-b border-border  flex items-center justify-between w-full  px-2 py-1 text-sm ">
      <div className="flex items-center">
        <VscVscode className="w-5 h-5 text-blue-500 mr-2" />
        <MenuItems />
      </div>
      <div className="flex-1 flex items-center justify-center gap-2">
        <div className="items-center gap-1 hidden md:flex">
          <VscArrowLeft className="w-4 h-4" />
          <VscArrowRight className="w-4 h-4 text-muted" />
        </div>
        <input
          placeholder="code-portfolio"
          className="w-full md:w-1/2 rounded-md bg-editor py-0.5  border border-border flex justify-center text-center text-muted outline-none"
        />
        <VscCopilot className="w-4 h-4 text-muted hidden md:block" />
      </div>
      <div className="hidden items-center gap-2  md:flex">
        <VscChromeMinimize />
        <VscChromeMaximize />
        <VscClose />
      </div>
    </div>
  );
}
