import { ArrowRight, Code } from "lucide-react";
import { Button } from "../button";
import Section from "../section/section";
import { BackgroundBeams } from "../aceternity/background-beams";
import SectionContent from "../section/section-content";
import { TypewriterEffectSmooth } from "../aceternity/typewriter-effect";
import Badge from "../badge";

export const HeroSection = () => {
	const words = [
		{ text: "Hi," },
		{ text: "I'm" },
		{ text: "Corey", className: "text-gradient" },
	];

	return (
		<Section id="hero">
			<SectionContent>
				<div className="flex flex-col md:flex-row items-center py-16">
					<div className="md:w-1/2 z-10">
						<Badge text="Student Software Engineer" />
						<h1 className="sr-only">Hi, I&apos;m Corey</h1>
						<TypewriterEffectSmooth
							textClassName="text-5xl md:text-7xl font-bold leading-tight"
							cursorClassName="text-5xl md:text-7xl font-bold leading-tight"
							words={words}
						/>
						<p className="text-lg text-gray-300 mb-8 max-w-xl">
							I&apos;m a{" "}
							<span className="text-gradient">
								software engineering
							</span>{" "}
							student eager to learn and contibute with a focus on
							backend and full-stack development, using modern
							technologies to build intuitive and efficient
							systems.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button>
								Contact Me{" "}
								<ArrowRight className="ml-2" size={16} />
							</Button>

							<Button variant="outline">GitHub</Button>
						</div>
					</div>
					<div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10">
						<div className="relative w-64 h-64 md:w-80 md:h-80">
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 blur-3xl opacity-20"></div>
							<div className="absolute inset-4 rounded-full bg-zinc-900 backdrop-blur-sm"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 p-1">
									<div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
										<Code size={64} />
										{/* <Image
                                        src="/placeholder.svg?height=300&width=300"
                                        alt="Profile"
                                        width={300}
                                        height={300}
                                        className="object-cover"
                                    /> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SectionContent>
			<BackgroundBeams />
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
		</Section>
	);
};
