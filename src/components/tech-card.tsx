import { Technology } from "@/types/technology.type";
import { FC } from "react";
import Card from "./card";

interface TechCardProps {
  technology: Technology;
}

const TechCard: FC<TechCardProps> = ({ technology }) => {
  return (
    <Card>
      <div className="flex flex-col items-center gap-4 px-24 py-2">
        <div
          className={`bg-gradient flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 transition-transform duration-300 group-hover:scale-110`}
        >
          <div className={`flex items-center text-3xl`}>{technology.icon}</div>
        </div>
        <div>
          <h3 className="text-center font-medium text-white">
            {technology.name}
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default TechCard;
