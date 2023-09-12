import { Card } from "@/components/shared";
import { P2 } from "@/components/typography";
import { Heading } from "./components/shared";

import {
  HiOutlineArrowPath,
  HiOutlineChartPie,
  HiOutlineCurrencyDollar,
  HiOutlinePresentationChartLine,
  HiOutlineScale,
  HiOutlineUser,
} from "react-icons/hi2";

const HowItWorks = () => {
  const steps = [
    {
      // icon: <ScaleIcon fill="#0c4d77" /><ScaleIcon fill="#0c4d77" className="text-[#0c4d77] h-full w-full" />,
      icon: <HiOutlineUser className="text-[#0c4d77] h-full w-full" />,
      id: "account-creation",
      title: "1. Account Creation",
      description: null,
      list: [
        "Visit the Bitloanscapital website and click on the 'Sign Up' button.",
        "Fill in the required information to create your account, including username, email address and password.",
        "Agree to the Terms of Service and Privacy Policy.",
        "Complete Sign-up.",
      ],
    },
    {
      // icon: <ScaleIcon fill="#0c4d77" /><ScaleIcon fill="#0c4d77" className="text-[#0c4d77] h-full w-full" />,
      icon: (
        <HiOutlineCurrencyDollar className="text-[#0c4d77] h-full w-full" />
      ),
      id: "account-funding",
      title: "2. Account Funding",
      description: null,
      list: [
        "After creating your account, you will be assigned a Bitloanscapital wallet address.",
        "Deposit funds into your wallet by sending Bitcoin to the provided wallet address.",
        "Wait for the deposit to be processed and reflect on your balance.",
      ],
    },
    {
      // icon: <ScaleIcon fill="#0c4d77" /><ScaleIcon fill="#0c4d77" className="text-[#0c4d77] h-full w-full" />,
      icon: <HiOutlineArrowPath className="text-[#0c4d77] h-full w-full" />,
      id: "borrowing-process",
      title: "3. Borrowing Process",
      description: null,
      list: [
        "Once your account is funded, you can choose to borrow funds by providing collateral.",
        "Select the loan category that fits your needs, such as Student, Medical, Mortgage, or Standard loans.",
        "Review the loan amounts, interest rates, and collateral requirements for each loan category.",
        "Complete the Know Your Customer (KYC) process, if applicable, to verify your identity ",
        "Choose between a Normal Loan or an Emergency Loan. Note that for Normal Loans, the collateral needs to remain in your wallet for at least two months, whereas Emergency Loans are disbursed immediately.",
      ],
    },
    {
      // icon: <ScaleIcon fill="#0c4d77" /><ScaleIcon fill="#0c4d77" className="text-[#0c4d77] h-full w-full" />,
      icon: <HiOutlineChartPie className="text-[#0c4d77] h-full w-full" />,
      id: "lending-process",
      title: "4. Lending Process",
      description: null,
      list: [
        "If you prefer to lend your funds and earn interest, select the lending option.",
        "Specify the amount you wish to lend from your Bitloanscapital wallet.",
        "Confirm your lending selection and proceed.",
        "Your funds will be added to the lending pool, contributing to the available funds for borrowers.",
      ],
    },
    {
      // icon: <ScaleIcon fill="#0c4d77" /><ScaleIcon fill="#0c4d77" className="text-[#0c4d77] h-full w-full" />,
      icon: <HiOutlineScale className="text-[#0c4d77] h-full w-full" />,
      id: "deposit-and-withdrawal",
      title: "5. Deposit and Withdrawal",
      description: null,
      list: [
        "Deposits: To add more funds to your Bitloanscapital wallet, simply send additional Bitcoin to your wallet address and the funds will automatically reflect on your balance.",
        "Withdrawals: If you need to withdraw your funds, navigate to the withdrawal section in your account. You can initiate a withdrawal request, and the funds will be sent to the bitcoin address you provide. Please note that withdrawal processing time may vary depending on blockchain confirmations.",
      ],
    },
    {
      // icon: <ScaleIcon fill="#0c4d77" /><ScaleIcon fill="#0c4d77" className="text-[#0c4d77] h-full w-full" />,
      icon: (
        <HiOutlinePresentationChartLine className="text-[#0c4d77] h-full w-full" />
      ),
      id: "repayment-and-interest",
      title: "6. Repayment and Interest",
      description: null,
      list: [
        "Borrowers are responsible for repaying their loans within the agreed-upon terms.",
        "Interest rates will be applied to the loan amount, and borrowers will be provided with a repayment schedule.",
        "Lenders will earn interest on their lent funds, and the interest will automatically be added to your lent balance.",
        "To pay your loan simply send bitcoin to your Bitloanscapital wallet.",
      ],
    },
  ];

  return (
    <div className="">
      <Heading title="How it works" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <P2>
          Welcome to Bitloanscapital! We&rsquo;ve made the lending and borrowing
          process simple and secure. Here&rsquo;s a step-by-step guide on how it
          works:
        </P2>
        {/* 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, index) => (
            <Card {...step} key={index} />
          ))}
        </div>
        <P2>
          Please remember to carefully read and understand the terms and
          conditions, as well as any specific guidelines provided by
          Bitloanscapital, before engaging in any lending or borrowing
          activities. If you have any further questions, our customer support
          team is here to assist you.
        </P2>
        <P2>
          <span className="text-semibold text-red-500">Disclaimer:</span>
          The lending and borrowing activities involve financial risks. It is
          important to consider the risks and consult with financial
          professionals before making any investment decisions.
        </P2>
      </div>
    </div>
  );
};

export default HowItWorks;
