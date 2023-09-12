import { H3, P2 } from "@/components/typography";

const InfoCard = ({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`space-y-4 p-8 rounded-md box-shadow border border-gray-200 ${className} hover:shadow-md transition-all`}
  >
    <div className="h-14 w-14 flex">{icon}</div>
    <H3>{title}</H3>
    <P2 className="!text-2xl">{description}</P2>
  </div>
);

export default InfoCard;