"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { BackgroundBeams } from "../aceternity/background-beams";
import { Spotlight } from "../aceternity/spotlight-new";
import { containerVariants, itemVariants } from "../animations/variants";
import Badge from "../badge";
import { Button } from "../button";
import Section from "../section/section";

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const HeroSection = () => {
  return (
    <Section id="hero" className="overflow-hidden py-0 md:py-0">
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {/* <div className="min-h-screen flex justify-center items-center z-50"> */}
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge text="Student Software Engineer" />
          </motion.div>

          <motion.h1
            className="py-4 text-5xl leading-tight font-bold"
            variants={itemVariants}
          >
            Hi, I&apos;m <span className="text-gradient">Corey</span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-center text-lg text-gray-300"
            variants={itemVariants}
          >
            I&apos;m a{" "}
            <span className="text-gradient">software engineering</span> student
            eager to learn and contibute with a focus on backend and full-stack
            development, using modern technologies to build intuitive and
            efficient systems.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={buttonContainerVariants}
          >
            <motion.div variants={buttonVariants}>
              <Button href="mailto:me@coreyh.nz">
                Contact Me <ArrowRight className="ml-2" size={16} />
              </Button>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <Button
                href="https://github.com/coreyyy34"
                target="_blank"
                variant="outline"
              >
                GitHub
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* </div> */}
      </div>

      <Spotlight />
      <BackgroundBeams className="z-0" />
    </Section>
  );
};
