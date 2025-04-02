import { ReactNode } from "react";
import { TechStack } from "./technology.type";

/**
 * Represents a project with detailed attributes.
 */
export type Project = {
	/**
	 * The title of the project.
	 */
	title: string;

	/**
	 * The type of the project.
	 */
	type:
		| "Full Stack Web Application"
		| "Frontend Application"
		| "Backend Application"
		| "JavaFX Application";

	/**
	 * A detailed description of the project, explaining its purpose and functionality.
	 */
	description: string;

	/**
	 * The category of the project.
	 */
	category: "personal" | "university";

	/**
	 * The type of university project, which is only applicable if `category` is "university".
	 */
	universityProjectType?: "individual" | "pair" | "group";

	/**
	 * The technologies used in the project.
	 */
	technologies: TechStack;

	/**
	 * A URL to the project's source code repository.
	 */
	sourceCode?: string;

	/**
	 * A URL to a live demo or hosted version of the project.
	 */
	demo?: string;

	/**
	 * A URL to an imaging representing the project.
	 */
	imageUrl?: string;

	/**
	 * An icon representing the project, used when an image URL is not present.
	 */
	icon?: ReactNode;
};
