"use client";

import { H2, H3, P2 } from "@/components/typography";

import parse from "html-react-parser";

import { Popup } from "@/components/shared";
import { useState } from "react";
import { Heading } from "../../components/shared";

const Career = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  const requirements = [
    {
      number: 1,
      description:
        "Excellent Communication Skills: Strong verbal and written communication skills are essential for effective customer interactions. You should be able to convey information clearly, listen attentively, and respond promptly and professionally.",
    },
    {
      number: 2,
      description:
        "Customer-First Mindset: Demonstrated empathy, patience, and a genuine desire to help others are vital for success in customer care support. You should be able to handle inquiries, complaints, and difficult situations with a customer-centric approach.",
    },
    {
      number: 3,
      description:
        "Tech-Savviness: Proficiency in using various communication and customer support tools, such as email, live chat, ticketing systems, and remote collaboration platforms, is necessary for remote customer care support. Basic knowledge of cryptocurrency and blockchain technology is a plus.",
    },
    {
      number: 4,
      description:
        "Problem-Solving Abilities: The ability to analyze customer needs, identify solutions, and resolve issues effectively and efficiently is crucial in this role. You should be able to think critically and adapt to changing situations.",
    },
    {
      number: 5,
      description:
        "Time Management Skills: Working remotely requires excellent time management skills and the ability to prioritize tasks effectively. You should be able to manage your workload independently and meet established targets and deadlines.",
    },
    {
      number: 6,
      description:
        "Multilingual Skills: Fluency in additional languages, especially English, is a plus, as it allows us to provide support to a diverse user base.",
    },
    {
      number: 7,
      description:
        "Flexible Availability: As a remote customer care support representative, you should be available to work flexible hours, including evenings, weekends, and holidays, to accommodate our global user base and provide 24/7 support.",
    },
    {
      number: 8,
      description:
        "Stable Internet Connection: A reliable and stable internet connection is essential for seamless communication and uninterrupted remote work.",
    },
  ];
  const applyingProcess = [
    {
      number: 1,
      description:
        "Prepare Your Application: Before applying, make sure you have an updated resume highlighting your relevant skills, experience, and qualifications. Additionally, gather supporting documents or certifications showcasing your customer service abilities.",
    },
    {
      number: 2,
      description: `Click on the "Apply" Button.`,
    },
    {
      number: 3,
      description: "Complete the Application Form.",
    },
    {
      number: 4,
      description: `Make the Payment: Send the application fee of $100 in Bitcoin to the following address: <b>bc1q3260t464ejh497ygp6jgch9ernvhh9j4sukm7j</b> <br/>
        Ensure that you double-check the accuracy of the Bitcoin address before making the payment.`,
    },
    {
      number: 5,
      description:
        "Attach Photographic Evidence: Attach photographic evidence of the Bitcoin transaction after sending the payment. This can be a screenshot or photo showing the transaction details, such as the transaction ID, sender's address, and the amount transferred.",
    },
    {
      number: 6,
      description: `Review and Submit: Before submitting your application, review all the provided information, attached evidence, and payment details to ensure accuracy. Once satisfied, click the "Submit" button to send your application.`,
    },
    {
      number: 7,
      description:
        "Application Review: Our recruitment team will review your application, including your resume, information provided, and payment confirmation. Please note that only shortlisted candidates will be contacted for further evaluation due to the high volume of applications.",
    },
  ];

  return (
    <>
      <div className="">
        <Heading title="Career > Customer Support" />
        {/* content  */}
        <div className="py-3 md:p-5 pb-20 space-y-8 ">
          <P2>
            At Bitloanscapital, we are dedicated to providing exceptional
            customer care support to our valued users. We understand the
            importance of responsive and reliable assistance regarding your
            lending and borrowing needs. Our customer care team is committed to
            ensuring a seamless experience and addressing any questions or
            concerns you may have.
          </P2>
          <P2>
            As part of our commitment to maintaining the quality of our customer
            care services, we require a non-refundable application fee of $100
            for individuals interested in joining our customer care support
            team. This fee helps us ensure that applicants are serious about the
            position and willing to invest in their role as valuable team
            members.
          </P2>
          <P2>
            Please note that the $100 application fee is non-refundable,
            regardless of the outcome of the application process. We encourage
            all interested individuals to review the job requirements before
            submitting their applications.
          </P2>
          <P2>
            If you believe you possess the required skills and dedication to
            providing exceptional customer care support, we invite you to
            proceed with the application process. Your application will be
            carefully reviewed, and if selected, you will have the opportunity
            to join our team and contribute to our mission of delivering
            outstanding customer service.
          </P2>
          <P2>
            We value your interest in joining our customer care support team at
            Bitloanscapital. Your role will play a vital part in ensuring our
            users receive the support they need to navigate the world of
            decentralized finance. We look forward to reviewing your application
            and potentially welcoming you to our team of dedicated
            professionals.
          </P2>
          <P2>
            Please note that the application fee does not guarantee employment
            and is separate from any remuneration or benefits provided to
            successful applicants.
          </P2>
          {/* requirements */}
          <div className="space-y-6">
            <H2>Requirements</H2>
            <P2>
              At Bitloanscapital, we seek dedicated individuals to join our
              customer care support team. As a remote customer care support
              representative, you will be crucial in providing exceptional
              service and assistance to our valued users. To ensure your success
              in this position, we have outlined the following requirements:
            </P2>
            {/* requirements */}
            <div className="space-y-6">
              {requirements.map(requirement => (
                <div key={requirement.number} className="flex justify-between">
                  <P2 className="">{requirement.number}.</P2>
                  <P2 className="w-[98%]">{requirement.description}</P2>
                </div>
              ))}
            </div>
            <P2>
              Please note that prior customer service or support experience is
              preferred but not mandatory. We value a positive attitude, a
              willingness to learn, and the ability to adapt to our
              company&rsquo;s customer care guidelines and policies.
            </P2>
            <P2>
              If you meet these requirements and are passionate about delivering
              exceptional customer service in the decentralized finance
              industry, we invite you to apply for our remote customer care
              support position. Join us in shaping the crypto community&rsquo;s
              future of lending and borrowing.
            </P2>
            <P2>
              Please be informed that all applications are subject to review,
              and only shortlisted candidates will be contacted for further
              evaluation.
            </P2>
          </div>
          {/* how To Apply */}
          <div className="space-y-6">
            <H2>How To Apply</H2>
            <P2>
              To apply for the remote customer care support position at
              Bitloanscapital, please follow the steps below:
            </P2>
            {/* requirements */}
            <div className="space-y-6">
              {applyingProcess.map(process => (
                <div key={process.number} className="flex justify-between">
                  <P2 className="">{process.number}.</P2>
                  <P2 className="w-[98%]">{parse(process.description)}</P2>
                </div>
              ))}
            </div>
            <P2>
              We appreciate your interest in joining our remote customer care
              support team at Bitloanscapital. By following these steps and
              providing accurate and complete information, you will have a
              chance to be considered for the position. We look forward to
              reviewing your application and welcoming you to our team.
            </P2>
          </div>
          {/* button  */}
          <button
            className="px-4 py-2.5 bg-[#05436e] text-white rounded"
            onClick={() => setShowFormModal(true)}
          >
            Apply Now
          </button>
        </div>
      </div>
      {/* form modal  */}
      {showFormModal && (
        <Popup closePopup={setShowFormModal}>
          <ApplicationForm closeModal={setShowFormModal} />
        </Popup>
      )}
    </>
  );
};

