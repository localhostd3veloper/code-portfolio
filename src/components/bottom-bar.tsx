import {
  VscBellDot,
  VscBracketDot,
  VscCheckAll,
  VscCloudUpload,
  VscCopilot,
  VscError,
  VscGitCommit,
  VscHistory,
  VscRemote,
  VscSourceControl,
  VscWarning,
} from 'react-icons/vsc';

export default function BottomBar() {
  return (
    <div className="bg-sidebar border-border text-muted flex h-6 w-full justify-between border-t text-xs select-none">
      <div className="flex gap-1">
        <div className="flex items-center justify-center bg-blue-500 px-2">
          <VscRemote size={16} />
        </div>
        <div className="hidden items-center justify-center gap-1 md:flex">
          <VscSourceControl size={15} />
          <p>main*</p>
          <VscCloudUpload className="ml-2" size={15} />
          <VscError className="ml-2" size={15} /> 0
          <VscWarning size={15} /> 0
          <div title="WakaTime" className="flex items-center gap-1">
            <VscHistory className="ml-1" size={15} /> 7 hrs 45 mins
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 pr-4 md:gap-3">
        <VscGitCommit size={15} className="hidden md:block" />
        localhostd3veloper (45 mins ago)
        <p className="hidden items-center gap-1 md:flex">Ln 23, Col 3</p>
        <p className="hidden items-center gap-1 md:flex"> UTF-8</p>
        <span className="hidden items-center gap-1 md:flex">
          <VscBracketDot size={15} /> Typescript JSX
        </span>
        <VscCopilot size={15} className="hidden md:block" />
        <VscCheckAll size={15} className="-mr-2" /> Prettier
        <VscBellDot size={15} />
      </div>
    </div>
  );
}
