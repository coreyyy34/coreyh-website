import { Colour } from "@/types/colour.type";

/**
 * Generates Tailwind CSS utility classes based on a color.
 *
 * @param colour - The color to generate the classes for. The color should
 *                 be a valid value from the `Colour` type.
 * @returns An object containing the Tailwind CSS utility classes for
 *          different styles based on the given color.
 */
export const getColorClasses = (colour: Colour) => ({
	from: `from-${colour}-500/20`,
	to: `to-${colour}-500/20`,
	text: `text-${colour}-400`,
	background: `bg-${colour}-500/10`,
	hoverBorder: `hover:border-${colour}-500/50`,
	hoverShadow: `hover:shadow-${colour}-500/10`,
});
