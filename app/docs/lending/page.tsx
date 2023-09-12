import { H2, P2 } from "@/components/typography";

import { Heading } from "../components/shared";

const Lending = () => {
  const processes = [
    {
      number: 1,
      description:
        "Account Creation: Get started by creating an account on our platform. It's a simple and quick process.",
    },
    {
      number: 2,
      description:
        "Deposit Bitcoin: Once your account is created, you can deposit Bitcoin into your account. We provide you with a unique wallet address where you can securely transfer your Bitcoin",
    },
    {
      number: 3,
      description:
        "Choose Lending: Within your account, select the “Perform Transaction” option and choose Lending, enter the desired amount to lend and press lend to start earning 14% P.A. on your Bitcoin.",
    },
    {
      number: 4,
      description:
        "Withdrawal and Reinvestment: You can withdraw funds from your lending balance at any time during the lending period, subject to daily withdrawal limits. Please note, you have to withdraw from your lending balance to your Available Balance first. To do this, select “Perform Transaction” and navigate to withdraw, select Lending balance from the “from” drop-down menu, enter the amount and select withdraw. The Bitcoin is then moved to your Available Balance which you can use as collateral for a loan or withdraw to your wallet. To guard against money laundering, we allow only two withdrawals daily, and each withdrawal cannot exceed 33.3% of your total lending account balance.",
    },
    {
      number: 5,
      description:
        "Lending Pool: Your deposited Bitcoin contributes to our lending pool, which is used to finance borrower loans. The allocation process ensures a balanced distribution of funds among qualified borrowers while mitigating risk.",
    },
    {
      number: 6,
      description:
        "You can enjoy regular monthly interest payouts at 14% P.A on your lending account based on your invested amount. The interest earned is compounded with your lending balance, increasing your overall investment balance.",
    },
    {
      number: 7,
      description:
        "Withdrawal and Reinvestment: At any time during the lending period, you have the option to withdraw funds from your lending account, subject to daily withdrawal limits. To guard against money laundering, we allow only two withdrawals per day, and each withdrawal cannot exceed 33.3% of your total lending account balance.",
    },
    {
      number: 8,
      description:
        "Capital Security Notice: As part of our commitment to maintaining a robust lending pool, we kindly inform you that early withdrawals within the initial two months will result in the forfeiture of accrued interest. This policy ensures sufficient capital reserves, fostering stability and profitability. Rest assured, your interest will be made available to you after this period. We appreciate your adherence to this essential measure in safeguarding our lending ecosystem. Thank you for your trust and support.",
    },
  ];
  const lendingPool = [
    {
      number: 1,
      description:
        "Lender Contributions: Lenders deposit their Bitcoin into the lending pool, making it available for borrowers to access.",
    },
    {
      number: 2,
      description:
        "Borrower Requests: Borrowers can submit loan requests, specifying the desired loan amount, loan duration, and other relevant details. These requests are reviewed and evaluated by Bitloanscapital.",
    },
    {
      number: 3,
      description:
        "Loan Disbursement: Once a loan is approved, the borrowed funds are disbursed to the borrower's wallet. The borrower is responsible for repaying the loan amount, along with the agreed-upon interest, within the specified loan duration.",
    },
    {
      number: 4,
      description:
        "Continuous Cycle: The lending pool operates on a continuous cycle, allowing lenders to withdraw their principal amount and interest earnings or reinvest. This cycle ensures a dynamic and ongoing lending ecosystem.",
    },
  ];

  const benefits = [
    {
      number: 1,
      description:
        "Profitability: At Bitloanscapital, we automatically compound your monthly interest with your principal which acts as your principal the next month enhancing the profitability of lending with us. Our interest rates are carefully designed to ensure attractive earnings while maintaining the sustainability and profitability of our lending pool. We strive to provide a competitive and rewarding lending experience for our lenders.",
    },
    {
      number: 2,
      description:
        "Community and Trust: Bitloanscapital fosters a strong lending community. We prioritize trust, transparency, and open communication, building a supportive network of like-minded individuals.",
    },
    {
      number: 3,
      description:
        "Security and Privacy: Our platform utilizes state-of-the-art security measures to protect your Bitcoin deposits and personal information. We adhere to stringent privacy protocols, ensuring the confidentiality and anonymity of our clients.",
    },
    {
      number: 4,
      description:
        "Flexibility and Control: As a lender, you have the flexibility to choose the lending duration and withdrawal. You are in control of your lending journey.",
    },
    {
      number: 5,
      description:
        "Dedicated Customer Support: Our experienced customer support team is available to address any inquiries or concerns you may have. We strive to provide exceptional service and assist you throughout your lending experience.",
    },
  ];

  return (
    <div className="">
      <Heading title="LENDING WITH BITLOANSCAPITAL: UNLOCK THE POWER OF YOUR BITCOIN" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <P2>
          Welcome to Bitloanscapital, where your Bitcoin can work for you. As a
          lender on our platform, you have the opportunity to earn attractive
          returns while contributing to the financial needs of borrowers. With
          our streamlined lending process, secure infrastructure, and robust
          risk management, you can be part of a trusted lending community that
          prioritizes profitability and client satisfaction.
        </P2>
        {/* process */}
        <div id="overview" className="space-y-3">
          <H2>Overview of the Lending Process</H2>
          <div className="space-y-4">
            {processes.map(process => (
              <div key={process.number} className="flex justify-between">
                <P2 className="">{process.number}.</P2>
                <P2 className="w-[98%]">{process.description}</P2>
              </div>
            ))}
          </div>
        </div>
        {/* lendig pool  */}
        <div id="lending-pool" className="space-y-3">
          <H2>Lending Pool</H2>
          <P2>
            The lending pool is a fundamental component of
            Bitloanscapital&rsquo;s platform, designed to facilitate the
            borrowing and lending activities within the community. It operates
            as a pool of funds from lenders seeking to earn interest on their
            capital. Here&rsquo;s how the lending pool works:
          </P2>
          <div className="space-y-4">
            {lendingPool.map(pool => (
              <div key={pool.number} className="flex justify-between">
                <P2 className="">{pool.number}.</P2>
                <P2 className="w-[98%]">{pool.description}</P2>
              </div>
            ))}
          </div>
          <P2>
            By participating in the lending pool, lenders can earn passive
            income through interest payments while supporting borrowers in
            meeting their financial needs. The pool provides a mechanism for
            efficient capital allocation and fosters a mutually beneficial
            relationship between lenders and borrowers within the
            Bitloanscapital community.
          </P2>
        </div>
        {/* benefits  */}
        <div id="benefits" className="space-y-3">
          <H2>Benefits of Lending with Bitloanscapital</H2>

          <div className="space-y-4">
            {benefits.map(benefit => (
              <div key={benefit.number} className="flex justify-between">
                <P2 className="">{benefit.number}.</P2>
                <P2 className="w-[98%]">{benefit.description}</P2>
              </div>
            ))}
          </div>
        </div>
        {/* start  */}
        <div className="space-y-3">
          <H2>Start of Lending with Bitloanscapital</H2>
          <P2>
            Join the lending revolution and unlock the earning potential of your
            Bitcoin. Create an account, deposit your Bitcoin, and embark on a
            rewarding lending journey with Bitloanscapital. Our platform offers
            a secure, transparent, and profitable environment for lenders.
            Maximize your returns and contribute to the financial well-being of
            borrowers in need.
          </P2>
        </div>
      </div>
    </div>
  );
};

export default Lending;
