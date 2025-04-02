import { cn } from "@/lib/util";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface SectionContentProps
	extends HTMLAttributes<HTMLElement>,
		PropsWithChildren {
	badge?: string;
	title?: string;
	description?: string;
}

const SectionContent: FC<SectionContentProps> = ({
	badge,
	title,
	description,
	children,
	className,
}) => {
	return (
		<div className={cn("max-w-screen-xl mx-auto px-8", className)}>
			{(badge || title || description) && (
				<div className="text-center mb-16">
					{/* {badge && <Badge text={badge} />} */}
					{title && (
						<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-500">
							{title}
						</h2>
					)}
					{description && (
						<p className="text-gray-400 max-w-xl mx-auto">
							{description}
						</p>
					)}
				</div>
			)}
			{children}
		</div>
	);
};

export default SectionContent;
