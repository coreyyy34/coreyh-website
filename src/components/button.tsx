import { cn } from "@/lib/util";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-medium transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-offset-1",
	{
		variants: {
			variant: {
				primary: "relative text-white bg-gradient",
				outline: "border border-gray-300 text-white",
			},
			size: {
				small: "px-3 py-1.5 text-sm",
				medium: "px-4 py-2 text-base",
				large: "px-6 py-3 text-lg",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "medium",
		},
	}
);

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, size, className, href, ...props }, ref) => {
		const button = (
			<button
				ref={ref}
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
			/>
		);

		return href ? <Link href={href}>{button}</Link> : button;
	}
);

Button.displayName = "Button";
