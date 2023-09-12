import { useState, FormEvent } from "react";

const RepayForm = () => {
  const [repayAmount, setRepayAmount] = useState<number>();
  const handleRepay = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <label htmlFor="repay-amount">Amount (in dollars):</label>
      <input
        value={repayAmount}
        type="number"
        id="repay-amount"
        min={5000}
        required
        onChange={e => setRepayAmount(+e.target.value)}
      />

      <div className="error-message" id="repay-error">
        Please enter an amount higher than $5000.
      </div>

      <input type="submit" value="Repay" onClick={handleRepay} />
    </div>
  );
};


export default RepayForm