import { P2 } from "@/components/typography";
import { HiUserCircle } from "react-icons/hi2";

const UserInfo = ({ data }: { data: any }) => {
  return (
    <div className="flex-1 p-4 xl:p-8 md:overflow-y-auto">
      {/* basic info */}
      <div className="md:flex items-center gap-8">
        <div className="flex">
          <HiUserCircle className="h-20 w-20 text-gray-400" />
          {/* image here  */}
        </div>

        <div className="space-y-4">
          <P2 className="text-3xl">Name: {data.name}</P2>
          <P2 className="text-3xl">Address: {data.address}</P2>
        </div>
      </div>
      {/* other info  */}

      <div className="flex items-center gap-8 mt-4">
        <div className="hidden md:flex w-20" />

        <div className="space-y-4">
          <P2 className="text-3xl">Email: {data.email}</P2>
          <P2 className="text-3xl">Gender: {data.gender}</P2>
          <P2 className="text-3xl">Age: {data.age}</P2>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;