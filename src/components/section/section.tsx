import { cn } from "@/lib/util";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
	id: string;
}

const Section: FC<SectionProps> = ({ id, className, children }) => {
	return (
		<section
			id={id}
			className={cn("relative w-full py-20 md:py-32", className)}
		>
			{children}
		</section>
	);
};

export default Section;
