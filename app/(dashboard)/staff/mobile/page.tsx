"use client";

import { Button } from "@/components/shared";
import { useRouter } from "next/navigation";
import {
  HiArrowSmallLeft,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineBanknotes,
  HiOutlineBuildingLibrary,
  HiOutlineCurrencyDollar,
  HiOutlineReceiptRefund,
  HiOutlineScale,
  HiTrash,
} from "react-icons/hi2";
import {
  BitcoinUserAddress,
  InfoCard,
  UserInfo,
} from "../../components/shared";

const ClientPreview = () => {
  // const dispatch = useAppDispatch();
  // const { selectedViewJob } = useAppSelector(state => state.jobs);
  // const { loading, job: data, error } = useAppSelector(state => state.job);
  const router = useRouter();

  // useEffect(() => {
  //   dispatch(fetchJob(selectedViewJob.id!));
  // }, [selectedViewJob]);

  const data = [
    {
      title: "Total Balance",
      value: "$0",
      icon: <HiOutlineBuildingLibrary className="h-14 w-14 text-[#064b6e]" />,
    },
    {
      title: "Available Balance",
      value: "$0",
      icon: <HiOutlineCurrencyDollar className="h-14 w-14 text-[#064b6e]" />,
    },
    {
      title: "Lending Balance",
      value: "$0",
      icon: <HiOutlineScale className="h-14 w-14 text-[#064b6e]" />,
    },
    {
      title: "Total Borrowed",
      value: "$0",
      icon: <HiOutlineBanknotes className="h-14 w-14 text-[#064b6e]" />,
    },
    {
      title: "Total Paid",
      value: "$0",
      icon: <HiOutlineReceiptRefund className="h-14 w-14 text-[#064b6e]" />,
    },
  ];

  return (
    <>
      <main className="flex-1 h-full">
        {/* top  */}
        <div className="flex items-center justify-between p-2.5 border-b border-b-gray-300">
          <Button
            variant={"icon"}
            className={"bg- text-"}
            action={() => {
              // dispatch(setSelectedApplication(data));
              // dispatch(resetApplicantDetails());
              router.push(`../staff`);
            }}
          >
            <HiArrowSmallLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="flex items-center gap-3">
            <Button
              variant={"icon"}
              className={"bg-green-500 text-white"}
              action={() => {
                // dispatch(setSelectedApplication(data));
                // dispatch(resetApplicantDetails());
                // router.push(`../recruiter/view-job/`);
              }}
            >
              <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
              King
            </Button>
            <Button
              variant={"icon"}
              className={"border-red-500 text-red-500"}
              action={() => {}}
            >
              <HiTrash className="h-4 w-4" />
              Queen
            </Button>
          </div>
        </div>
        {/* bottom  */}
        <div className="p-4">
          <BitcoinUserAddress address="bc1q3260t464ejh497ygp6jgch9ernvhh9j4sukm7j" />
          {/* cards  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* cards */}
            {data.map((item, i) => (
              <InfoCard
                key={i}
                title={item.title}
                description={item.value}
                icon={item.icon}
              />
            ))}
          </div>
          {/* client info  */}
          <UserInfo data={userInfo} />
        </div>
      </main>
    </>
  );
};

export default ClientPreview;

const userInfo = {
  name: "Example Name",
  address: "bc1q3260t464ejh497ygp6jgch9ernvhh9j4sukm7j",
  gender: "**",
  age: "00",
  email: "expamle@company.com",
};
