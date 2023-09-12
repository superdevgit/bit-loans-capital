import { FormEvent, useState } from "react";

const WithdrawForm = () => {
  const [withdrawAmount, setWithdrawAmount] = useState<number>();
  const [bitcoinAddress, setBitcoinAddress] = useState<number>();
  const [from, setFrom] = useState("available-balance");
  const handleWithdraw = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <div className="space-y">
        <label htmlFor="balance-from">From: </label>
        <select
          value={from}
          id="balance-from"
          onChange={e => setFrom(e.target.value)}
          className="mb-0"
        >
          <option value="available-balance">Available balance</option>
          <option value="lending-balance">Lending balance</option>
        </select>
      </div>

      {from === "available-balance" ? (
        <>
          <div className="space-y-">
            <label htmlFor="withdraw-amount">Amount (in dollars):</label>
            <input
              value={withdrawAmount}
              type="number"
              id="withdraw-amount"
              // min={5000}
              required
              onChange={e => setWithdrawAmount(+e.target.value)}
            />
          </div>
          <div className="space-y-">
            <label htmlFor="bitcoin-address">Bitcoin address:</label>
            <input
              value={bitcoinAddress}
              type="text"
              id="bitcoin-address"
              // min={5000}
              required
              placeholder="eg: bc1q3260t464ejh497ygp6jgch9ernvhh9j4sukm7j"
              onChange={e => setBitcoinAddress(+e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <label htmlFor="withdraw-amount">Amount (in dollars):</label>
            <input
              value={withdrawAmount}
              type="number"
              id="withdraw-amount"
              // min={5000}
              required
              onChange={e => setWithdrawAmount(+e.target.value)}
            />
          </div>
        </>
      )}

      {/* <div className="error-message" id="withdraw-error">
    Please enter an amount higher than $5000.
  </div> */}

      <input type="submit" value="Withdraw" onClick={handleWithdraw} />
    </div>
  );
};

export default WithdrawForm;
