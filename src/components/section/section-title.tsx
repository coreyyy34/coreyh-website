import { FC } from "react";
import Badge from "../badge";

interface SectionTitleProps {
	title?: string;
	badge?: string;
	description?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, badge, description }) => {
	return (
		<div className="flex items-center flex-col gap-4 p-8">
			{badge && <Badge text={badge}></Badge>}
			{title && <h1 className="text-5xl font-bold">{title}</h1>}
			{description && <p className="text-neutral-300">{description}</p>}
		</div>
	);
};

export default SectionTitle;
