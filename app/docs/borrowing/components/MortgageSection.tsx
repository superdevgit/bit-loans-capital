import { H2, H3, P2 } from "@/components/typography";
import { Table } from "../../components/shared";

const MortgageSection = () => {
  const mortgageLoan = [
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
        "Income Verification: Documents proving the borrower's income, such as pay stubs, employment verification letter, or tax returns.",
    },
    {
      number: 4,
      description:
        "Property Documentation: Documents related to the property being mortgaged, such as property deeds, purchase agreements, or appraisal reports.",
    },
    {
      number: 5,
      description:
        "Financial Statements: Personal balance sheet or business financial statements (for self-employed applicants), if applicable.",
    },
  ];
  const categories = [
    {
      number: 1,
      description:
        "Residential Mortgages: Ideal for purchasing or refinancing residential properties, including houses, apartments, or condominiums.",
    },
    {
      number: 2,
      description:
        "Commercial Mortgages: Designed for purchasing or refinancing commercial properties, such as office buildings, retail spaces, or industrial properties.",
    },
    {
      number: 3,
      description:
        "Investment Property Mortgages: Geared towards purchasing or refinancing properties intended for rental income or investment purposes.",
    },
  ];

  const table = [
    {
      row: 1,
      loanAmount: "$100K - $500K",
      normal: {
        loanType: "Normal",
        collateral: "24%",
        interest: "6.50%",
        duration: "15 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "29%",
        interest: "6.50%",
        duration: "15 Years",
      },
    },
    {
      row: 2,
      loanAmount: "$500K - $1M",
      normal: {
        loanType: "Normal",
        collateral: "24%",
        interest: "6.50%",
        duration: "15 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "29%",
        interest: "6.50%",
        duration: "15 Years",
      },
    },
    {
      row: 3,
      loanAmount: "$1M - $5M",
      normal: {
        loanType: "Normal",
        collateral: "22%",
        interest: "6%",
        duration: "20 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "27%",
        interest: "6%",
        duration: "20 Years",
      },
    },
    {
      row: 4,
      loanAmount: "$5M - $10M",
      normal: {
        loanType: "Normal",
        collateral: "22%",
        interest: "5%",
        duration: "20 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "26%",
        interest: "5%",
        duration: "20 Years",
      },
    },

    {
      row: 5,
      loanAmount: "$10M - $50M",
      normal: {
        loanType: "Normal",
        collateral: "20%",
        interest: "4.50%",
        duration: "20 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "26%",
        interest: "4.50%",
        duration: "20 Years",
      },
    },
    {
      row: 6,
      loanAmount: "$50M - $100M",
      normal: {
        loanType: "Normal",
        collateral: "20%",
        interest: "4.50%",
        duration: "30 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "25%",
        interest: "4.50%",
        duration: "30 Years",
      },
    },
  ];

  return (
    <>
      <div id="mortgage-loan" className="space-y-6">
        <H2>Mortgage Loans</H2>
        <P2>
          Bitloanscapital offers mortgage loans to individuals seeking financing
          for real estate purchases or property investments. Our mortgage loans
          provide the necessary capital to support your home ownership dreams or
          real estate ventures. With flexible loan amounts and competitive
          interest rates, our mortgage loans are designed to make property
          ownership more accessible and affordable. Please find the loan table
          below:
        </P2>
        {/* table  */}
        <Table content={table} />
        {/* requirements  */}
        <H3>Mortgage Loan Requirements</H3>
        <div className="space-y-4">
          {mortgageLoan.map(loan => (
            <div key={loan.number} className="flex justify-between">
              <P2 className="">{loan.number}.</P2>
              <P2 className="w-[98%]">{loan.description}</P2>
            </div>
          ))}
        </div>

        {/* categories  */}
        <H3>Mortgage Loan Categories</H3>
        <P2>
          Our mortgage category allows for various types of loans tailored to
          your specific needs:
        </P2>
        <div className="space-y-4">
          {categories.map(category => (
            <div key={category.number} className="flex justify-between">
              <P2 className="">{category.number}.</P2>
              <P2 className="w-[98%]">{category.description}</P2>
            </div>
          ))}
        </div>
        <P2>
          Bitloanscapital aims to make the mortgage process seamless and
          affordable. Our competitive interest rates ensure that you can manage
          your monthly mortgage payments effectively. We offer fixed-rate
          mortgages, where the interest rate remains constant throughout the
          loan term, providing stability and predictability. This makes
          budgeting for your monthly expenses easier. Explore the loan table to
          discover the mortgage options available to you and take a step towards
          property ownership or investment.
        </P2>
      </div>
    </>
  );
};

export default MortgageSection;
