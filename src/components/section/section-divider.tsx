import { cn } from "@/lib/util";
import { cva, type VariantProps } from "class-variance-authority";

const dividerVariants = cva("bg-gradient-to-r w-1/2 mx-auto h-px", {
  variants: {
    color: {
      violet: "from-transparent via-violet-500/50 to-transparent",
      cyan: "from-transparent via-cyan-500/50 to-transparent",
      emerald: "from-transparent via-emerald-500/50 to-transparent",
      neutral: "from-transparent via-neutral-500/50 to-transparent",
    },
  },
  defaultVariants: {
    color: "violet",
  },
});

type SectionDividerProps = VariantProps<typeof dividerVariants> & {
  className?: string;
};

export default function SectionDivider({
  color,
  className,
}: SectionDividerProps) {
  return <div className={cn(dividerVariants({ color }), className)} />;
}
