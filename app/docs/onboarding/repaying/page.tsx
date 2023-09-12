import { H2, P2 } from "@/components/typography";
import Image from "next/image";

import { Heading } from "../../components/shared";

import image2 from "./repaying.png";
import image1 from "../perform-action.png";

const PayingProcess = () => {
  const process2Description = [
    {
      title: "Transaction Type",
      description:
        "Choose Paying as the transaction type to open the paying form",
    },
    {
      title: "Amount",
      description:
        "Choose the amount you want to pay, the minimum amount is 0.01 BTC",
    },
    {
      title: "Pay",
      description: "Submit the form to pay the amount you have chosen to pay",
    },
  ];

  return (
    <div className="">
      <Heading title="Repaying Process" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <div className="space-y-3">
          <H2>Here is how a user can repay their loan on Bitloanscapital</H2>
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
            <H2>2. Repaying Form </H2>

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

export default PayingProcess;

const DescriptionItem = ({ item }: { item: any }) => (
  <div className="flex gap-2">
    <P2 className=""> - {item.title}: </P2>
    <P2 className="">{item.description}</P2>
  </div>
);
