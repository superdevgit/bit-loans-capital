import { H2, P2 } from "@/components/typography";

import { Collapse } from "@/components/shared";
import { Heading } from "../components/shared";

const FAQ = () => {
  const frequentQuestions = [
    {
      qn: "What is Bitloanscapital?",
      ans: "Bitloanscapital is a lending platform that allows individuals to lend their Bitcoin to borrowers in exchange for attractive returns. We provide a secure and transparent environment for lenders and borrowers to connect and meet their financial needs.",
    },
    {
      qn: "Is Bitloanscapital a regulated platform?",
      ans: "No, for good reason! Bitloanscapital operates in a currently unregulated space to prioritize privacy and provide our clients with the highest level of confidentiality. However, we adhere to applicable laws and regulations in the territories where our services are offered.",
    },
    {
      qn: "How do I create an account?",
      ans: "Creating an account with Bitloanscapital is simple. Visit our website and click on the 'Sign Up' button. Fill in the required information, complete the process, and you'll be ready to start lending or borrowing.",
    },
    {
      qn: "Is my personal information safe on the platform?",
      ans: "At Bitloanscapital, we take privacy and security seriously. We employ advanced encryption and security measures to safeguard your personal information. We do not disclose client information unless required by law or with the client's consent.",
    },
    {
      qn: "Can I participate in Bitloanscapital if I'm located outside the supported territories?",
      ans: "Bitloanscapital complies with the laws and regulations of the territories where our services are offered. Reviewing the terms and conditions and ensuring you are eligible to participate based on your jurisdiction's laws is essential.",
    },
  ];
  const lendingQuestions = [
    {
      qn: "How does lending work on Bitloanscapital?",
      ans: "Lending on Bitloanscapital involves simply depositing Bitcoin into your lending account. Your Bitcoin contributes to the lending pool, which is disbursed to borrowers. You earn interest on your lending account based on the loan terms and duration.",
    },
    {
      qn: "What are the minimum and maximum lending amounts?",
      ans: "The minimum lending amount is $5,000, allowing lenders to participate in the lending program. There is no specific maximum lending amount, giving you the flexibility to lend based on your investment goals and available Bitcoin.",
    },
    {
      qn: "How are interest rates determined?",
      ans: "Interest rates on Bitloanscapital are determined based on the loan categories, loan amounts, and market conditions. We strive to offer competitive rates that ensure profitability for lenders while providing attractive options for borrowers.",
    },
    {
      qn: "How often are interest payments made?",
      ans: "Interest payments are made monthly.",
    },
    {
      qn: "Can I withdraw my funds at any time?",
      ans: "Yes, you can withdraw funds from your lending account at any time. However, it is essential to note that early withdrawals may result in a forfeiture of some accrued interest. The specific terms and conditions related to early withdrawals will be outlined in the lending agreement.",
    },
  ];
  const lendingPoolQuestions = [
    {
      qn: "What is the Bitloanscapital Lending Pool?",
      ans: "The Bitloanscapital Lending Pool is a mechanism that allows individuals to participate in a pool of funds provided by lenders. Borrowers can request loans from this pool, and lenders earn interest on their contributed funds.",
    },
    {
      qn: "How does the Bitloanscapital Lending Pool work?",
      ans: "Lenders deposit their funds into the lending pool, which creates a pool of capital available for borrowers. Borrowers can then request loans from this pool, funded using the available capital. Lenders earn interest on the capital they provide.",
    },
    {
      qn: "How can I become a lender in the Bitloanscapital Lending Pool?",
      ans: "To become a lender, you need to create an account on the Bitloanscapital platform and deposit your funds into the lending section. Once your funds are deposited, you will automatically earn interest on your contributed capital.",
    },
  ];
  const borrowingQuestions = [
    {
      qn: "How does borrowing work on Bitloanscapital?",
      ans: "Borrowers can apply for loans on Bitloanscapital by completing the necessary documentation and undergoing a Know Your Customer (KYC) process. Once approved, borrowers receive funds from the lending pool and repay the loan according to the agreed-upon terms.",
    },
    {
      qn: "What are the loan categories offered?",
      ans: "Bitloanscapital offers various loan categories, including Student, Medical, Mortgage, and Standard loans. Each category has specific loan amounts, interest rates, and collateral requirements tailored to meet the borrowing needs of different individuals.",
    },
    {
      qn: "What collateral is required for borrowing?",
      ans: "Collateral requirements vary based on the loan category and amount. Bitloanscapital uses collateral to secure the loans and ensure the safety of lenders' funds.",
    },
    {
      qn: "How long does it take to receive loan funds?",
      ans: "The time it takes to receive loan funds may vary depending on the loan application review and approval process. Once your loan is approved, the funds will be disbursed to your provided account within a reasonable timeframe.",
    },
    {
      qn: "Are there any prepayment penalties?",
      ans: "Bitloanscapital does not charge prepayment penalties. If you choose to repay your loan before the agreed-upon term, you can do so without incurring additional fees or penalties.",
    },
  ];
  const anonymityQuestions = [
    {
      qn: "Does Bitloanscapital require personal information for lending?",
      ans: "No, Bitloanscapital does not require personal information for lending purposes. We prioritize privacy and understand the importance of maintaining anonymity. When lending, you can participate in our lending pool without providing any personal information.",
    },
    {
      qn: "What information is required when borrowing from Bitloanscapital?",
      ans: "When borrowing from Bitloanscapital, we may require specific information to verify your identity and assess your eligibility for a loan. The information provided is solely for loan processing purposes and is deleted from our systems once the loan is completed.",
    },
    {
      qn: "How does Bitloanscapital ensure the deletion of borrower information?",
      ans: "At Bitloanscapital, we have strict data retention policies in place. Once a loan is completed, we promptly delete the borrower's information from our systems to ensure their privacy. We do not retain any personal information.",
    },
    {
      qn: "How does Bitloanscapital secure the lender's pool and reserves?",
      ans: "Bitloanscapital employs a multi-layered security approach to protect our lender's pool and reserves. The lender's pool is kept in a secure hot wallet to facilitate quick and efficient lending operations. On the other hand, the reserves, which amount to approximately $2 billion, are stored in a cold wallet. Additionally, the seed keys are distributed and stored in multiple secure locations to enhance security.",
    },
    {
      qn: "What security measures are in place to protect financial transactions?",
      ans: "Bitloanscapital utilizes secure encryption protocols and follows industry best practices to protect financial transactions. When you transact using Bitcoin, the underlying blockchain technology ensures the security and integrity of the transactions. We also employ additional security measures, such as security audits, to further enhance the protection of your financial transactions.",
    },
    {
      qn: "Will my borrowing activities be disclosed to others?",
      ans: "No, your borrowing activities with Bitloanscapital are kept confidential. We respect your privacy and do not disclose any information about your borrowing activities to third parties without your explicit consent. Your financial transactions and loan history are treated with the utmost confidentiality.",
    },
    {
      qn: "How can I address any concerns about anonymity or security?",
      ans: "If you have any concerns or questions regarding anonymity or security, don't hesitate to contact our customer support team. We are here to assist you and provide any necessary clarifications. Your privacy and security are of utmost importance to us, and we are committed to addressing any concerns you may have.",
    },
  ];
  const supportQuestions = [
    {
      qn: "How can I contact Bitloanscapital for support?",
      ans: "For any inquiries or assistance, you can email our customer support team at support@Bitloanscapital.com or through our support ticket system on the platform. We strive to provide timely and helpful responses to address your concerns.",
    },
    {
      qn: "What happens if I forget my account password?",
      ans: "If you forget your account password, you can initiate a password reset process by clicking the 'Forgot Password' link on the login page. Follow the instructions to reset your password and regain access to your account.",
    },
    {
      qn: "How often are account statements provided?",
      ans: "Account statements are typically provided annually, allowing you to track your lending and borrowing activities.",
    },
  ];

  return (
    <div className="">
      <Heading title="Frequently Asked Questions" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <P2>
          Welcome to the Bitloanscapital FAQs page. Here, we address the most
          common questions and concerns about our platform, lending process, and
          other essential aspects. We strive to provide comprehensive, accurate
          information to help you make informed decisions. If you have any
          additional queries, contact our customer support team.
        </P2>
        {/* */}

        <div className="space-y-10 md:w-3/5">
          {/* frequentQuestions */}
          <div className="grid grid-cols-1  gap-5">
            {frequentQuestions.map((question, index) => (
              <div key={question.qn} className="">
                <Collapse heading={question.qn}>
                  <P2>{question.ans}</P2>
                </Collapse>
              </div>
            ))}
          </div>
          {/* lending qns  */}
          <div className="space-y-4">
            <H2>Lending Questions</H2>
            <div className="grid grid-cols-1  gap-5">
              {lendingQuestions.map((question, index) => (
                <div key={question.qn} className="">
                  <Collapse heading={question.qn}>
                    <P2>{question.ans}</P2>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>
          {/* lending Pool Questions qns  */}
          <div className="space-y-4">
            <H2>Lending Pool Questions</H2>
            <div className="grid grid-cols-1  gap-5">
              {lendingPoolQuestions.map((question, index) => (
                <div key={question.qn} className="">
                  <Collapse heading={question.qn}>
                    <P2>{question.ans}</P2>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>
          {/* Borrowing Questions  */}
          <div className="space-y-4">
            <H2>Borrowing Questions</H2>
            <div className="grid grid-cols-1  gap-5">
              {borrowingQuestions.map((question, index) => (
                <div key={question.qn} className="">
                  <Collapse heading={question.qn}>
                    <P2>{question.ans}</P2>
                  </Collapse>
                </div>
              ))}
              <Collapse heading="What is the difference between an Emergency Loan and a Normal Loan?">
                <div className="space-y-4">
                  <P2>
                    The difference between an Emergency Loan and a Normal Loan
                    at Bitloanscapital lies in the disbursement speed and
                    collateral requirements.
                  </P2>
                  {/* Emergency Loan: */}
                  <div className="space-y-2">
                    <P2 className="font-semibold">Emergency Loan:</P2>
                    <P2>
                      An Emergency Loan is designed to provide immediate
                      financial assistance during urgent situations. When you
                      apply for an Emergency Loan, the funds are disbursed
                      within hours of your approval. This quick disbursement
                      allows you to address your urgent financial needs
                      promptly. However, due to the expedited process and
                      increased risk associated with emergencies, Emergency
                      Loans may require a slightly higher amount of collateral
                      to secure the loan.
                    </P2>
                  </div>
                  {/* Normal Loan: */}
                  <div className="space-y-2">
                    <P2 className="font-semibold">Normal Loan:</P2>
                    <P2>
                      A Normal Loan follows a standard disbursement process that
                      may take longer than an Emergency Loan. Once your
                      application is approved, the funds are typically disbursed
                      within a reasonable time frame based on our standard
                      procedures. The collateral amount for a Normal Loan is
                      generally lower than Emergency Loans. However, it&rsquo;s
                      important to note that the collateral must remain in your
                      Bitloanscapital account for at least two months before the
                      loan application. The collateral serves as security for
                      the loan and helps mitigate the risk for both the borrower
                      and the lender.
                    </P2>
                  </div>
                  <P2>
                    Considering your immediate financial needs and ability to
                    provide collateral is essential when deciding between an
                    Emergency Loan and a Normal Loan.{" "}
                  </P2>
                  <P2>
                    Bitloanscapital offers both options to cater to different
                    situations, ensuring you have access to the appropriate loan
                    type based on urgency and collateral availability.
                  </P2>
                </div>
              </Collapse>
            </div>
          </div>
          {/* Anonymity and Security  */}
          <div className="space-y-4">
            <H2>Anonymity and Security</H2>
            <div className="grid grid-cols-1  gap-5">
              {anonymityQuestions.map((question, index) => (
                <div key={question.qn} className="">
                  <Collapse heading={question.qn}>
                    <P2>{question.ans}</P2>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>
          {/* Account Management and Support Questions  */}
          <div className="space-y-4">
            <H2>Account Management and Support Questions</H2>
            <div className="grid grid-cols-1  gap-5">
              {supportQuestions.map((question, index) => (
                <div key={question.qn} className="">
                  <Collapse heading={question.qn}>
                    <P2>{question.ans}</P2>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

// const FAQItem = () => ()
