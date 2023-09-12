"use client";
import { HiOutlineBuildingLibrary, HiOutlineCurrencyDollar, HiOutlineScale, HiOutlineBanknotes, HiOutlineReceiptRefund } from "react-icons/hi2";
import {
  BitcoinUserAddress,
  ClientItem,
  InfoCard,
  UserInfo,
} from "../../components/shared";

// // COMPONENTS
// import { Button, Loader } from "@/components/shared";
// import { H1, H3, H5, P1, P2, P4 } from "@/components/typography";

// // ASSETS
// import illustration1 from "../../assets/recruiter/recruiter_illustration1.svg";
// // ASSETS
// import { HiOutlineArrowTopRightOnSquare, HiTrash } from "react-icons/hi2";
// import businessIcon from "../../assets/business_center_job_icons.svg";
// import dateIcon from "../../assets/date_range_joblist_icon.svg";
// import locationIcon from "../../assets/location_on_job_icons.svg";

// import { resetApplicantDetails } from "context/features/application/getApplicantDetailsSlice";
// import { setSelectedApplication } from "context/features/application/getApplicantsSlice";
// import { fetchJob } from "context/features/job/jobSlice";
// import { fetchJobsPerRecruiter } from "context/features/job/jobsPerRecruiterSlice";
// import { setSelectedViewJob } from "context/features/job/jobsSlice";
// import { useAppDispatch, useAppSelector } from "context/hooks";
// import { motion as m } from "framer-motion";
// import { useSession } from "next-auth/react";
// import { useEffect, useRef } from "react";
// import { pageVariants } from "../../animations";
// import ApplicantsPlaceholder from "./ApplicantsPlaceholder";

// ====================================
// JobPost PAGE COMPONENTS ////////
// ====================================
export default function RecruiterPage() {
  // redux
  // const dispatch = useAppDispatch();
  // const { loading, jobs, error } = useAppSelector(
  //   state => state.jobsPerRecruiter
  // );
  // const { user } = useAppSelector(state => state.login);
  // const { selectedViewJob } = useAppSelector(state => state.jobs);

  // const pathname = usePathname()!;

  // const { data } = useSession();

  // useEffect(() => {
  //   (async () => {
  //     dispatch(fetchJobsPerRecruiter(user.email));
  //     dispatch(setSelectedViewJob(undefined));

  //     console.log("Jobs ", jobs);
  //   })();
  // }, [data?.user?.email]);

  const staffs = [
    {
      name: "Staff 1",
      email: "",
      active: true,
    },
    {
      name: "Staff 2",
      email: "",
    },
    {
      name: "Staff 3",
      email: "",
    },
    {
      name: "Staff 4",
      email: "",
    },
  ];

  // RETURN ///////////////////////////
  return (
    <main className="flex md:flex-1 h-full">
      <div className="w-full md:w-2/5 border-r border-gray-300 overflow-y-auto">
        <div>
          {staffs.map((staff, i) => (
            <ClientItem key={i} item={staff} href="../admin/staff/mobile/" />
          ))}
        </div>
        {/* {loading ? (
          <Loader />
        ) : staffs && staffs.length > 0 ? (
        ) : error ? (
          <p>{error}</p>
        ) : (
          <JobPlaceholder />
        )} */}
      </div>
      <div className="hidden md:block md:w-2/3">
        {/* {selectedViewJob ? <StaffPreview /> : <ApplicantsPlaceholder />} */}
        <StaffPreview />
      </div>
    </main>
  );
}

////////////////////////////////////////
// EXTENDED COMPONENTS /////////////////

// const JobPlaceholder = () => {
//   const router = useRouter();

//   return (
//     <div className="flex items-center justify-center h-full">
//       <div className="px-10 space-y-6 text-center">
//         <Image
//           src={illustration1}
//           alt={"ellipse placeholder"}
//           width={180}
//           className="mx-auto"
//         />
//         <P2>
//           Get started by publishing your job opening and reaching out to a pool
//           of potential candidates
//         </P2>
//         <Button
//           variant={"primary"}
//           className="w-[50%]"
//           action={() => router.push("/create-job")}
//         >
//           Post a Job
//         </Button>
//       </div>
//     </div>
//   );
// };

const StaffPreview = () => {
  // const dispatch = useAppDispatch();
  // const { selectedViewJob } = useAppSelector(state => state.jobs);
  // const { loading, job: data, error } = useAppSelector(state => state.job);
  // const router = useRouter();

  // useEffect(() => {
  //   dispatch(fetchJob(selectedViewJob.id!));
  // }, [selectedViewJob]);

  const dataTop = [
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
  ];
  const dataBottom = [
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
          <BitcoinUserAddress address="bc1q3260t464ejh497ygp6jgch9ernvhh9j4sukm7j" />
          <div className="flex items-center gap-3">
            {/* <Button
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
            </Button> */}
            {/* <Button
              variant={"icon"}
              className={"border-red-500 text-red-500"}
              action={() => {}}
            >
              <HiTrash className="h-4 w-4" />
              Delete
            </Button> */}
          </div>
        </div>
        {/* bottom  */}
        <div className="p-8">
          {/* cards  */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {/* cards */}
              {dataTop.map((item, i) => (
                <InfoCard
                  key={i}
                  title={item.title}
                  description={item.value}
                  icon={item.icon}
                />
              ))}
            </div>
            {/* cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {/* cards */}
              {dataBottom.map((item, i) => (
                <InfoCard
                  key={i}
                  title={item.title}
                  description={item.value}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
          {/* staff info  */}
          <UserInfo data={userInfo} />
        </div>
      </main>
    </>
  );
};

const userInfo = {
  name: "Example Name",
  address: "bc1q3260t464ejh497ygp6jgch9ernvhh9j4sukm7j",
  gender: "**",
  age: "00",
  email: "expamle@company.com",
};
