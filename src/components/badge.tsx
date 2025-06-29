import { FC } from "react";

interface BadgeProps {
  text: string;
}

const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <div className="bg-gradient inline-block rounded-full px-3 py-1 text-sm font-medium text-white">
      {text}
    </div>
  );
};

export default Badge;
