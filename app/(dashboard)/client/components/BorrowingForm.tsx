import { Button } from "@/components/shared";
import { FormEvent, useEffect, useState } from "react";

const BorrowingForm = () => {
  const [step, setStep] = useState(1);
  const [loanCategory, setLoanCategory] = useState("student");

  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const validateAmount = (loanCategory: string) => {
    switch (loanCategory) {
      case "student":
        setMin(8000);
        setMax(500000);
        break;
      case "standard":
        setMin(8000);
        setMax(100000000);

        break;
      case "medical":
        setMin(8000);
        setMax(10000000);

      case "mortgage":
        setMin(100000);
        setMax(100000000);
        break;
    }
  };

  useEffect(() => {
    validateAmount(loanCategory);
  }, [loanCategory]);

  return (
    <div className="">
      <label htmlFor="loan-category">Loan Category:</label>
      <select
        value={loanCategory}
        onChange={e => {
          setLoanCategory(e.target.value);
        }}
        id="loan-category"
      >
        <option value="student">Student</option>
        <option value="standard">Standard</option>
        <option value="mortgage">Mortgage</option>
        <option value="medical">Medical</option>
      </select>

      <div className="error-message" id="borrowing-error">
        Please enter a valid amount.
      </div>

      {loanCategory === "student" && <StudentSteps />}
      {loanCategory === "medical" && <MedicalSteps />}
      {loanCategory === "mortgage" && <MortgageSteps />}
      {loanCategory === "standard" && <StandardSteps />}
    </div>
  );
};

