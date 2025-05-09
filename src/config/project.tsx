import { Project } from "@/types/project.type";
import { Code } from "lucide-react";

export const PROJECTS: Record<string, Project[]> = {
	personal: [
		{
			title: "Uni-Tracker",
			type: "Full Stack Web Application",
			category: "personal",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet placeat molestiae cum id qui commodi natus at ipsa et!",
			technologies: [],
			imageUrl: "/projects/uni-tracker.png",
		},
		{
			title: "Pallet Labels",
			type: "Frontend Application",
			category: "personal",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet placeat molestiae cum id qui commodi natus at ipsa et!",
			technologies: [],
			imageUrl: "/projects/pallet-labels.png",
		},
	],
	university: [
		{
			title: "HomeHelper",
			type: "Full Stack Web Application",
			category: "university",
			universityProjectType: "group",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet placeat molestiae cum id qui commodi natus at ipsa et!",
			technologies: [],
			icon: <Code size={48} />,
		},
		{
			title: "WINO",
			type: "JavaFX Application",
			category: "university",
			universityProjectType: "group",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet placeat molestiae cum id qui commodi natus at ipsa et!",
			technologies: [],
			imageUrl: "/projects/wino.png",
		},
		{
			title: "GameReview",
			type: "Full Stack Web Application",
			category: "university",
			universityProjectType: "individual",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet placeat molestiae cum id qui commodi natus at ipsa et!",
			technologies: [],
			icon: <Code size={48} />,
		},
		{
			title: "ResourceRush",
			type: "JavaFX Application",
			category: "university",
			universityProjectType: "pair",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet placeat molestiae cum id qui commodi natus at ipsa et!",
			technologies: [],
			imageUrl: "/projects/resource-rush.png",
		},
		{
			title: "Battleships",
			type: "Embedded Application",
			category: "university",
			universityProjectType: "pair",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet placeat molestiae cum id qui commodi natus at ipsa et!",
			technologies: [],
			icon: <Code size={48} />,
		},
	],
};

export const PROJECTS_LIST: Project[] = Object.keys(PROJECTS).flatMap(
	(category) =>
		PROJECTS[category].map((project) => ({
			...project,
		}))
);
