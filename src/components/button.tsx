import { cn } from "@/lib/util";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributeAnchorTarget,
} from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-offset-1 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "relative text-white bg-gradient border-violet-500/30 hover:bg-violet-500/10",
        outline:
          "border border-gray-300 text-white border-violet-500/30 hover:bg-violet-500/10",
      },
      size: {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
        icon: "p-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, href, target, ...props }, ref) => {
    const button = (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );

    return href ? (
      <Link href={href} target={target}>
        {button}
      </Link>
    ) : (
      button
    );
  },
);

Button.displayName = "Button";
