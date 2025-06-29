import Card from "./card";

const EducationCard = () => {
  return (
    <div className="relative flex gap-4">
      <div className="bg-gradient absolute top-[calc(2rem+1px)] bottom-0 left-[1rem] z-0 w-0.5" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="shadow-gradient rounded-full border border-violet-500 p-4"></div>
      </div>

      <Card className="space-y-6 rounded-2xl bg-neutral-900 p-6 shadow-md">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Bachelor of Engineering (Honours)
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            <span className="font-medium text-violet-500">
              University of Canterbury
            </span>{" "}
            • 2023 - Present
          </p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-neutral-300">
          <div>
            <h4 className="mb-1 font-semibold text-white">Overview</h4>
            <p>
              I am currently pursuing a degree in Engineering, specializing in
              Software Engineering, with a strong emphasis on both theoretical
              foundations and hands-on practical experience. Heavily project
              based, involving collaboration in team environments to design,
              develop, and deliver software solutions.
            </p>
          </div>

          <hr className="border-neutral-800" />

          <div>
            <h4 className="mb-1 font-semibold text-white">
              Relevant Coursework
            </h4>
            <p>
              My coursework spans core areas of software engineering, including
              software design, algorithms, databases, computer networks, and web
              architectures. It also includes human-computer interaction,
              artificial intelligence, and engineering-focused topics such as
              project management, economics, and professional communication.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EducationCard;
