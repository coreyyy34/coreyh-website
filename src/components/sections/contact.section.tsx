import { NAVIGATION } from "@/config/navigation";
import Section from "../section/section";
import SectionTitle from "../section/section-title";

export const ContactSection = () => {
  return (
    <Section id={NAVIGATION.contact.id}>
      <SectionTitle
        title="Get in Touch"
        badge="Contact Me"
        description="Feel free to reach out. I'm always open to new opportunities and connections."
      />
    </Section>
  );
};
