import { H2, P2 } from "@/components/typography";
import Image from "next/image";

import { Heading } from "../../components/shared";

import image1 from "../perform-action.png";
import image2 from "./borrowing.png";

const BorrowingProcess = () => {
  const process2Description = [
    {
      title: "Transaction Type",
      description:
        "Choose Borrowing as the transaction type to open the borrowing form",
    },
    {
      title: "Loan Category",
      description:
        "There are four categories to choose from which are: Student, Medical, Mortgage and Standard",
    },
    {
      title: "Loan Type",
      description:
        "There are two categories to choose from which are: Normal and Emergency",
    },
    {
      title: "Amount",
      description:
        "Choose the amount you want to borrow",
    },
    {
      title: "Borrow",
      description: "Submit the form to Borrow the amount you have chosen to Borrow",
    },
  ];

  return (
    <div className="">
      <Heading title="Borrowing Process" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <div className="space-y-3">
          <H2>Here is how a user can borrow from Bitloanscapital</H2>
        </div>
        {/* process 1  */}
        <>
          {/* description  */}
          <div className="space-y-3">
            <H2>1. Perform Transaction button</H2>
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
            <H2>2. Borrowing Form</H2>

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

export default BorrowingProcess;

const DescriptionItem = ({ item }: { item: any }) => (
  <div className="flex gap-2">
    <P2 className=""> - {item.title}: </P2>
    <P2 className="">{item.description}</P2>
  </div>
);
