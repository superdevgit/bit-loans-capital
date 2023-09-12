import { H2, P2 } from "@/components/typography";

import { Heading } from "../components/shared";
import MedicalSection from "./components/MedicalSection";
import MortgageSection from "./components/MortgageSection";
import StandardSection from "./components/StandardSection";
import StudentSection from "./components/StudentSection";

const Borrowing = () => {
  const reasons = [
    {
      number: 1,
      description:
        "Competitive interest rates: Our interest rates are carefully calculated to provide borrowers with affordable repayment options and attractive returns for lenders.",
    },
    {
      number: 2,
      description:
        "Flexible loan amounts: We offer a wide range of loan amounts to accommodate different financial needs, ensuring you can access the funds you require.",
    },
    {
      number: 3,
      description:
        "Secure and private: We prioritize the privacy and security of our clients, implementing robust measures to safeguard sensitive information and transactions.",
    },
    {
      number: 4,
      description:
        "Streamlined application process: Our borrowing process is designed to be straightforward and hassle-free, allowing you to submit your loan application with ease.",
    },
    {
      number: 5,
      description:
        "Dedicated customer support: Our experienced customer support team is available to assist you throughout the borrowing journey, addressing any questions or concerns you may have.",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Eligibility and KYC Verification:",
      process: [
        "Ensure you meet the minimum age requirement and comply with the regulations of your territory.",
        "Complete the KYC verification process to verify your identity and ensure compliance with legal requirements.",
      ],
    },
    {
      number: 2,
      title: "Loan Application:",
      process: [
        "Fill out the loan application form, providing accurate information about your loan requirements and personal details.",
        "Submit any necessary documentation as requested to support your loan application.",
      ],
    },
    {
      number: 3,
      title: "Loan Approval and Collateral Assessment:",
      process: [
        "Our team reviews your loan application to determine the loan eligibility.",
      ],
    },
    {
      number: 4,
      title: "Loan Disbursement:",
      process: [
        "Once your loan is approved, the funds will be disbursed to your provided wallet address.",
        "The speed of fund delivery depends on the blockchain.",
      ],
    },
  ];

  const terms = [
    {
      number: 1,
      description:
        "Loan Term: The loan term represents the duration within which you are expected to repay the borrowed funds. The specific loan term will depend on the loan category and the amount borrowed. Please refer to the loan table for the available loan terms.",
    },
    {
      number: 2,
      description:
        "Monthly Repayment: To simplify your repayment process, we calculate your monthly repayment amount by dividing the total loan amount, including interest, by the number of months in your loan term. This allows you to budget effectively and make regular repayments without unexpected fluctuations.",
    },
    {
      number: 3,
      description:
        "Automatic Repayment: Once you send Bitcoin to your Bitloanscapital wallet, it is added to your Available Balance. At the end of the month, your monthly payment is deducted from your Available Balance, while the remaining amount stays in your Available Balance. This ensures a hassle-free repayment experience, as your loan is automatically repaid using the Bitcoin in your Bitloanscapital wallet without requiring you to initiate the repayment process manually.",
    },
    {
      number: 4,
      description:
        `Early Repayment: We encourage responsible financial management and offer flexibility for early loan repayment. If you wish to pay off your loan before the agreed term, you can do so without incurring any prepayment penalties. To initiate the transaction, please access the "pay" option in the "perform transaction" section. Enter the desired amount to pay and verify that the amount is available in your “Available Balance”. The amount will be used for the payment of your loan.`,
    },
    {
      number: 5,
      description:
        "Grace Period: To provide our borrowers with additional support, all loans at Bitloanscapital come with a standard 6-month grace period after disbursement. During this period, you are not required to make any loan repayments, allowing you to get settled and organize your finances.",
    },
    {
      number: 6,
      description:
        "Student Loan Graduation Grace Period: For student loans, we offer an additional 6-month grace period after graduation. To take advantage of this grace period, simply provide proof of your graduation to our customer support team.",
    },
  ];

  return (
    <div className="">
      <Heading title="Loan Categories" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <P2>
          At Bitloanscapital, we offer a diverse range of loan categories
          designed to meet the specific financial needs of our clients. Whether
          you’re a student in need of educational funding, require financial
          assistance for medical expenses, looking to finance a mortgage, or
          simply need a standard loan, our comprehensive loan categories provide
          flexible and competitive options. With attractive interest rates and
          collateral requirements, Bitloanscapital is the ideal choice for
          borrowers seeking efficient and secure lending solutions.
        </P2>
        {/* student */}
        <StudentSection />
        {/* medical  */}
        <MedicalSection />
        {/* mortgage  */}
        <MortgageSection />
        {/* standard  */}
        <StandardSection />
        {/* why  */}
        <div id="why-bitloancapital" className="space-y-3">
          <H2>Why Choose Bitloanscapital for Borrowing Needs?</H2>

          {/* why's */}
          <div className="space-y-4">
            {reasons.map(reason => (
              <div key={reason.number} className="flex justify-between">
                <P2 className="">{reason.number}.</P2>
                <P2 className="w-[98%]">{reason.description}</P2>
              </div>
            ))}
          </div>
        </div>
        {/* processs  */}
        <div id="borrowing-process" className="space-y-3">
          <H2>Borrowing Process</H2>
          <P2>
            At Bitloanscapital, we aim to make the borrowing process seamless
            and efficient. Here is an overview of how our borrowing process
            works:
          </P2>
          {/* steps */}
          {steps.map(step => (
            <div key={step.number} className="space-y-4">
              <P2>
                {step.number}. {step.title}
              </P2>
              {step.process.map(process => (
                <div key={process} className="flex justify-between">
                  <P2 className=""> - </P2>
                  <P2 className="w-[98%]">{process}</P2>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* repayment Terms  */}
        <div id="repayment-terms" className="space-y-3">
          <H2>Repayment Terms</H2>
          <P2>
            At Bitloanscapital, we provide a convenient monthly repayment
            frequency for our borrowers. Your loan amount, along with the
            accrued interest, will be divided by the number of months determined
            by your loan term. This ensures that your repayment amount remains
            consistent and manageable throughout the repayment period. When you
            take out a loan with us, you can expect the following repayment
            terms:
          </P2>
          {/* terms */}
          <div className="space-y-4">
            {terms.map(term => (
              <div key={term.number} className="flex justify-between">
                <P2 className="">{term.number}.</P2>
                <P2 className="w-[98%]">{term.description}</P2>
              </div>
            ))}
          </div>
          <P2>
            We are committed to supporting you throughout the repayment process.
            Our dedicated customer support team is available to address any
            questions or concerns you may have regarding your loan repayment. We
            strive to provide a transparent and straightforward repayment
            structure that ensures your financial journey with us is smooth and
            manageable.
          </P2>
          <P2>
            Please refer to your loan agreement for the specific details of your
            repayment schedule, including the total repayment amount, interest
            rate, and any applicable fees. We recommend reviewing the terms and
            conditions carefully before proceeding with your loan application.
          </P2>
        </div>
        {/* Late Payment Policy  */}
        <div id="payment-policy" className="space-y-3">
          <H2>Late Payment Policy</H2>
          <P2>
            At Bitloanscapital, we understand that unforeseen circumstances can
            sometimes affect your ability to make timely loan repayments.
            However, it is important to make your monthly repayments on time to
            avoid any late fees or negative impact on your credit history with
            Bitloanscapital.
          </P2>
          <P2>
            If you anticipate difficulties in making a scheduled payment, we
            strongly encourage you to contact our customer support team in
            advance. Our dedicated team is here to assist you and discuss
            alternative arrangements that may help you manage your repayment
            obligations effectively.
          </P2>
          <P2>
            By proactively reaching out to us, we can work together to find a
            solution that suits your current financial situation. We may be able
            to provide temporary payment extensions, adjust the repayment
            schedule, or explore other options that can ease the burden during
            challenging times.
          </P2>
          <P2>
            We value open communication and are committed to helping our
            borrowers navigate through financial hardships. Remember, contacting
            us before missing a payment demonstrates your commitment to
            fulfilling your loan obligations and allows us to provide the best
            possible support.
          </P2>
          <P2>
            Please note that late fees may be applied in accordance with the
            terms outlined in your loan agreement. However, we are always
            willing to work with you to find a mutually beneficial resolution.
            It is our priority to assist you in maintaining a positive repayment
            experience and protecting your creditworthiness.
          </P2>
          <P2>
            If you have any questions or concerns regarding your loan repayment
            or need assistance, please don&rsquo;t hesitate to reach out to our
            customer support team. We are here to help you every step of the
            way.
          </P2>
        </div>
        {/* Privacy and Security  */}
        <div id="privacy" className="space-y-3">
          <H2>Privacy and Security</H2>
          <P2>
            At Bitloanscapital, we take privacy and security seriously. We have
            implemented advanced encryption protocols and robust security
            measures to protect the personal and financial information of our
            clients. Our platform ensures that sensitive data is stored securely
            and that transactions are conducted in a safe and private
            environment. We are committed to maintaining the confidentiality and
            integrity of client information, providing you with a secure
            borrowing experience.
          </P2>
        </div>
      </div>
    </div>
  );
};

export default Borrowing;
