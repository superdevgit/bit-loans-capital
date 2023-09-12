import { useState, FormEvent } from "react";

const LendingForm = () => {
  const [lendingAmount, setLendingAmount] = useState<number>();
  const handleLending = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="transaction-options lending">
      <label htmlFor="lending-amount">Amount (in dollars):</label>
      <input
        value={lendingAmount}
        type="number"
        id="lending-amount"
        min={5000}
        required
        onChange={e => setLendingAmount(+e.target.value)}
      />

      <div className="error-message" id="lending-error">
        Please enter an amount higher than $5000.
      </div>

      <input type="submit" value="Lend" onClick={handleLending} />
    </div>
  );
};

export default LendingForm