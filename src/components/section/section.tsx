"use client";

import { cn } from "@/lib/util";
import { motion } from "motion/react";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { containerVariants } from "../animations/variants";

interface SectionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  id: string;
}

const Section: FC<SectionProps> = ({ id, className, children }) => {
  return (
    <motion.section
      id={id}
      className={cn("relative w-full py-20 md:py-32", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
