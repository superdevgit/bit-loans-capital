import { H2, P2 } from "@/components/typography";

import { Heading } from "../components/shared";

const Terms = () => {
  const userTerms = [
    {
      number: 1,
      description:
        "All registration information you submit will be true, accurate, current, and complete.",
    },
    {
      number: 2,
      description:
        "You will maintain the accuracy of such information and promptly update such registration information as necessary.",
    },
    {
      number: 3,
      description:
        "You have the legal capacity and you agree to comply with these Terms and Conditions.",
    },
    {
      number: 4,
      description: "You are of sound mind.",
    },
    {
      number: 5,
      description:
        "Not a minor in the jurisdiction in which you reside or if a minor, you have received parental permission to use the Site.",
    },
    {
      number: 6,
      description:
        "You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise",
    },
    {
      number: 7,
      description:
        "You will not use the Site for any illegal or unauthorized purpose.",
    },
    {
      number: 8,
      description:
        "Your use of the Site will not violate any applicable law or regulation.",
    },
    {
      number: 9,
      description:
        "Engaging in money laundering, fraud, or other illegal activities.",
    },
    {
      number: 10,
      description:
        "Interfering with the security or integrity of our platform.",
    },
    {
      number: 11,
      description:
        "Attempting to gain unauthorized access to other users’ information and accounts.",
    },
    {
      number: 12,
      description:
        "Posting or transmitting harmful content, such as viruses or malware.",
    },
    {
      number: 13,
      description:
        "Engaging in any activity that may disrupt or negatively impact our services or the user experience.",
    },
  ];

  return (
    <div className="">
      <Heading title="AGREEMENT TO TERMS" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <P2>
          These Terms and Conditions constitute a legally binding agreement made
          between you, whether personally or on behalf of an entity (“you”)
          and[Bitloanscapital] (“we,” “us” or “our”), concerning your access to
          and use of the [bitloanscapital.com] website as well as any other
          media form, media channel, mobile website or mobile application
          related, linked, or otherwise connected thereto (collectively, the
          “Site”).
        </P2>
        <P2>
          Supplemental terms and conditions or documents that may be posted on
          the Site from time to time are hereby expressly incorporated herein by
          reference. We reserve the right, in our sole discretion, to make
          changes or modifications to these Terms and Conditions at any time and
          for any reason.
        </P2>
        <P2>
          We will alert you about any changes by updating the “Last updated”
          date of these Terms and Conditions, and you waive any right to receive
          specific notice of each such change.
        </P2>
        <P2>
          It is your responsibility to periodically review these Terms and
          Conditions to stay informed of updates. You will be subject to and
          will be deemed to have been made aware of and to have accepted, the
          changes in any revised Terms and Conditions by your continued use of
          the Site after the date such revised Terms and Conditions are posted.
        </P2>
        <P2>
          The information provided on the Site is not intended for distribution
          to or use by any person or entity in any jurisdiction or country where
          such distribution or use would be contrary to law or regulation or
          which would subject us to any registration requirement within such
          jurisdiction or country.
        </P2>
        <P2>
          Accordingly, those persons who choose to access the Site from other
          locations do so on their own initiative and are solely responsible for
          compliance with local laws, if and to the extent local laws are
          applicable.
        </P2>
        <P2>
          You agree that by accessing the Site, you have read, understood, and
          agree to be bound by all of these Terms and Conditions. If you do not
          agree with all of these Terms and Conditions, then you are expressly
          prohibited from using the Site and you must discontinue use
          immediately.
        </P2>
        {/* */}

        <div className="space-y-10">
          {/* user presentation  */}
          <div className="space-y-3">
            <H2>User Presentation</H2>
            <P2>By using the Site, you represent and warrant that:</P2>
            {/* steps */}
            {userTerms.map(term => (
              <div key={term.number} className="flex justify-between">
                <P2 className=""> {term.number}.</P2>
                <P2 className="w-[98%]">{term.description}</P2>
              </div>
            ))}
            <P2>
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Site (or any portion thereof).
            </P2>
          </div>
          {/* Account Creation */}
          <div className="space-y-3">
            <H2>Account Creation</H2>
            <P2>
              Account Registration: To access the Bitloanscapital platform, you
              must create an account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account.
            </P2>
          </div>
          {/* Borrowing and Lending Process */}
          <div className="space-y-3">
            <H2>Borrowing and Lending Process</H2>
            {/* borrowing */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Borrowing Process:</P2>
                <P2>
                  Borrowers are required to complete the Know Your Customer
                  (KYC) process to verify their identity and eligibility. Once
                  approved, borrowers can apply for loans, provide collateral as
                  required, and follow the loan application and approval process
                  outlined by Bitloanscapital.
                </P2>
              </div>
            </div>
            {/* lending */}
            <div className="flex justify-between">
              <P2 className="">2.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Lending Process:</P2>
                <P2>
                  Lenders can participate in the lending pool by depositing
                  Bitcoin into their accounts and selecting lending. By lending
                  funds, lenders agree to the terms and conditions set forth by
                  Bitloanscapital. The lending process is managed by the
                  platform.
                </P2>
              </div>
            </div>
          </div>
          {/* Risks and Liabilities */}
          <div className="space-y-3">
            <H2>Risks and Liabilities</H2>
            {/* financial Risks: */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Financial Risks:</P2>
                <P2>
                  Lending and borrowing on the Bitloanscapital platform will
                  involve financial risks. Users should carefully consider the
                  risks before participating in lending or borrowing activities.
                </P2>
              </div>
            </div>
            {/* liability Limitations */}
            <div className="flex justify-between">
              <P2 className="">2.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Liability Limitations:</P2>
                <P2>
                  Bitloanscapital is not liable for any losses, damages, or
                  liabilities arising from the use of our services. Users are
                  responsible for their actions, and any transactions conducted
                  through the platform are at their own risk.
                </P2>
              </div>
            </div>
          </div>
          {/* Disclaimers */}
          <div className="space-y-3">
            <H2>Disclaimers</H2>
            {/* no Financial Advice:  */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>No Financial Advice: </P2>
                <P2>
                  The information provided on the Bitloanscapital platform is
                  for informational purposes only and should not be construed as
                  financial or investment advice. Users should conduct their own
                  research and seek professional advice before making any
                  financial decisions.
                </P2>
              </div>
            </div>
            {/* platform Availability: */}
            <div className="flex justify-between">
              <P2 className="">2.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Platform Availability:</P2>
                <P2>
                  Bitloanscapital strives to provide a reliable and accessible
                  platform, but we do not guarantee uninterrupted or error-free
                  service. We are not liable for any interruptions, delays, or
                  technical issues that may occur.
                </P2>
              </div>
            </div>
          </div>
          {/* Governing Law and Dispute Resolution */}
          <div className="space-y-3">
            <H2>Governing Law and Dispute Resolution</H2>
            {/* governing Law  */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Governing Law: </P2>
                <P2>
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of the user’s territory. Any disputes
                  arising from or relating to these terms shall be subject to
                  the exclusive jurisdiction of the courts in the user’s
                  territory.
                </P2>
              </div>
            </div>
          </div>
          {/* Modifications to the Terms */}
          <div className="space-y-3">
            <H2>Modifications to the Terms</H2>
            {/* updates to the Terms:  */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Updates to the Terms: </P2>
                <P2>
                  Bitloanscapital reserves the right to modify or update these
                  Terms of Service at any time. We will notify users of any
                  material changes via email or through a prominent notice on
                  our platform. Continued use of our services after the
                  effective date of the updated terms constitutes acceptance of
                  the revised terms.
                </P2>
              </div>
            </div>
          </div>
          {/* MISCELLANEOUS */}
          <div className="space-y-6">
            <H2>Miscellaneous</H2>
            <P2 className="">
              These Terms and Conditions and any policies or operating rules
              posted by us on the Site constitute the entire agreement and
              understanding between you and us. Our failure to exercise or
              enforce any right or provision of these Terms and Conditions shall
              not operate as a waiver of such right or provision.
            </P2>
            <P2 className="">
              These Terms and Conditions operate to the fullest extent
              permissible by law. We may assign any or all of our rights and
              obligations to others at any time. We shall not be responsible or
              liable for any loss, damage, delay, or failure to act caused by
              any cause beyond our reasonable control.
            </P2>
            <P2 className="">
              If any provision or part of a provision of these Terms and
              Conditions is determined to be unlawful, void, or unenforceable,
              that provision or part of the provision is deemed severable from
              these Terms and Conditions and does not affect the validity and
              enforceability of any remaining provisions.
            </P2>
            <P2 className="">
              There is no joint venture, partnership, employment or agency
              relationship created between you and us as a result of these Terms
              and Conditions or use of the Site. You agree that these Terms and
              Conditions will not be construed against us by virtue of having
              drafted them.
            </P2>
            <P2 className="">
              You hereby waive any and all defenses you may have based on the
              electronic form of these Terms and Conditions and the lack of
              signing by the parties hereto to execute these Terms and
              Conditions.
            </P2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

// const TermsItem = () => ()
