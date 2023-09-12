"use client";
import { Card } from "../../components/shared";

import { H3, P1 } from "@/components/typography";

function AccountSettings() {
  return (
    <div className="p-4 md:p-6 space-y-5 h-full overflow-y-auto">
      <div className="">
        <H3>Account Settings</H3>
      </div>
      <Card title="Change Password">
        <P1>
          Make changes to your password here. Click save when you&rsquo;re done.
        </P1>
        <div className="space-y-4">
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="current-password" className="text-">
              New Password
            </label>
            <input
              className="rounded border border-gray-800 px-2 py-1 md:w-[50%]
            "
              type="text"
              id="current-password"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="current-password" className="text-">
              Confirm Password
            </label>
            <input
              className="rounded border border-gray-800 px-2 py-1 md:w-[50%]
            "
              type="password"
              id="confirm-password"
            />
          </div>

          <button className="text-white bg-blue-500 px-3 py-2 rounded">
            Save changes
          </button>
        </div>
      </Card>
      <Card title="Actions">
        <P1>
          This will permanently delete your account and all of your job history
        </P1>

        <button className="text-red-500 border border-red-500 px-3 py-2 rounded mt-3">
          Delete account
        </button>
      </Card>
      <br />
    </div>
  );
}

export default AccountSettings;
