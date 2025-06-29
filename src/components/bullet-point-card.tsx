import { Zap } from "lucide-react";

interface BulletPointCardProps {
  title: string;
  items: string[];
}

const BulletPointCard = ({ title, items }: BulletPointCardProps) => {
  return (
    <div className="rounded-xl border border-neutral-700/50 bg-neutral-800/30 p-6">
      <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
      <ul className="space-y-3 text-gray-300">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Zap className="mt-1 h-4 w-4 flex-shrink-0 text-violet-500" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPointCard;
