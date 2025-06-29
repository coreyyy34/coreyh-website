"use client";

import { motion } from "motion/react";
import { FC } from "react";
import { containerVariants, itemVariants } from "../animations/variants";
import Badge from "../badge";

interface SectionTitleProps {
  title?: string;
  badge?: string;
  description?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, badge, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {badge && (
        <motion.div variants={itemVariants}>
          <Badge text={badge} />
        </motion.div>
      )}
      {title && (
        <motion.h1 className="text-5xl font-bold" variants={itemVariants}>
          {title}
        </motion.h1>
      )}
      {description && (
        <motion.p className="text-neutral-300" variants={itemVariants}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
