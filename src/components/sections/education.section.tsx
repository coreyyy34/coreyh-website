import EducationCard from "../education-card";
import Section from "../section/section";
import SectionContent from "../section/section-content";
import SectionTitle from "../section/section-title";

export const EducationSection = () => {
	return (
		<Section id="education">
			<SectionTitle
				title="Education"
				badge="Academic Background"
				description="A summary of my academic journey."
			/>
			<SectionContent>
				<div className="w-1/2 mx-auto">
					<EducationCard />
				</div>
			</SectionContent>
		</Section>
	);
};
