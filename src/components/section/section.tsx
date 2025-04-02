import { FC, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
	id: string;
}

const Section: FC<SectionProps> = ({ id, children }) => {
	return (
		<section id={id} className="relative w-full py-20 md:py-32">
			{children}
		</section>
	);
};

export default Section;
