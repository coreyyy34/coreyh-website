import { NAVIGATION } from "@/config/navigation";
import EducationCard from "../education-card";
import Section from "../section/section";
import SectionContent from "../section/section-content";
import SectionTitle from "../section/section-title";

export const EducationSection = () => {
  return (
    <Section id={NAVIGATION.education.id}>
      <SectionTitle
        title="Education"
        badge="Academic Background"
        description="A summary of my academic journey."
      />
      <SectionContent>
        <div className="mx-auto max-w-xl">
          <EducationCard />
        </div>
      </SectionContent>
    </Section>
  );
};
