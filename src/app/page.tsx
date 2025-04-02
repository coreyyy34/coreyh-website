import {
	HeroSection,
	ProjectsSection,
	TechStackSection,
	ContactSection,
} from "@/components/sections";
import { Footer } from "@/components/footer";

export default function Home() {
	return (
		<main className="w-full min-h-screen text-white">
			<HeroSection />
			<ProjectsSection />
			<TechStackSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
