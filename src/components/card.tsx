import { cn } from "@/lib/util";
import { FC, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-md border-neutral-800/50 bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
