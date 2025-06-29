import { motion } from "motion/react";
import { FC } from "react";

interface ProjectTabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ProjectTabs: FC<ProjectTabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="relative mx-auto my-4 flex max-w-lg space-x-2 rounded-lg bg-neutral-900/50 p-1">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(tab)}
          className="relative z-10 px-3 flex-1 py-1.5 text-sm font-medium transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 cursor-pointer"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 rounded-md bg-violet-600 z-[-1]"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
};
