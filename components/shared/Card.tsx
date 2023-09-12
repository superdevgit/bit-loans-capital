"use client";

import { H3, P2 } from "@/components/typography";
import { useRouter } from "next/navigation";
import { BsFillCircleFill } from "react-icons/bs";

const Card = ({
  title,
  id,
  description,
  icon,
  className,
  list,
  href,
}: {
  title: string;
  id: string;
  description: string | null;
  icon?: React.ReactNode;
  className?: string;
  list?: string[];
  href?: string;
}) => {
  const router = useRouter();

  return (
    <div
      id={id}
      onClick={() => href && router.push(href)}
      className={`p-8 rounded-md border border-gray-200 space-y-4 ${className} box-shadow hover:shadow-md transition-all ${
        href && "cursor-pointer"
      } }`}
    >
      <div className="h-14 w-14 flex">{icon}</div>
      <H3>{title}</H3>
      {description ? (
        <P2>{description}</P2>
      ) : (
        <div className="space-y-2">
          {list?.map(item => (
            <div className="flex justify-between " key={item}>
              <BsFillCircleFill className="h-1 w-1 mt-3" />
              <P2 className="w-[95%]">{item}</P2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
