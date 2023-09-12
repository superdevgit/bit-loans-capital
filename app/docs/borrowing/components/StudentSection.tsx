import { H2, H3, P2 } from "@/components/typography";
import { Table } from "../../components/shared";

const StudentSection = () => {
  const studentLoan = [
    {
      number: 1,
      description:
        "Proof of Identity: Valid government-issued ID (e.g., passport, driver's license, national ID card).",
    },
    {
      number: 2,
      description:
        "Proof of Address: Documents verifying the borrower's residential address, such as utility bills, bank statements, or rental agreements.",
    },
    {
      number: 3,
      description:
        "Proof of Enrollment: Official documentation from the educational institution confirming the borrower's enrollment status.",
    },
    {
      number: 4,
      description:
        "Proof of Financial Need: Supporting documents demonstrating the financial need for the student loan.",
    },
    {
      number: 5,
      description:
        "Academic Information: Transcripts or other academic records showcasing the borrower's educational background.",
    },
  ];

  const table = [
    {
      row: 1,
      loanAmount: "$8K - $50K",
      normal: {
        loanType: "Normal",
        collateral: "$8000",
        interest: "4.50%",
        duration: "10 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "$10,000",
        interest: "4.50%",
        duration: "10 Years",
      },
    },{
      row: 2,
      loanAmount: "$50K - $100K",
      normal: {
        loanType: "Normal",
        collateral: "16%",
        interest: "4.50%",
        duration: "10 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "20%",
        interest: "4.50%",
        duration: "10 Years",
      },
    },{
      row: 3,
      loanAmount: "$100K - $500K",
      normal: {
        loanType: "Normal",
        collateral: "15%",
        interest: "4%",
        duration: "10 Years",
      },
      emergency: {
        loanType: "Emergency",
        collateral: "20%",
        interest: "4%",
        duration: "10 Years",
      },
    },
  ];

  return (
    <>
      <div id="student-loan" className="space-y-6">
        <H2>Student Loans</H2>
        <P2>
          Our student loan category is specifically tailored to support
          individuals pursuing higher education. We understand the rising costs
          of education and the financial challenges students face. With our
          student loans, you can access the funds you need to cover tuition
          fees, books, living expenses, or any other educational requirements.
          Our student loans offer flexible repayment terms, competitive interest
          rates, and collateral options that make financing your education more
          manageable. Please find the loan table below:
        </P2>
        <Table content={table} />
        {/* requirements  */}
        <H3>Student Loan Requirements</H3>
        <div className="space-y-4">
          {studentLoan.map(loan => (
            <div key={loan.number} className="flex justify-between">
              <P2 className="">{loan.number}.</P2>
              <P2 className="w-[98%]">{loan.description}</P2>
            </div>
          ))}
        </div>
        <P2>
          At Bitloanscapital, we recognize the financial obstacles faced by
          students pursuing higher education. Our student loan category is
          specifically tailored to support individuals actively studying in
          schools and universities. Whether you require funds to cover tuition
          fees, purchase books, manage living expenses, or meet other
          educational requirements, our student loans are designed to provide
          the necessary financial support. With flexible repayment terms,
          competitive interest rates, and collateral options, we aim to make
          financing your education more manageable. Explore the loan table to
          find the student loan options that align with your educational needs.
        </P2>
      </div>
    </>
  );
};

export default StudentSection;
