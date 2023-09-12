import { H2, P2 } from "@/components/typography";

import { Heading } from "../components/shared";

const PrivacyPolicy = () => {
  const userTerms = [
    {
      number: 1,
      description:
        "All registration information you submit will be true, accurate, current, and complete",
    },
    {
      number: 2,
      description:
        "You will maintain the accuracy of such information and promptly update such registration information as necessary;",
    },
    {
      number: 3,
      description:
        "You have the legal capacity and you agree to comply with these Terms and Conditions;",
    },
    {
      number: 4,
      description: "You are not under the age of 13",
    },
    {
      number: 5,
      description:
        "Not a minor in the jurisdiction in which you reside or if a minor, you have received parental permission to use the Site",
    },
    {
      number: 6,
      description:
        "You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise",
    },
    {
      number: 7,
      description:
        "You will not use the Site for any illegal or unauthorized purpose",
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
        "Attempting to gain unauthorized access to other users&rsquo; accounts.",
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
      <Heading title="PRIVACY Policy" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <P2>
          Welcome to Bitloanscapital&apos;s Privacy Policy. This policy outlines
          how we collect, store, and use user data on our platform. We are
          committed to protecting your privacy and ensuring compliance with
          applicable regulations. By using the Bitloanscapital platform, you
          agree to the terms of this Privacy Policy. Please read this policy
          carefully to understand how your information will be handled.
        </P2>

        {/* */}

        <div className="space-y-10">
          {/* Collection and Use of User Data */}
          <div className="space-y-3">
            <H2>Collection and Use of User Data</H2>
            {/* personal Information:  */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Personal Information:</P2>
                <P2>
                  Bitloanscapital collects personal information provided by
                  users during the registration process and the use of our
                  platform. This may include your name, email address, contact
                  information, and other relevant details required for account
                  creation and KYC verification.
                </P2>
              </div>
            </div>
            {/* information Sharing */}
            <div className="flex justify-between">
              <P2 className="">2.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Information Sharing:</P2>
                <P2>
                  Bitloanscapital does not disclose personal information to
                  third parties, except in cases required by law or with your
                  consent. We prioritize user privacy and employ advanced
                  security measures to protect your information.
                </P2>
              </div>
            </div>
            {/* use of Information */}
            <div className="flex justify-between">
              <P2 className="">2.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Use of Information:</P2>
                <P2>
                  The personal information collected is used to verify user
                  identities, process transactions, provide customer support,
                  and enhance our services. We may also use your information to
                  communicate important updates, promotions, and news about
                  Bitloanscapital.
                </P2>
              </div>
            </div>
          </div>
          {/* Data Storage and Security */}
          <div className="space-y-3">
            <H2>Data Storage and Security</H2>
            {/* data Storage: */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Data Storage:</P2>
                <P2>
                  User data is stored on secure servers with strict access
                  controls. We employ industry-standard security measures to
                  protect your information from unauthorized access, disclosure,
                  or loss.
                </P2>
              </div>
            </div>
            {/* encryption */}
            <div className="flex justify-between">
              <P2 className="">2.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Encryption:</P2>
                <P2>
                  Bitloanscapital utilizes encryption protocols to secure user
                  data and ensure the confidentiality of sensitive information.
                </P2>
              </div>
            </div>
            {/* data Retention */}
            <div className="flex justify-between">
              <P2 className="">3.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Data Retention:</P2>
                <P2>
                  We retain user data for as long as necessary to fulfill the
                  purposes outlined in this Privacy Policy and comply with legal
                  obligations. If you choose to close your account, we will
                  securely delete or anonymize your personal information.
                </P2>
              </div>
            </div>
          </div>
          {/* Compliance and Legal Obligations */}
          <div className="space-y-3">
            <H2>Compliance and Legal Obligations</H2>
            {/* regulatory Compliance:  */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Regulatory Compliance: </P2>
                <P2>
                  Bitloanscapital operates within the framework of applicable
                  laws and regulations in the territories where our services are
                  offered. We strive to ensure compliance with data protection
                  and privacy regulations.
                </P2>
              </div>
            </div>
            {/* user Responsibilities: */}
            <div className="flex justify-between">
              <P2 className="">2.</P2>
              <div className="w-[98%] space-y-2">
                <P2>User Responsibilities:</P2>
                <P2>
                  Users are responsible for understanding and complying with the
                  laws and regulations in their respective jurisdictions. It is
                  your responsibility to determine whether you are eligible to
                  use the Bitloanscapital platform based on your local laws.
                </P2>
              </div>
            </div>
          </div>
          {/* Cookies and Tracking Technologies */}
          <div className="space-y-3">
            <H2>Cookies and Tracking Technologies</H2>
            {/* cookies  */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Cookies: </P2>
                <P2>
                  Bitloanscapital may use cookies and similar technologies to
                  enhance user experience, collect statistical data, and improve
                  our services. You can adjust your browser settings to manage
                  cookie preferences.
                </P2>
              </div>
            </div>
            {/* third-Party Analytics  */}
            <div className="flex justify-between">
              <P2 className="">2.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Third-Party Analytics: </P2>
                <P2>
                  We may use third-party analytics tools to analyze website
                  usage and gather insights. These tools may collect anonymous
                  information about your interactions with the Bitloanscapital
                  platform.
                </P2>
              </div>
            </div>
          </div>
          {/* Third-Party Links */}
          <div className="space-y-3">
            <H2>Third-Party Links</H2>
            {/* external Websites:  */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>External Websites: </P2>
                <P2>
                  The Bitloanscapital platform may contain links to external
                  websites or services that are not owned or controlled by us.
                  We are not responsible for the privacy practices or content of
                  these third-party websites. We encourage you to review their
                  privacy policies before providing any personal information.
                </P2>
              </div>
            </div>
            {/* UPDATES TO THE PRIVACY POLICY */}
            <div className="space-y-3">
              <H2>Updates to the Privacy Policy</H2>
            </div>
            {/* changes to the Policy:  */}
            <div className="flex justify-between">
              <P2 className="">1.</P2>
              <div className="w-[98%] space-y-2">
                <P2>Changes to the Policy: </P2>
                <P2>
                  Bitloanscapital reserves the right to modify or update this
                  Privacy Policy at any time. We will notify users of any
                  material changes via email or through a prominent notice on
                  our platform. It is your responsibility to review the Privacy
                  Policy periodically for any updates.
                </P2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

// const PrivacyPolicyItem = () => ()
