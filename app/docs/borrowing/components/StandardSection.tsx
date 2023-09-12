import { H2, H3, P2 } from "@/components/typography";
import { Table } from "../../components/shared";

const StandardSection = () => {
  const standardLoan = [
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
        "Proof of Income: Documents providing evidence of the borrower's income, such as pay stubs, employment verification letter, or tax returns.",
    },
    {
      number: 4,
      description:
        "Financial Statements: Personal balance sheet or business financial statements (for self-employed applicants), if applicable.",
    },
  ];
  const categories = [
    {
      number: 1,
      description:
        "Debt Consolidation: Combine multiple debts into a single loan for easier management.",
    },
    {
      number: 2,
      description:
        "Home Improvements: Finance renovations, repairs, or upgrades for your home.",
    },
    {
      number: 3,
      description:
        "Business Investments: Obtain funds to start or expand your business.",
    },
    {
      number: 4,
      description:
        "Personal Expenses: Cover unexpected expenses, travel costs, or special occasions.",
    },
  ];

  const table = [
    {
      row: 1,
      loanAmount: "$8K-$50K",
      normal: {
        loanType: "Normal",
        collateral: "$8,000",
        interest: "18%",
        duration: "2 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "$10,000",
        interest: "18%",
        duration: "2 Years",
      },
    },
    {
      row: 2,
      loanAmount: "$50K-$100K",
      normal: {
        loanType: "Normal",
        collateral: "16%",
        interest: "18%",
        duration: "2 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "20%",
        interest: "18%",
        duration: "2 Years",
      },
    },
    {
      row: 3,
      loanAmount: "$100K-$500K",
      normal: {
        loanType: "Normal",
        collateral: "15.50%",
        interest: "18%",
        duration: "3 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "20%",
        interest: "18%",
        duration: "3 Years",
      },
    },
    
    {
      row: 4,
      loanAmount: "$500K-$1M",
      normal: {
        loanType: "Normal",
        collateral: "15%",
        interest: "17%",
        duration: "4 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "19%",
        interest: "17%",
        duration: "4 Years",
      },
    },

    {
      row: 5,
      loanAmount: "$1M-$5M",
      normal: {
        loanType: "Normal",
        collateral: "13%",
        interest: "15%",
        duration: "5 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "18%",
        interest: "15%",
        duration: "5 Years",
      },
    },
    {
      row: 6,
      loanAmount: "$5M-$10M",
      normal: {
        loanType: "Normal",
        collateral: "12%",
        interest: "16%",
        duration: "6 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "17%",
        interest: "16%",
        duration: "6 Years",
      },
    },
    {
      row: 7,
      loanAmount: "$10M-$50M",
      normal: {
        loanType: "Normal",
        collateral: "11%",
        interest: "15%",
        duration: "8 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "16%",
        interest: "15%",
        duration: "8 Years",
      },
    },
    {
      row: 8,
      loanAmount: "$50M-$100M",
      normal: {
        loanType: "Normal",
        collateral: "10%",
        interest: "15%",
        duration: "10 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "16%",
        interest: "15%",
        duration: "10 Years",
      },
    },
  ];

  return (
    <>
      <div id="standard-loan" className="space-y-6">
        <H2>Standard Loans</H2>
        <P2>
          Our standard loan category caters to individuals in need of financial
          assistance for various purposes, such as debt consolidation, home
          improvements, business investments, or personal expenses. With
          flexible loan amounts and terms, our standard loans offer a versatile
          solution to address your financial requirements. Please find the loan
          table below:
        </P2>
        {/* table  */}
        <Table content={table} />
        {/* requirements  */}
        <H3>Standard Loan Requirements</H3>
        <div className="space-y-4">
          {standardLoan.map(loan => (
            <div key={loan.number} className="flex justify-between">
              <P2 className="">{loan.number}.</P2>
              <P2 className="w-[98%]">{loan.description}</P2>
            </div>
          ))}
        </div>
        {/* categories  */}
        <H3>Standard Loan Categories</H3>
        <P2>
          Our standard loan category is designed to meet various financial
          needs:
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
          At Bitloanscapital, we understand that financial flexibility is
          crucial. Our standard loans offer customizable loan amounts and terms
          to suit your specific situation. Whether you&rsquo;re looking to
          consolidate debts, enhance your home, invest in your business, or
          fulfill personal needs, our standard loans provide a versatile
          solution. Explore the loan table to find the options that best fit
          your financial requirements.
        </P2>
      </div>
    </>
  );
};

export default StandardSection;
