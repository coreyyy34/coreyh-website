import {
  TECH_STACK_DEV_TOOLS_LIST,
  TECH_STACK_LANGUAGES_LIST,
  TECH_STACK_LIBRARIES_LIST,
} from "@/config/technology";
import { InfiniteMovingCards } from "../aceternity/infinite-moving-cards";
import Section from "../section/section";
import SectionContent from "../section/section-content";
import SectionTitle from "../section/section-title";
import TechCard from "../tech-card";

export const TechStackSection = () => {
  return (
    <Section id="tech-stack">
      <SectionTitle
        title="Tools & Technologies"
        badge="Tech Stack"
        description="A list of the languages, frameworks, and tools I use to build modern applications."
      />
      <SectionContent>
        <InfiniteMovingCards direction="left" speed="slow">
          {TECH_STACK_LANGUAGES_LIST.map((technology, index) => (
            <TechCard key={index} technology={technology} />
          ))}
        </InfiniteMovingCards>
        <InfiniteMovingCards direction="right" speed="slow">
          {TECH_STACK_LIBRARIES_LIST.map((technology, index) => (
            <TechCard key={index} technology={technology} />
          ))}
        </InfiniteMovingCards>
        <InfiniteMovingCards direction="left" speed="slow">
          {TECH_STACK_DEV_TOOLS_LIST.map((technology, index) => (
            <TechCard key={index} technology={technology} />
          ))}
        </InfiniteMovingCards>
      </SectionContent>
    </Section>
  );
};
