import { H2 } from "@/components/typography";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="px-5 py-5 border-b border-b-gray-300 mb-">
      <H2 className="!uppercase !text-4xl">{title}</H2>
    </div>
  );
};

export default Heading;