const StudentSteps = () => {
  const [step, setStep] = useState(1);

  // step 1
  const [loanType, setLoanType] = useState("normal");
  const [borrowingAmount, setBorrowingAmount] = useState<number>();
  const loanCategory = "student";

  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  // students step 2 fields
  const [fullName, setFullName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [proofOfIdentity, setProofOfIdentity] = useState("");
  const [proofOfAddress, setProofOfAddress] = useState("");
  const [proofOfEnrollment, setProofOfEnrollment] = useState("");
  const [academicInfo, setAcademicInfo] = useState("");

  const handleBorrowing = (e: FormEvent) => {
    e.preventDefault();
    console.log("Borrowing Amount: ", borrowingAmount);
    console.log("Loan Category: ", loanCategory);
    console.log("Loan Type: ", loanType);

    // min and max
    console.log("Min: ", min);
    console.log("Max: ", max);
  };

  return (
    <>
      {step === 1 ? (
        <>
          <label htmlFor="loan-type">Loan Type:</label>
          <select
            value={loanType}
            onChange={e => setLoanType(e.target.value)}
            id="loan-type"
          >
            <option value="normal">Normal</option>
            <option value="emergency">Emergency</option>
          </select>

          <label htmlFor="borrowing-amount">Amount (in dollars):</label>
          <input
            type="number"
            id="borrowing-amount"
            min={min}
            max={max}
            required
            value={borrowingAmount}
            onChange={e => setBorrowingAmount(+e.target.value)}
          />
        </>
      ) : (
        <>
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />

          <label htmlFor="school-name">School Name:</label>
          <input
            type="text"
            id="school-name"
            required
            value={schoolName}
            onChange={e => setSchoolName(e.target.value)}
          />

          <label htmlFor="education-level">Education Level:</label>
          <select
            value={educationLevel}
            onChange={e => {
              setEducationLevel(e.target.value);
            }}
            id="education-level"
          >
            <option value="undergraduate">Undergraduate</option>
            <option value="masters">Masters</option>
            <option value="phd">PhD</option>
            <option value="others">Others</option>
          </select>

          <label htmlFor="proof-of-identity">
            Proof Of Identity: Valid government-issued ID (e.g., passport,
            driver&rsquo;s license, national ID card).
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-identity"
            required
            value={proofOfIdentity}
            onChange={e => setProofOfIdentity(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="proof-of-address">
            Proof Of Address: Documents verifying the borrower&rsquo;s
            residential address, such as utility bills, bank statements, or
            rental agreements.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-address"
            required
            value={proofOfAddress}
            onChange={e => setProofOfAddress(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="proof-of-enrollment">
            Proof Of Enrollment: Official documentation from the educational
            institution confirming the borrower&rsquo;s enrollment status.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-enrollment"
            required
            value={proofOfEnrollment}
            onChange={e => setProofOfEnrollment(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="academic-info">
            Academic Information: Transcripts or other academic records
            showcasing the borrower&rsquo;s educational background.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="academic-info"
            required
            value={academicInfo}
            onChange={e => setAcademicInfo(e.target.value)}
          />
          <div />
        </>
      )}
      {step === 1 ? (
        <Button action={() => setStep(2)}>Borrow</Button>
      ) : (
        <Button className="mt-8" type="submit" action={() => handleBorrowing}>
          Borrow
        </Button>
      )}
    </>
  );
};

const MedicalSteps = () => {
  const [step, setStep] = useState(1);

  // step 1
  const [loanType, setLoanType] = useState("normal");
  const [borrowingAmount, setBorrowingAmount] = useState<number>();
  const loanCategory = "medical";

  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  // medical step 2 fields
  const [fullName, setFullName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [treatmentStage, setTreatmentStage] = useState("admitted");
  const [proofOfIdentity, setProofOfIdentity] = useState("");
  const [proofOfAddress, setProofOfAddress] = useState("");
  const [insuranceDetails, setInsuranceDetails] = useState("");
  const [medicalInfo, setMedicalInfo] = useState("");

  const handleBorrowing = (e: FormEvent) => {
    e.preventDefault();
    console.log("Borrowing Amount: ", borrowingAmount);
    console.log("Loan Category: ", loanCategory);
    console.log("Loan Type: ", loanType);

    // min and max
    console.log("Min: ", min);
    console.log("Max: ", max);
  };

  return (
    <>
      {step === 1 ? (
        <>
          <label htmlFor="loan-type">Loan Type:</label>
          <select
            value={loanType}
            onChange={e => setLoanType(e.target.value)}
            id="loan-type"
          >
            <option value="normal">Normal</option>
            <option value="emergency">Emergency</option>
          </select>

          <label htmlFor="borrowing-amount">Amount (in dollars):</label>
          <input
            type="number"
            id="borrowing-amount"
            min={min}
            max={max}
            required
            value={borrowingAmount}
            onChange={e => setBorrowingAmount(+e.target.value)}
          />
        </>
      ) : (
        <>
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />

          <label htmlFor="hospital-name">Hospital Name:</label>
          <input
            type="text"
            id="hospital-name"
            required
            value={hospitalName}
            onChange={e => setHospitalName(e.target.value)}
          />

          <label htmlFor="education-level">Stage of Treatment:</label>
          <select
            value={treatmentStage}
            onChange={e => {
              setTreatmentStage(e.target.value);
            }}
            id="education-level"
          >
            <option value="admitted">Admitted</option>
            <option value="discharged">Discharged</option>
            <option value="seeking-treatment">Seeking Treatment</option>
          </select>

          <label htmlFor="proof-of-identity">
            Proof Of Identity: Valid government-issued ID (e.g., passport,
            driver&rsquo;s license, national ID card).
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-identity"
            required
            value={proofOfIdentity}
            onChange={e => setProofOfIdentity(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="proof-of-address">
            Proof Of Address: Documents verifying the borrower&rsquo;s
            residential address, such as utility bills, bank statements, or
            rental agreements.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-address"
            required
            value={proofOfAddress}
            onChange={e => setProofOfAddress(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="insurance-details">
            Medical Insurance Details: If applicable, provide information about
            the medical insurance coverage.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="insurance-details"
            required
            value={insuranceDetails}
            onChange={e => setInsuranceDetails(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="medical-info">
            Medical Information: Medical invoice or cost estimate from the
            healthcare provider, relevant medical reports, or documents related
            to the treatment.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="medical-info"
            required
            value={medicalInfo}
            onChange={e => setMedicalInfo(e.target.value)}
          />
          <div />
        </>
      )}
      {step === 1 ? (
        <Button action={() => setStep(2)}>Borrow</Button>
      ) : (
        <Button className="mt-8" type="submit" action={() => handleBorrowing}>
          Borrow
        </Button>
      )}
    </>
  );
};

const MortgageSteps = () => {
  const [step, setStep] = useState(1);

  // step 1
  const [loanType, setLoanType] = useState("normal");
  const [borrowingAmount, setBorrowingAmount] = useState<number>();
  const loanCategory = "mortgage";

  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  // mortgage step 2 fields
  const [fullName, setFullName] = useState("");
  const [propertyType, setPropertyType] = useState("residential");
  const [proofOfIdentity, setProofOfIdentity] = useState("");
  const [proofOfAddress, setProofOfAddress] = useState("");
  const [incomeVerification, setIncomeVerification] = useState("");
  const [propertyDocumentation, setPropertyDocumentation] = useState("");
  const [financialStatement, setFinancialStatement] = useState("");

  const handleBorrowing = (e: FormEvent) => {
    e.preventDefault();
    console.log("Borrowing Amount: ", borrowingAmount);
    console.log("Loan Category: ", loanCategory);
    console.log("Loan Type: ", loanType);

    // min and max
    console.log("Min: ", min);
    console.log("Max: ", max);
  };

  return (
    <>
      {step === 1 ? (
        <>
          <label htmlFor="loan-type">Loan Type:</label>
          <select
            value={loanType}
            onChange={e => setLoanType(e.target.value)}
            id="loan-type"
          >
            <option value="normal">Normal</option>
            <option value="emergency">Emergency</option>
          </select>

          <label htmlFor="borrowing-amount">Amount (in dollars):</label>
          <input
            type="number"
            id="borrowing-amount"
            min={min}
            max={max}
            required
            value={borrowingAmount}
            onChange={e => setBorrowingAmount(+e.target.value)}
          />
        </>
      ) : (
        <>
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />

          <label htmlFor="property-type">Type of property:</label>
          <select
            value={propertyType}
            onChange={e => {
              setPropertyType(e.target.value);
            }}
            id="property-type"
          >
            <option value="residential">Residential</option>
            <option value="commerical">Commerical</option>
            <option value="investment-property">Investment Property</option>
          </select>

          <label htmlFor="proof-of-identity">
            Proof Of Identity: Valid government-issued ID (e.g., passport,
            driver&rsquo;s license, national ID card).
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-identity"
            required
            value={proofOfIdentity}
            onChange={e => setProofOfIdentity(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="proof-of-address">
            Proof Of Address: Documents verifying the borrower&rsquo;s
            residential address, such as utility bills, bank statements, or
            rental agreements.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-address"
            required
            value={proofOfAddress}
            onChange={e => setProofOfAddress(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="income-verification">
            Income Verification: Documents proving the borrower&rsquo;s income,
            such as pay stubs, employment verification letter, or tax returns.
           
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="income-verification"
            required
            value={incomeVerification}
            onChange={e => setIncomeVerification(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="property-documentation">
            Property Documentation: Documents related to the property being
            mortgaged, such as property deeds, purchase agreements, or appraisal
            reports.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="property-documentation"
            required
            value={propertyDocumentation}
            onChange={e => setPropertyDocumentation(e.target.value)}
          />
          <div />
          <div className="mt-4" />

          <label htmlFor="financial-statement">
            Financial Statements: If applicable, personal balance sheet or
            business financial statements (for self-employed applicants).
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="financial-statement"
            required
            value={financialStatement}
            onChange={e => setFinancialStatement(e.target.value)}
          />
          <div />
        </>
      )}
      {step === 1 ? (
        <Button action={() => setStep(2)}>Borrow</Button>
      ) : (
        <Button className="mt-8" type="submit" action={() => handleBorrowing}>
          Borrow
        </Button>
      )}
    </>
  );
};
const StandardSteps = () => {
  const [step, setStep] = useState(1);

  // step 1
  const [loanType, setLoanType] = useState("normal");
  const [borrowingAmount, setBorrowingAmount] = useState<number>();
  const loanCategory = "standard";

  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  // standard step 2 fields
  const [fullName, setFullName] = useState("");
  // const [propertyType, setPropertyType] = useState("residential");
  const [proofOfIdentity, setProofOfIdentity] = useState("");
  const [proofOfAddress, setProofOfAddress] = useState("");
  const [incomeVerification, setIncomeVerification] = useState("");
  const [financialStatement, setFinancialStatement] = useState("");

  const handleBorrowing = (e: FormEvent) => {
    e.preventDefault();
    console.log("Borrowing Amount: ", borrowingAmount);
    console.log("Loan Category: ", loanCategory);
    console.log("Loan Type: ", loanType);

    // min and max
    console.log("Min: ", min);
    console.log("Max: ", max);
  };

  return (
    <>
      {step === 1 ? (
        <>
          <label htmlFor="loan-type">Loan Type:</label>
          <select
            value={loanType}
            onChange={e => setLoanType(e.target.value)}
            id="loan-type"
          >
            <option value="normal">Normal</option>
            <option value="emergency">Emergency</option>
          </select>

          <label htmlFor="borrowing-amount">Amount (in dollars):</label>
          <input
            type="number"
            id="borrowing-amount"
            min={min}
            max={max}
            required
            value={borrowingAmount}
            onChange={e => setBorrowingAmount(+e.target.value)}
          />
        </>
      ) : (
        <>
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />

          {/* <label htmlFor="property-type">Type of property:</label>
          <select
            value={propertyType}
            onChange={e => {
              setPropertyType(e.target.value);
            }}
            id="property-type"
          >
            <option value="residential">Residential</option>
            <option value="commerical">Commerical</option>
            <option value="investment-property">Investment Property</option>
          </select> */}

          <label htmlFor="proof-of-identity">
            Proof Of Identity: Valid government-issued ID (e.g., passport,
            driver&rsquo;s license, national ID card).
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-identity"
            required
            value={proofOfIdentity}
            onChange={e => setProofOfIdentity(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="proof-of-address">
            Proof Of Address: Documents verifying the borrower&rsquo;s
            residential address, such as utility bills, bank statements, or
            rental agreements.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="proof-of-address"
            required
            value={proofOfAddress}
            onChange={e => setProofOfAddress(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="income-verification">
            Income Verification: Documents proving the borrower&rsquo;s income,
            such as pay stubs, employment verification letter, or tax returns.
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="income-verification"
            required
            value={incomeVerification}
            onChange={e => setIncomeVerification(e.target.value)}
          />
          <div className="mt-4" />

          <label htmlFor="financial-statement">
            Financial Statements: If applicable, personal balance sheet or
            business financial statements (for self-employed applicants).
          </label>
          <input
            type="file"
            className="border border-gray-200 rounded p-2 w-full"
            id="financial-statement"
            required
            value={financialStatement}
            onChange={e => setFinancialStatement(e.target.value)}
          />
          <div />
        </>
      )}
      {step === 1 ? (
        <Button action={() => setStep(2)}>Borrow</Button>
      ) : (
        <Button className="mt-8" type="submit" action={() => handleBorrowing}>
          Borrow
        </Button>
      )}
    </>
  );
};

export default BorrowingForm;
