import { ReactNode } from "react";

/**
 * Represents a single technology.
 */
export type Technology = {
	/**
	 * The name of the technology.
	 */
	name: string;

	/**
	 * The icon representing the technology.
	 */
	icon: ReactNode;

	/**
	 * The primary colour associated with the technology.
	 */
	primaryColour: string;

	/**
	 * The secondary colour associated with the technology.
	 */
	secondaryColour: string;
};

/**
 * Represents a list of technologies used in a project.
 * It is an array of `Technology` objects.
 */
export type TechStack = Technology[];
