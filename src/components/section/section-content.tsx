"use client";

import { cn } from "@/lib/util";
import { motion } from "motion/react";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { itemVariants } from "../animations/variants";

interface SectionContentProps
  extends HTMLAttributes<HTMLElement>,
    PropsWithChildren {
  badge?: string;
  title?: string;
  description?: string;
}

const SectionContent: FC<SectionContentProps> = ({ children, className }) => {
  // used to load the content after the section badge, title, description
  const variant = {
    ...itemVariants,
    visible: {
      ...itemVariants.visible,
      transition: {
        ...itemVariants.visible.transition,
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={variant}
      className={cn("mx-auto max-w-screen-xl px-8", className)}
    >
      {children}
    </motion.div>
  );
};

export default SectionContent;
