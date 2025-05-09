import { cn } from "@/lib/util";
import { Button } from "../button";
import { Link } from "lucide-react";
import { Project } from "@/types/project.type";
import { FC } from "react";

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className="bg-neutral-900 border-neutral-800/50 rounded-md">
			<img src="https://placehold.co/1200x800" className="rounded-t-md" />
			<div className={cn("px-6 py-4 border-b border-zinc-800/50")}>
				<h3 className={cn("text-xl font-bold text-white")}>
					{project.title}
				</h3>
				<p className={cn("text-gray-400 text-sm mt-1")}>
					{project.type}
				</p>
			</div>
			<div className="space-y-4 py-4">
				<div className="px-6">
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-500">
							{getProjectLabel(project)}
						</span>
					</div>
					<p className="text-gray-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, eveniet placeat molestiae cum id qui
						commodi natus at ipsa et!
					</p>
				</div>
				{/* <div className="flex flex-wrap gap-2 mt-4">
				{project.technologies.map((tag, i) => (
                    <span
					key={i}
					className={`px-2 py-1 bg-${tag.primaryColor}-500/10 text-${tag.primaryColor}-400 text-xs rounded-full`}
                    >
					{tag.name}
                    </span>
					))}
					</div> */}
				<div className="flex justify-between mt-6 px-6 mx-4">
					<Button variant="outline">
						<i className="devicon-github-original mr-2"></i> Github
					</Button>
					<Button>View More</Button>
				</div>
			</div>
		</div>
	);
};

const getProjectLabel = (project: Project): string => {
	if (project.category === "personal") {
		return "Personal Project";
	} else if (project.category === "university") {
		let label = "University Project";
		if (project.universityProjectType) {
			const capitalized =
				project.universityProjectType.charAt(0).toUpperCase() +
				project.universityProjectType.slice(1);
			label += ` (${capitalized})`;
		}
		return label;
	}
	return "Project";
};