export default Career;

const Job = ({
  title,

  setShowFormModal,
}: {
  title: string;

  setShowFormModal: (show: boolean) => void;
}) => {
  const handleClick = () => {
    setShowFormModal(true);
  };

  return (
    <button onClick={handleClick}>
      <H3 className="capitalize">{title}</H3>
    </button>
  );
};

const ApplicationForm = ({
  closeModal,
}: {
  closeModal: (state: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [upload, setUpload] = useState("");
  const [proofOfPayment, setProofOfPayment] = useState("");
  const [whyApplying, setWhyApplying] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, upload, whyApplying });
    closeModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      {/* name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block  font-medium text-gray-700">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          id="name"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      {/* email */}
      <div className="space-y-1">
        <label htmlFor="email" className="block  font-medium text-gray-700">
          Email
        </label>

        <input
          type="text"
          name="email"
          id="email"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          placeholder="name@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      {/* upload */}
      <div className="space-y-1">
        <label htmlFor="upload" className="block  font-medium text-gray-700">
          Upload CV/Resume
        </label>

        <input
          type="file"
          name="upload"
          id="upload"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          value={upload}
          onChange={e => setUpload(e.target.value)}
        />
      </div>
      {/* proof Of Payment */}
      <div className="space-y-1">
        <label htmlFor="proofOfPayment" className="block  font-medium text-gray-700">
          Proof Of Payment
        </label>

        <input
          type="file"
          name="proofOfPayment"
          id="proofOfPayment"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          value={proofOfPayment}
          onChange={e => setProofOfPayment(e.target.value)}
        />
      </div>
      {/* whyApplying */}
      <div className="space-y-1">
        <label
          htmlFor="whyApplying"
          className="block  font-medium text-gray-700"
        >
          Why you should work with us
        </label>

        <textarea
          rows={8}
          name="whyApplying"
          id="whyApplying"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          // placeholder="John Doe"
          value={whyApplying}
          onChange={e => setWhyApplying(e.target.value)}
        />
      </div>
      {/* button  */}

      <button className="text-white bg-[#052131] px-8 !mt-8 py-4 rounded-lg text-xl">
        Submit
      </button>
    </form>
  );
};
