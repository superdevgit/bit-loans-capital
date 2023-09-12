"use client";

import { H3, P1 } from "@/components/typography";
// COMPONENTS

// ASSETS 
import { useState } from "react";
import { Card, UserProfileUpload } from "../../components/shared";

// ========================================
// USER PROFILE PAGE COMPONENTS ///////////
// ========================================
export default function UserProfilePage() {
  const [showModal, setShowModal] = useState(false);
  const [section, setSection] = useState("");

  // RETURN ///////////////////////////
  return (
    <div className="p-4 md:p-6 space-y-5 h-full overflow-y-auto md:w-2/3">
      <div className="">
        <H3>User profile</H3>
      </div>
      <Card title="Update your information">
        <P1>
          You can make changes to your profile here. Click save when
          you&rsquo;re done.
        </P1>
        <div className="space-y-4">
          {/* profile picture  */}
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="profiel-picture" className="text-">
              Profiel Picture
            </label>
            <UserProfileUpload/>
          </div>
          {/* username  */}
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="username" className="text-">
              Username
            </label>
            <input
              className="rounded border border-gray-800 px-2 py-1 
            "
              type="text"
              id="username"
            />
          </div>
          {/* birthday  */}
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="birthday" className="text-">
              Birthday
            </label>
            <input
              className="rounded border border-gray-800 px-2 py-1 
            "
              type="date"
              id="birthday"
            />
          </div>
          {/* gender  */}
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="gender" className="text-">
              Gender
            </label>
            <select
          
          name="gender"
          id="gender"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          // placeholder="John Doe"
          // value={gender}
          // onChange={e => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
          </div>
          {/* <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="current-password" className="text-">
              Confirm Password
            </label>
            <input
              className="rounded border border-gray-800 px-2 py-1 
            "
              type="password"
              id="confirm-password"
            />
          </div> */}

          <button className="text-white bg-blue-500 px-3 py-2 rounded">
            Save changes
          </button>
        </div>
      </Card>
      {/* <Card title="Actions">
        <P1>
          This will permanently delete your account and all of your job history
        </P1>

        <button className="text-red-500 border border-red-500 px-3 py-2 rounded mt-3">
          Delete account
        </button>
      </Card> */}
      <br />
    </div>
  );
}
