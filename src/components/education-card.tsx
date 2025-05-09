import Card from "./card";

const EducationCard = () => {
	return (
		<div className="flex gap-4 relative">
			<div className="absolute left-[1rem] top-[calc(2rem+1px)] bottom-0 w-0.5 z-0 bg-gradient" />

			{/* Timeline dot */}
			<div className="flex flex-col items-center relative z-10">
				<div className="p-4 rounded-full shadow-gradient border border-violet-500"></div>
			</div>

			<Card className="p-6 space-y-6 bg-neutral-900 rounded-2xl shadow-md">
				<div>
					<h3 className="text-2xl font-semibold text-white">
						Bachelor of Engineering (Honours)
					</h3>
					<p className="text-sm text-neutral-400 mt-1">
						<span className="text-violet-500 font-medium">
							University of Canterbury
						</span>{" "}
						• 2023 – Present
					</p>
				</div>

				<div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
					<div>
						<h4 className="font-semibold text-white mb-1">
							Overview
						</h4>
						<p>
							I am currently pursuing a degree in Engineering,
							specializing in Software Engineering, with a strong
							emphasis on both theoretical foundations and
							hands-on practical experience. Heavily project
							based, involving collaboration in team environments
							to design, develop, and deliver software solutions.
						</p>
					</div>

					<hr className="border-neutral-800" />

					<div>
						<h4 className="font-semibold text-white mb-1">
							Relevant Coursework
						</h4>
						<p>
							My coursework spans core areas of software
							engineering, including software design, algorithms,
							databases, computer networks, and web architectures.
							It also includes human-computer interaction,
							artificial intelligence, and engineering-focused
							topics such as project management, economics, and
							professional communication.
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default EducationCard;
