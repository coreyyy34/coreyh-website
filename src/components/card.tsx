import { cn } from "@/lib/util";
import { FC, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
	className?: string;
}

const Card: FC<CardProps> = ({ className, children }) => {
	return (
		<div
			className={cn(
				"bg-neutral-900 border-neutral-800/50 rounded-md",
				className
			)}
		>
			{children}
		</div>
	);
};

export default Card;
