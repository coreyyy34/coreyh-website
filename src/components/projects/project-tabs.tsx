import { cn } from "@/lib/util";
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
		<div className="relative flex max-w-lg space-x-2 rounded-lg bg-neutral-900/50 p-1 my-4 mx-auto">
			{tabs.map((tab, index) => (
				<button
					key={index}
					onClick={() => setActiveTab(tab)}
					className={cn(
						"relative z-10 flex-1 px-3 py-1.5 text-sm font-medium transition-colors",
						"focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
					)}
				>
					{activeTab === tab && (
						<motion.div
							layoutId="active-tab"
							className="absolute inset-0 rounded-md bg-violet-600"
							style={{ zIndex: -1 }}
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
