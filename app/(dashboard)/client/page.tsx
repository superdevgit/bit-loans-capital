"use client";
import { Button, Popup } from "@/components/shared";
import { H2, H3 } from "@/components/typography";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { HiOutlineArrowTopRightOnSquare, HiOutlineBanknotes, HiOutlineBuildingLibrary, HiOutlineCurrencyDollar, HiOutlineReceiptRefund, HiOutlineScale, HiUserCircle } from "react-icons/hi2";
import { BitcoinUserAddress, InfoCard, UserInfo } from "../components/shared";
import LendingForm from "./components/LendingForm";
import BorrowingForm from "./components/BorrowingForm";
import WithdrawForm from "./components/WithdrawForm";
import RepayForm from "./components/RepayForm";

// COMPONENTS
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

  const clients = [
    {
      name: "Staff 1",
      email: "",
      active: true,
    },
    {
      name: "Staff 2",
      email: "",
    },
  ];

  // RETURN ///////////////////////////
  return (
    <main className="flex md:flex-1 h-full">
      <div className="w-full">
        {/* {selectedViewJob ? <ClientPreview /> : <ApplicantsPlaceholder />} */}
        <ClientPreview />
      </div>
    </main>
  );
}

////////////////////////////////////////
// EXTENDED COMPONENTS /////////////////
const ClientItem = ({ item }: { item: any }) => {
  const router = useRouter();
  const windowWidth = useRef(window.innerWidth);

  // const dispatch = useAppDispatch();
  // const { selectedViewJob } = useAppSelector(state => state.jobs);

  // let description = item.description;

  // if (description.length > 100) {
  //   description = description.substring(0, 100) + "...";
  // }

  return (
    <div
      className={`cursor-pointer flex items-center gap-2 p-3 py-4 ${
        // selectedViewJob?.id === item.id
        item.active ? "border-l-2 border-l-green-500 bg-gray-100" : ""
      } border-b border-b-gray-300 hover:bg-gray-100`}
      onClick={() => {
        // dispatch(setSelectedViewJob(item));

        if (windowWidth.current < 768) {
          router.push(`../recruiter/mobile/`);
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

const ClientPreview = () => {
  // const dispatch = useAppDispatch();
  // const { selectedViewJob } = useAppSelector(state => state.jobs);
  // const { loading, job: data, error } = useAppSelector(state => state.job);
  // const router = useRouter();

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

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <main className="flex-1 border-r border-b-gray-300 h-full">
        {/* top  */}
        <div className="flex flex-col xl:flex-row gap-3 items-center justify-between p-2.5 border-b border-b-gray-300">
          <BitcoinUserAddress
            address={"bc1q3260t464ejh497ygp6jgch9ernvhh9j4sukm7j"}
          />
          <div className="flex items-center gap-3 pr-8">
            <Button
              variant={"icon"}
              className={"bg-green-500 text-white"}
              action={() => {
                setShowPopup(!showPopup);
              }}
            >
              <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
              Perform transaction
            </Button>
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
        <div className="flex flex-col xl:flex-row h-[94%]">
          {/* left - client info  */}
          <div className="flex-1 p-4 xl:p-8 md:overflow-y-auto">
            <UserInfo data={userInfo} />
          </div>
          {/*  right - cards  */}
          <div className="flex-1 xl:border-l xl:border-l-gray-300 p-4 xl:p-8 space-y-4 xl:space-y-8 md:overflow-y-auto">
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
        </div>
      </main>
      {showPopup && (
        <Popup closePopup={setShowPopup}>
          <PerformActionForm closePopup={setShowPopup} />
        </Popup>
      )}
    </>
  );
};

const PerformActionForm = ({
  closePopup,
}: {
  closePopup: (arg: boolean) => void;
}) => {
  const closePopupForm = () => {
    closePopup(false);
  };
  const toggleTransactionOptions = () => {};
  const validateLendingAmount = () => {};
  // const validateBorrowingAmount = ()=> {}

  const [transactionType, setTransactionType] = useState("lending");

  return (
    //
    <>
      <H2>Transaction Details</H2>

      <label htmlFor="transaction-type">Transaction Type:</label>
      <select
        value={transactionType}
        id="transaction-type"
        onChange={e => setTransactionType(e.target.value)}
      >
        <option value="lending">Lending</option>
        <option value="borrowing">Borrowing</option>
        <option value="withdraw">Withdraw</option>
        <option value="repay">Repay</option>
      </select>

      {transactionType === "lending" ? (
        <LendingForm />
      ) : transactionType === "borrowing" ? (
        <BorrowingForm />
      ) : transactionType === "withdraw" ? (
        <WithdrawForm />
      ) : transactionType === "repay" ? (
        <RepayForm />
      ) : null}
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
