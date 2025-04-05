import {
  VscCloudUpload,
  VscError,
  VscHistory,
  VscRemote,
  VscSourceControl,
  VscWarning,
} from 'react-icons/vsc';

export default function BottomBar() {
  return (
    <div className="bg-sidebar text-xs border-t border-border text-white flex justify-between w-full  select-none h-6">
      <div className="flex gap-1">
        <div className="flex items-center justify-center px-2 bg-blue-500">
          <VscRemote size={16} />
        </div>
        <div className="flex items-center justify-center gap-1">
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
      <div className="ml-2"></div>
    </div>
  );
}
