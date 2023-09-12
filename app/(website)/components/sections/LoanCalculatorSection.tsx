"use client";
import { Reveal } from "@/components/shared";
import { H1, H2, P1, SubH1 } from "@/components/typography";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const LoanCalculatorSection = () => {
  // state
  const [collateralUSD, setCollateralUSD] = useState(0);
  const [collateralBTC, setCollateralBTC] = useState(0);
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [duration, setDuration] = useState(0);

  const [bitcoinPrice, setBitcoinPrice] = useState(0);

  // fetch bitcoin price
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then(data => {
        const price = Math.round(data.bpi.USD.rate_float);
        setBitcoinPrice(price);
      })
      .catch(err => {
        alert("Failed to fetch bitcoin price");
        // console.log("Error: ", err);
      });
  }, []);

  return (
    <section className="text- pb-8">
      <Reveal>


      <div className="rounded-2xl bg-gray-100 flex flex-col md:flex-row justify-between overflow-hidden">
        {/* left  */}
        <div className="md:w-1/2 px-8 pr-14 py-20">
          <SubH1 className="p-1 !bg-gray-400 text-white rounded inline">
            Loan Calculator
          </SubH1>
          <H2 className="mb-4 mt-2">See what you can borrow</H2>
          <CalculatorForm
            setCollateralBTC={setCollateralBTC}
            setCollateralUSD={setCollateralUSD}
            setMonthlyPayments={setMonthlyPayments}
            setTotalInterest={setTotalInterest}
            setDuration={setDuration}
          />
        </div>
        {/* right */}
        <div className="md:w-1/2 bg-[#d3e0f0] py-14 px-8 md:pl-14">
          <div className="flex flex-col justify-center gap-4 divide-y divide-gray-200">
            <div className="flex items-baseline py-3 justify-between">
              <P1>Collateral Needed (USD):</P1>
              <H1>
                ${" "}
                {collateralUSD.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </H1>
            </div>
            <div className="flex items-baseline py-3 justify-between">
              <P1>Collateral Needed (Bitcoin):</P1>
              <H1>
                {(collateralUSD / bitcoinPrice).toLocaleString(undefined, {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })}
              </H1>
            </div>
            <div className="flex items-baseline py-3 justify-between">
              <P1>Monthly Payments:</P1>
              <H1>
                ${" "}
                {monthlyPayments.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </H1>
            </div>
            <div className="flex items-baseline py-3 justify-between">
              <P1>Total Interest:</P1>
              <H1>
                ${" "}
                {(totalInterest * duration).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </H1>
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default LoanCalculatorSection;

// EXTENDED COMPONENTS =================================

type CalculatorFormProps = {
  setCollateralBTC: (value: number) => void;
  setCollateralUSD: (value: number) => void;
  setMonthlyPayments: (value: number) => void;
  setTotalInterest: (value: number) => void;
  setDuration: (value: number) => void;
};

const CalculatorForm = ({
  setCollateralBTC,
  setCollateralUSD,
  setMonthlyPayments,
  setTotalInterest,
  setDuration,
}: CalculatorFormProps) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanType, setLoanType] = useState("normal");
  const [category, setCategory] = useState("student");
  const [error, setError] = useState<string | undefined>(undefined);

  const calculateMonthlyPayments = (
    loanAmount: number,
    interestRate: number,
    loanDuration: number
  ) => {
    const totalInterest = interestRate * loanDuration;
    const months = loanDuration * 12;

    setMonthlyPayments((totalInterest + loanAmount) / months);
  };

  const handleCalculation = (e: FormEvent) => {
    e.preventDefault();

    let loanAmount2 = parseFloat(loanAmount.replace(/,/g, ""));

    const validation = handleValidation(category, loanType, loanAmount2!);
    setError(validation);
    if (validation) {
      setLoanAmount("");
      setCollateralBTC(0);
      setCollateralUSD(0);
      setMonthlyPayments(0);
      setTotalInterest(0);
      setDuration(0);
      return;
    }

    calculateStudentLoan(
      category,
      loanType,
      loanAmount2!,
      setTotalInterest,
      setCollateralUSD,
      setDuration
    );

    calculateMedicalLoan(
      category,
      loanType,
      loanAmount2!,
      setTotalInterest,
      setCollateralUSD,
      setDuration
    );

    calculateMortgageLoan(
      category,
      loanType,
      loanAmount2!,
      setTotalInterest,
      setCollateralUSD,
      setDuration
    );

    calculateStandardLoan(
      category,
      loanType,
      loanAmount2!,
      setTotalInterest,
      setCollateralUSD,
      setDuration
    );
  };

  // calculate student loan
  const calculateStudentLoan = (
    loanCategory: string,
    loanType: string,
    amount: number,
    setTotalInterest: (arg: number) => void,
    setCollateralUSD: (arg: number) => void,
    setDuration: (arg: number) => void
  ) => {
    // loan type normal
    if (loanCategory === "student" && loanType === "normal") {
      if (amount >= 8000 && amount <= 49999) {
        setTotalInterest(amount * 0.045);
        setCollateralUSD(8000);
        setDuration(10);
        calculateMonthlyPayments(amount, amount * 0.045, 10);

        return;
      } else if (amount >= 50000 && amount <= 99999) {
        setTotalInterest(amount * 0.045);
        setCollateralUSD(amount * 0.16);
        setDuration(10);
        calculateMonthlyPayments(amount, amount * 0.045, 10);
        return;
      } else if (amount >= 100000 && amount <= 500000) {
        setTotalInterest(amount * 0.04);
        setCollateralUSD(amount * 0.15);
        setDuration(10);
        calculateMonthlyPayments(amount, amount * 0.04, 10);
        return;
      }
    }
    // loan type emergency
    if (loanCategory === "student" && loanType === "emergency") {
      if (amount >= 8000 && amount <= 49999) {
        setTotalInterest(amount * 0.045);
        setCollateralUSD(10000);
        setDuration(10);
        calculateMonthlyPayments(amount, amount * 0.045, 10);
        return;
      } else if (amount >= 50000 && amount <= 99999) {
        setTotalInterest(amount * 0.045);
        setCollateralUSD(amount * 0.2);
        setDuration(10);
        calculateMonthlyPayments(amount, amount * 0.045, 10);
        return;
      } else if (amount >= 100000 && amount <= 500000) {
        setTotalInterest(amount * 0.04);
        setCollateralUSD(amount * 0.2);
        setDuration(10);
        calculateMonthlyPayments(amount, amount * 0.04, 10);
        return;
      }
    }
  };

  // calculate medical loan
  const calculateMedicalLoan = (
    loanCategory: string,
    loanType: string,
    amount: number,
    setTotalInterest: (arg: number) => void,
    setCollateralUSD: (arg: number) => void,
    setDuration: (arg: number) => void
  ) => {
    // loan type normal
    if (loanCategory === "medical" && loanType === "normal") {
      if (amount >= 8000 && amount <= 49999) {
        setDuration(2);
        calculateMonthlyPayments(amount, amount * 0.17, 2);
        setTotalInterest(amount * 0.17);
        setCollateralUSD(8000);

        return;
      } else if (amount >= 50000 && amount <= 99999) {
        setDuration(2);
        calculateMonthlyPayments(amount, amount * 0.17, 2);
        setTotalInterest(amount * 0.17);
        setCollateralUSD(amount * 0.16);

        return;
      } else if (amount >= 100000 && amount <= 499999) {
        setDuration(3);
        calculateMonthlyPayments(amount, amount * 0.16, 3);
        setTotalInterest(amount * 0.16);
        setCollateralUSD(amount * 0.15);

        return; // --
      } else if (amount >= 500000 && amount <= 999999) {
        setDuration(4);
        calculateMonthlyPayments(amount, amount * 0.15, 4);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.15);

        return;
      } else if (amount >= 1000000 && amount <= 4999999) {
        setDuration(5);
        calculateMonthlyPayments(amount, amount * 0.15, 5);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.13);

        return;
      } else if (amount >= 5000000 && amount <= 10000000) {
        setDuration(6);
        calculateMonthlyPayments(amount, amount * 0.15, 6);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.12);

        return;
      }
    }
    // loan type emergency
    if (loanCategory === "medical" && loanType === "emergency") {
      if (amount >= 8000 && amount <= 49999) {
        setDuration(2);
        calculateMonthlyPayments(amount, amount * 0.17, 2);
        setTotalInterest(amount * 0.17);
        setCollateralUSD(10000);

        return;
      } else if (amount >= 50000 && amount <= 99999) {
        setDuration(2);
        calculateMonthlyPayments(amount, amount * 0.17, 2);
        setTotalInterest(amount * 0.17);
        setCollateralUSD(amount * 0.2);

        return;
      } else if (amount >= 100000 && amount <= 499999) {
        setDuration(3);
        calculateMonthlyPayments(amount, amount * 0.18, 3);
        setTotalInterest(amount * 0.18);
        setCollateralUSD(amount * 0.16);

        return;
      } else if (amount >= 500000 && amount <= 999999) {
        setDuration(4);
        calculateMonthlyPayments(amount, amount * 0.15, 4);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.18);

        return;
      } else if (amount >= 1000000 && amount <= 4999999) {
        setDuration(5);
        calculateMonthlyPayments(amount, amount * 0.15, 5);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.16);

        return;
      } else if (amount >= 5000000 && amount <= 10000000) {
        setDuration(6);
        calculateMonthlyPayments(amount, amount * 0.15, 6);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.16);

        return;
      }
    }
  };

  // calculate mortgage loan
  const calculateMortgageLoan = (
    loanCategory: string,
    loanType: string,
    amount: number,
    setTotalInterest: (arg: number) => void,
    setCollateralUSD: (arg: number) => void,
    setDuration: (arg: number) => void
  ) => {
    // loan type normal
    if (loanCategory === "mortgage" && loanType === "normal") {
      if (amount >= 100000 && amount <= 499999) {
        setDuration(15);
        calculateMonthlyPayments(amount, amount * 0.065, 15);
        setTotalInterest(amount * 0.065);
        setCollateralUSD(amount * 0.24);

        return;
      } else if (amount >= 500000 && amount <= 999999) {
        setDuration(15);
        calculateMonthlyPayments(amount, amount * 0.065, 15);
        setTotalInterest(amount * 0.065);
        setCollateralUSD(amount * 0.24);

        return;
      } else if (amount >= 1000000 && amount <= 4999999) {
        setDuration(20);
        calculateMonthlyPayments(amount, amount * 0.06, 20);
        setTotalInterest(amount * 0.06);
        setCollateralUSD(amount * 0.22);

        return; // --
      } else if (amount >= 5000000 && amount <= 9999999) {
        setDuration(20);
        calculateMonthlyPayments(amount, amount * 0.05, 20);
        setTotalInterest(amount * 0.05);
        setCollateralUSD(amount * 0.22);

        return;
      } else if (amount >= 10000000 && amount <= 49999999) {
        setDuration(20);
        calculateMonthlyPayments(amount, amount * 0.45, 20);
        setTotalInterest(amount * 0.45);
        setCollateralUSD(amount * 0.2);

        return;
      } else if (amount >= 50000000 && amount <= 100000000) {
        setDuration(30);
        calculateMonthlyPayments(amount, amount * 0.45, 30);
        setTotalInterest(amount * 0.45);
        setCollateralUSD(amount * 0.2);

        return;
      }
    }
    // loan type emergency
    if (loanCategory === "mortgage" && loanType === "emergency") {
      if (amount >= 100000 && amount <= 499999) {
        setDuration(15);
        calculateMonthlyPayments(amount, amount * 0.065, 15);
        setTotalInterest(amount * 0.065);
        setCollateralUSD(amount * 0.29);

        return;
      } else if (amount >= 500000 && amount <= 999999) {
        setDuration(15);
        calculateMonthlyPayments(amount, amount * 0.065, 15);
        setTotalInterest(amount * 0.065);
        setCollateralUSD(amount * 0.29);

        return;
      } else if (amount >= 1000000 && amount <= 4999999) {
        setDuration(20);
        calculateMonthlyPayments(amount, amount * 0.06, 20);
        setTotalInterest(amount * 0.06);
        setCollateralUSD(amount * 0.27);

        return; // --
      } else if (amount >= 5000000 && amount <= 9999999) {
        setDuration(20);
        calculateMonthlyPayments(amount, amount * 0.05, 20);
        setTotalInterest(amount * 0.05);
        setCollateralUSD(amount * 0.26);

        return;
      } else if (amount >= 10000000 && amount <= 49999999) {
        setDuration(20);
        calculateMonthlyPayments(amount, amount * 0.45, 20);
        setTotalInterest(amount * 0.45);
        setCollateralUSD(amount * 0.26);

        return;
      } else if (amount >= 50000000 && amount <= 100000000) {
        setDuration(30);
        calculateMonthlyPayments(amount, amount * 0.45, 30);
        setTotalInterest(amount * 0.45);
        setCollateralUSD(amount * 0.25);

        return;
      }
    }
  };

  // calculate standard loan
  const calculateStandardLoan = (
    loanCategory: string,
    loanType: string,
    amount: number,
    setTotalInterest: (arg: number) => void,
    setCollateralUSD: (arg: number) => void,
    setDuration: (arg: number) => void
  ) => {
    // loan type normal
    if (loanCategory === "standard" && loanType === "normal") {
      if (amount >= 8000 && amount <= 49999) {
        setDuration(2);
        calculateMonthlyPayments(amount, amount * 0.18, 2);
        setTotalInterest(amount * 0.18);
        setCollateralUSD(8000);

        return;
      } else if (amount >= 50000 && amount <= 99999) {
        setDuration(2);
        calculateMonthlyPayments(amount, amount * 0.18, 2);
        setTotalInterest(amount * 0.18);
        setCollateralUSD(amount * 0.16);

        return;
      } else if (amount >= 100000 && amount <= 499999) {
        setDuration(3);
        calculateMonthlyPayments(amount, amount * 0.18, 3);
        setTotalInterest(amount * 0.18);
        setCollateralUSD(amount * 0.155);

        return; // --
      } else if (amount >= 500000 && amount <= 999999) {
        setDuration(4);
        calculateMonthlyPayments(amount, amount * 0.17, 4);
        setTotalInterest(amount * 0.17);
        setCollateralUSD(amount * 0.15);

        return;
      } else if (amount >= 1000000 && amount <= 4999999) {
        setDuration(5);
        calculateMonthlyPayments(amount, amount * 0.15, 5);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.13);

        return;
      } else if (amount >= 5000000 && amount <= 9999999) {
        setDuration(6);
        calculateMonthlyPayments(amount, amount * 0.16, 6);
        setTotalInterest(amount * 0.16);
        setCollateralUSD(amount * 0.12);

        return;
      } else if (amount >= 10000000 && amount <= 49999999) {
        setDuration(8);
        calculateMonthlyPayments(amount, amount * 0.15, 8);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.11);

        return;
      } else if (amount >= 50000000 && amount <= 100000000) {
        setDuration(10);
        calculateMonthlyPayments(amount, amount * 0.15, 10);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.1);

        return;
      }
    }
    // loan type emergency
    if (loanCategory === "standard" && loanType === "emergency") {
      if (amount >= 8000 && amount <= 49999) {
        setDuration(2);
        calculateMonthlyPayments(amount, amount * 0.18, 2);
        setTotalInterest(amount * 0.18);
        setCollateralUSD(10000);

        return;
      } else if (amount >= 50000 && amount <= 99999) {
        setDuration(2);
        calculateMonthlyPayments(amount, amount * 0.18, 2);
        setTotalInterest(amount * 0.18);
        setCollateralUSD(amount * 0.2);

        return;
      } else if (amount >= 100000 && amount <= 499999) {
        setDuration(3);
        calculateMonthlyPayments(amount, amount * 0.18, 3);
        setTotalInterest(amount * 0.18);
        setCollateralUSD(amount * 0.2);

        return; // --
      } else if (amount >= 500000 && amount <= 999999) {
        setDuration(4);
        calculateMonthlyPayments(amount, amount * 0.17, 4);
        setTotalInterest(amount * 0.17);
        setCollateralUSD(amount * 0.19);

        return;
      } else if (amount >= 1000000 && amount <= 4999999) {
        setDuration(5);
        calculateMonthlyPayments(amount, amount * 0.15, 5);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.18);

        return;
      } else if (amount >= 5000000 && amount <= 9999999) {
        setDuration(6);
        calculateMonthlyPayments(amount, amount * 0.16, 6);
        setTotalInterest(amount * 0.16);
        setCollateralUSD(amount * 0.17);

        return;
      } else if (amount >= 10000000 && amount <= 49999999) {
        setDuration(8);
        calculateMonthlyPayments(amount, amount * 0.15, 8);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.16);

        return;
      } else if (amount >= 50000000 && amount <= 100000000) {
        setDuration(10);
        calculateMonthlyPayments(amount, amount * 0.15, 10);
        setTotalInterest(amount * 0.15);
        setCollateralUSD(amount * 0.16);

        return;
      }
    }
  };

  // VALIDATION =============
  const handleValidation = (
    loanCategory: string,
    loanType: string,
    amount: number
  ) => {
    // console.log(loanCategory, loanType, amount);
    let valid = undefined;

    if (isNaN(amount)) return "Enter a valid number";

    if (loanCategory === "student")
      valid = validateStudentAmount(loanCategory, loanType, amount);

    if (loanCategory === "medical")
      valid = validateMedicalAmount(loanCategory, loanType, amount);

    if (loanCategory === "mortgage")
      valid = validateMortgageAmount(loanCategory, loanType, amount);

    if (loanCategory === "standard")
      valid = validateStandardAmount(loanCategory, loanType, amount);

    return valid;
  };

  // validate student amount
  const validateStudentAmount = (
    loanCategory: string,
    loanType: string,
    amount: number
  ) => {
    if (loanCategory === "student" && loanType === "normal") {
      if (amount >= 8000 && amount <= 500000) {
        // console.log("valid amount: ", amount);
        return undefined;
      } else return "Please enter amount between $8,000 - $500,000";
    }
    if (loanCategory === "student" && loanType === "emergency") {
      if (amount >= 10000 && amount <= 500000) {
        // console.log("valid amount: ", amount);
        return undefined;
      } else return "Please enter amount between $10,000 - $500,000";
    }
  };

  // validate medical amount
  const validateMedicalAmount = (
    loanCategory: string,
    loanType: string,
    amount: number
  ) => {
    if (loanCategory === "medical" && loanType === "normal") {
      if (amount >= 8000 && amount <= 10000000) {
        // console.log("valid amount: ", amount);
        return undefined;
      } else return "Please enter amount between $8,000 - $10,000,000";
    }
    if (loanCategory === "medical" && loanType === "emergency") {
      if (amount >= 10000 && amount <= 10000000) {
        // console.log("valid amount: ", amount);
        return undefined;
      } else return "Please enter amount between $10,000 - $10,000,000";
    }
  };

  // validate mortgage amount
  const validateMortgageAmount = (
    loanCategory: string,
    loanType: string,
    amount: number
  ) => {
    if (loanCategory === "mortgage" && loanType === "normal") {
      if (amount >= 100000 && amount <= 100000000) {
        // console.log("valid amount: ", amount);
        return undefined;
      } else return "Please enter amount between $100,000 - $100,000,000";
    }
    if (loanCategory === "mortgage" && loanType === "emergency") {
      if (amount >= 100000 && amount <= 100000000) {
        // console.log("valid amount: ", amount);
        return undefined;
      } else return "Please enter amount between $100,000 - $100,000,000";
    }
  };

  // validate standard amount
  const validateStandardAmount = (
    loanCategory: string,
    loanType: string,
    amount: number
  ) => {
    if (loanCategory === "standard" && loanType === "normal") {
      if (amount >= 8000 && amount <= 100000000) {
        // console.log("valid amount: ", amount);
        return undefined;
      } else return "Please enter amount between $8,000 - $100,000,000";
    }
    if (loanCategory === "standard" && loanType === "emergency") {
      if (amount >= 10000 && amount <= 100000000) {
        // console.log("valid amount: ", amount);
        return undefined;
      } else return "Please enter amount between $10,000 - $100,000,000";
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;

    // Remove commas from the input value and parse it to a number
    const numberValue = parseFloat(inputValue.replace(/,/g, ""));

    // Format the number using toLocaleString() with appropriate options
    const formattedNumber = numberValue.toLocaleString();
    setLoanAmount(formattedNumber);
  };

  return (
    <form onSubmit={handleCalculation} className="flex flex-col gap-4">
      {/* category  */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 space-y-2">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="capitalize border border-gray-300 rounded-lg p-3 w-full"
            value={category}
            onChange={e => setCategory(e.target.value)}
            placeholder="Enter loan amount"
          >
            <option value="student">Student</option>
            <option value="medical">medical</option>
            <option value="mortgage">mortgage</option>
            <option value="standard">standard</option>
          </select>
        </div>

        <div className="flex-1 space-y-2">
          <label htmlFor="loan-type">Loan type</label>
          <select
            name="loan-type"
            id="loan-type"
            className="capitalize border border-gray-300 rounded-lg p-3 w-full"
            value={loanType}
            onChange={e => setLoanType(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="emergency">emergency</option>
          </select>
        </div>
      </div>
      {/* loan amount */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 space-y-2">
          <label htmlFor="loan-amount">Loan amount</label>
          <input
            type="text"
            name="loan-amount"
            id="loan-amount"
            className="border border-gray-300 rounded-lg p-3 w-full"
            value={loanAmount}
            onChange={handleInputChange}
            placeholder="Enter loan amount"
          />
        </div>
      </div>
      {/* submit  */}
      <button className="bg-[#052131] text-white rounded-lg py-4">
        Calculate
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </button>
      {/* error  */}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
