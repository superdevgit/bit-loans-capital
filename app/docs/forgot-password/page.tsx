"use client";
import { useState } from "react";
import { Heading } from "../components/shared";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
      <Heading title="Password Reset" />
      {/* contact htmlFm  */}
      {/* TODO: CONFIRMING PASSWORD RESET AFTER REDIRECT FROM PASSWORD */}
      <div className="p-5 pb-20 space-y-4">
        {/* <P2>
          Please provide us with the password used in account registration and we
          will send you a link to reset your password.
        </P2> */}
        <form className="space-y-4 md:w-3/5">
          {/* select communicationType */}
          <div className="space-y-1">
            <label
              className="block  font-medium text-gray-700"
              htmlFor="new-password"
            >
              Password:
            </label>
            <input
              className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
              type="password"
              id="new-password"
              name="new-password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label
              className="block  font-medium text-gray-700"
              htmlFor="confirm-password"
            >
              Confirm Password:
            </label>
            <input
              className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* button  */}
          <button
            onClick={handleSubmit}
            className="text-white bg-[#052131] px-4 !mt-4 py-2 rounded-lg text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
