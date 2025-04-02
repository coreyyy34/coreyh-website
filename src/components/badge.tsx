import { FC } from "react";

interface BadgeProps {
	text: string;
}

const Badge: FC<BadgeProps> = ({ text }) => {
	return (
		<div className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient">
			{text}
		</div>
	);
};

export default Badge;
