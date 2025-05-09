import { Code2 } from "lucide-react";
import Card from "./card";
import { Technology } from "@/types/technology.type";
import { FC } from "react";

interface TechCardProps {
	technology: Technology;
}

const TechCard: FC<TechCardProps> = ({ technology }) => {
	return (
		<Card className="w-72">
			<div className="flex flex-col items-center gap-4 py-2">
				<div
					className={`w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient`}
				>
					<div className={` text-3xl flex items-center`}>
						{technology.icon}
					</div>
				</div>
				<div>
					<h3 className="font-medium text-center text-white">
						{technology.name}
					</h3>
				</div>
			</div>
		</Card>
	);
};

export default TechCard;
