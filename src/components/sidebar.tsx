import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
