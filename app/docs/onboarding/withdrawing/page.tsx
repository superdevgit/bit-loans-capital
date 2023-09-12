import { H2, P2 } from "@/components/typography";
import Image from "next/image";

import { Heading } from "../../components/shared";

import image1 from "../perform-action.png";
import image2 from "./withdrawing.png";

const WithdrawingProcess = () => {
  const process2Description = [
    {
      title: "Transaction Type",
      description:
        "Choose Withdraw as the transaction type to open the withdraw form",
    },
    {
      title: "From",
      description:
        "There are two balances to withdraw from, which are: Available & Lending (Lending balance automatically withdraws to available balance)",
    },
    {
      title: "Amount",
      description:
      "Choose the amount you want to withdraw",
    },
    {
      title: "Bitcoin Address",
      description:
        "Input the Bitcoin address intended to receive. ",
    },
    {
      title: "Withdraw",
      description: "Submit the form to withdraw the amount you have chosen to withdraw",
    },
  ];

  return (
    <div className="">
      <Heading title="Withdraw Process" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <div className="space-y-3">
          <H2>Here is how a user can withdraw Bitcoin from Bitloanscapital</H2>
        </div>
        {/* process 1  */}
        <>
          {/* description  */}
          <div className="space-y-3">
            <H2>1. Perform Transaction button </H2>
            <P2>Click to open the transaction pop up</P2>
          </div>
          {/* image  */}
          <div className="flex justify-center shadow-md border w-fit">
            <Image
              src={image1}
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
            <H2>2. Withdraw Form </H2>

            {process2Description.map((item, index) => (
              <DescriptionItem key={index} item={item} />
            ))}
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
      </div>
    </div>
  );
};

export default WithdrawingProcess;

const DescriptionItem = ({ item }: { item: any }) => (
  <div className="flex gap-2">
    <P2 className=""> - {item.title}: </P2>
    <P2 className="">{item.description}</P2>
  </div>
);
