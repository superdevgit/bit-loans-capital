"use client";

import { H3 } from "@/components/typography";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiUserCircle } from "react-icons/hi2";

const ClientItem = ({ item, href }: { item: any, href: string }) => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // const dispatch = useAppDispatch();
  // const { selectedViewJob } = useAppSelector(state => state.jobs);

  // let description = item.description;

  // if (description.length > 100) {
  //   description = description.substring(0, 100) + "...";
  // }

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div
      className={`cursor-pointer flex items-center gap-2 p-3 py-4 ${
        // selectedViewJob?.id === item.id
        item.active ? "border-l-2 border-l-green-500 bg-gray-100" : ""
      } border-b border-b-gray-300 hover:bg-gray-100`}
      onClick={() => {
        // dispatch(setSelectedViewJob(item));
        console.log("windowWidth ", windowWidth);

        if (windowWidth < 768) {
          router.push(href);
        }
      }}
    >
      <div className="flex">
        <HiUserCircle className="h-10 w-10" />
      </div>
      <H3>{item.name}</H3>
      {/* <P4>{description}</P4> */}
      {/* <div className="flex items-center gap-6">
        <button
          onClick={() => {
            dispatch(setSelectedApplication(item));
            dispatch(resetApplicantDetails());
            router.push(`../recruiter/view-job/`);
          }}
          className="flex items-center gap-3 p-1 px-2 text-sm bg-gray-100 rounded"
        >
          <Image src={viewIcon} alt={"view icon"} width={14} />
          View
        </button>
        <button className="flex items-center gap-3 p-1 px-2 text-sm bg-gray-100 rounded">
          <Image src={editIcon} alt={"edit icon"} width={14} />
          Edit
        </button>
        <button className="flex items-center gap-3 p-1 px-2 text-sm text-red-500 bg-gray-100 rounded">
          <Image src={deleteIcon} alt={"delete icon"} width={14} />
          Delete
        </button>
      </div> */}
    </div>
  );
};

export default ClientItem;
