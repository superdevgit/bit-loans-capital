import { H2, P2 } from "@/components/typography";
import Image from "next/image";

import { Heading } from "../../components/shared";

import image2 from "./profile.png";

const ProfileProcess = () => {
  

  return (
    <div className="">
      <Heading title="Profile" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <div className="space-y-3">
          <H2>Here is how a user can update his/her profile information</H2>
        </div>
        {/* process 1  */}
        <>
          {/* description  */}
          <div className="space-y-3">
            <H2>1. Profile Navigation </H2>
            <P2>Click to open the profile page</P2>
          </div>
          {/* image  */}
          <div className="flex justify-center shadow-md border w-fit">
            <Image
              src={image2}
              width={800}
              // height={500}
              alt="getting started"
              quality={100}
            />
          </div>
        </>
        {/* process 2  */}
        <>
          {/* description  */}
          <div className="space-y-3">
            <H2>2. Profile Form </H2>

            <P2>Update necessary properties</P2>
          </div>
          
        </>
      </div>
    </div>
  );
};

export default ProfileProcess;

const DescriptionItem = ({ item }: { item: any }) => (
  <div className="flex gap-2">
    <P2 className=""> - {item.title}: </P2>
    <P2 className="">{item.description}</P2>
  </div>
);
