import NavBar from "@/components/navigation";
import SectionDivider from "@/components/section/section-divider";
import {
	ContactSection,
	EducationSection,
	FooterSection,
	HeroSection,
	ProjectsSection,
	TechStackSection,
} from "@/components/sections";

export default function Home() {
	return (
		<main className="w-full min-h-screen text-white">
			<NavBar />
			<HeroSection />
			<SectionDivider color="violet" />
			<ProjectsSection />
			<SectionDivider color="cyan" />
			<EducationSection />
			<SectionDivider color="violet" />
			<TechStackSection />
			<SectionDivider color="cyan" />
			<ContactSection />
			<SectionDivider color="neutral" />
			<FooterSection />
		</main>
	);
}
