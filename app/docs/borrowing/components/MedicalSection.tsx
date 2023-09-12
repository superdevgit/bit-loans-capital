import { H2, H3, P2 } from "@/components/typography";
import { Table } from "../../components/shared";

const MedicalSection = () => {
  const medicalLoan = [
    {
      number: 1,
      description:
        "Proof of Identity: Valid government-issued identification document (e.g., passport, driver's license, national ID card).",
    },
    {
      number: 2,
      description:
        "Proof of Address: Documents verifying the borrower's residential address, such as utility bills, bank statements, or rental agreements.",
    },
    {
      number: 3,
      description:
        "Medical Information: Medical invoice or cost estimate from the healthcare provider, relevant medical reports, or documents related to the treatment.",
    },
    {
      number: 4,
      description:
        "Medical Insurance Details: If applicable, provide information about the medical insurance coverage.",
    },
    {
      number: 5,
      description:
        "Loan Application Form: Comprehensive form collecting essential borrower information specific to medical loans.",
    },
  ];

  const table = [
    {
      row: 1,
      loanAmount: "$8K - $50K",
      normal: {
        loanType: "Normal",
        collateral: "$8000",
        interest: "17%",
        duration: "2 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "$10,000",
        interest: "17%",
        duration: "2 Years",
      },
    },
    {
      row: 2,
      loanAmount: "$50K - $100K",
      normal: {
        loanType: "Normal",
        collateral: "16%",
        interest: "17%",
        duration: "2 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "20%",
        interest: "17%",
        duration: "2 Years",
      },
    },
    {
      row: 3,
      loanAmount: "$100K - $500K",
      normal: {
        loanType: "Normal",
        collateral: "15%",
        interest: "16%",
        duration: "3 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "18%",
        interest: "16%",
        duration: "3 Years",
      },
    },
    {
      row: 4,
      loanAmount: "$500K - $1M",
      normal: {
        loanType: "Normal",
        collateral: "15%",
        interest: "15%",
        duration: "4 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "18%",
        interest: "15%",
        duration: "4 Years",
      },
    },
    {
      row: 5,
      loanAmount: "$1M - $5M",
      normal: {
        loanType: "Normal",
        collateral: "13%",
        interest: "15%",
        duration: "5 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "16%",
        interest: "15%",
        duration: "5 Years",
      },
    },
    {
      row: 6,
      loanAmount: "$5M - $10M",
      normal: {
        loanType: "Normal",
        collateral: "12%",
        interest: "15%",
        duration: "6 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "16%",
        interest: "15%",
        duration: "6 Years",
      },
    },
  ];

  return (
    <>
      <div id="medical-loan" className="space-y-6">
        <H2>Medical Loans</H2>
        <P2>
          At Bitloanscapital, we understand that unexpected medical expenses can
          place a financial burden on individuals and families. Our medical loan
          category aims to provide financial support for medical treatments,
          procedures, surgeries, or any other healthcare-related needs. With our
          medical loans, you can access the necessary funds quickly and
          efficiently, allowing you to focus on your health and well-being.
          Please find the loan table below:
        </P2>
        {/* table  */}
        <Table content={table} />
        {/* requirements  */}
        <H3>Medical Loan Requirements</H3>
        <div className="space-y-4">
          {medicalLoan.map(loan => (
            <div key={loan.number} className="flex justify-between">
              <P2 className="">{loan.number}.</P2>
              <P2 className="w-[98%]">{loan.description}</P2>
            </div>
          ))}
        </div>
        <P2>
          At Bitloanscapital, we understand the financial challenges that can
          arise from unexpected medical expenses. Our medical loan category is
          designed to provide financial support for a range of situations.
          Whether you&rsquo;re seeking to fund upcoming medical procedures, currently
          admitted for treatment, or looking to cover the costs of a previous
          procedure, our medical loans can help. We prioritize your well-being
          by offering quick access to funds, ensuring that you can focus on your
          health with peace of mind. Explore the loan table to find the options
          that best suit your medical needs.
        </P2>
      </div>
    </>
  );
};

export default MedicalSection;
