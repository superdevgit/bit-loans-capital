import { H4 } from "@/components/typography";

const Card = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="border border-gray-200 shadow rounded">
      <div
        className={
          "bg-gray-100 border-b border-b-gray-200 p-2.5 flex items-center justify-between"
        }
      >
        <H4>{title}</H4>
      </div>
      <div className="p-5 md:p-8">{children}</div>
    </div>
  );
};

export default Card