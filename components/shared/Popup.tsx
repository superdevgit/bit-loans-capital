"use client";

import { ReactNode } from "react";

const Popup = ({
  closePopup,
  children,
}: {
  closePopup: (arg: boolean) => void;
  children: ReactNode;
}) => {
  const closePopupForm = () => {
    closePopup(false);
  };

  return (
    //
    <div className="fixed top-0 left-0 h-full w-full">
      <div className="relative flex justify-center items-center top-0 left-0 h-full w-full">
        {/* overlay */}
        <div
          className="absolute top-0 left-0 h-full w-full bg-gray-800/70 p-3"
          onClick={closePopupForm}
        />
        {/* popup */}
        <div className="p-4 rounded-lg bg-white z-10">
          <div>
            <div className="popup-form !rounded-lg space-y-2 w-[98%] md:w-[50%] md:!p-8 max-h-[80vh] overflow-y-auto">
              <button
                className="close-button !text-4xl"
                onClick={closePopupForm}
              >
                &times;
              </button>

              {/* children  */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
