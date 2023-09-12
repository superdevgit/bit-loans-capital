"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

// COMPONENTS
import { H3, P2 } from "../typography";
import Button from "./Button";

// ASSETS
import successIcon from "../../assets/check-one_modal_icon.svg";
import Loader from "../../assets/loader.svg";
import closeIcon from "../../assets/Vector_modal_icon.svg";

type ModalProps = {
  loading: boolean;
  success: boolean;
  error: string | undefined;
  message: string | undefined;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  user?: any;
};

// ====================================
// Modal  COMPONENTS ////////
// ====================================
export default function Modal({
  loading,
  success,
  message,
  error,
  showModal = true,
  setShowModal,
  user,
}: ModalProps) {
  const setInitialState = () => {
    setShowModal(false);
  };

  const router = useRouter();
  const pathname = usePathname();

  const types = ["jobseeker", "job-seeker"];

  // get user from local storage
  // const [user, setUser] = useState({ type: "" });

  // useEffect(() => {
  //   console.log("Getting user from local storage", user);

  //   if (localStorage.getItem("userSession") !== "undefined") {
  //     const userFromLocalStorage = JSON.parse(
  //       localStorage.getItem("userSession")!
  //     );

  //     setUser({ type: userFromLocalStorage?.type });
  //   }
  // }, [loading]);

  // RETURN ///////////////////////////
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/50">
          <div className="w-[80%] md:w-1/3 p-6 space-y-3 bg-white rounded-lg">
            {/*close btn */}
            <div className="text-end">
              <Button
                variant="accent"
                className="text-sm !p-2"
                type="button"
                action={() => setInitialState()}
              >
                <Image src={closeIcon} alt="close button icon" />
              </Button>
            </div>
            {/*illustration*/}
            <div>
              {loading && (
                <div className="flex justify-center">
                  <Image src={Loader} alt="loading icon" width={50} />
                </div>
              )}
              {success && (
                <Image
                  className="mx-auto"
                  src={successIcon}
                  alt="success icon"
                  width={50}
                />
              )}
              {error && "Error illustration"}
            </div>
            {/*info*/}

            {success && (
              <div className="space-y-3">
                <div className="space-y-2 text-center">
                  <H3>Congratulations</H3>
                  <P2>{message}</P2>
                </div>
                {/*btn*/}
                <div className="pt-4 pb-2">
                  {/* job seeker */}
                  {pathname === "/signup/job-seeker" && (
                    <Button
                      variant="primary"
                      type="button"
                      action={() => {
                        router.push("/");
                        setInitialState();
                      }}
                    >
                      Browse Jobs
                    </Button>
                  )}

                  {pathname === "/login" && types.includes(user?.type) && (
                    <Button
                      variant="primary"
                      type="button"
                      action={() => {
                        router.push("/");
                        setInitialState();
                      }}
                    >
                      Browse Jobs
                    </Button>
                  )}

                  {/* recruiter  */}
                  {pathname === "/signup/recruiter" && (
                    <Button
                      variant="primary"
                      type="button"
                      action={() => {
                        router.push("/recruiter");
                        setInitialState();
                      }}
                    >
                      Go to Dashboard
                    </Button>
                  )}
                  {pathname === "/create-job" && (
                    <Button
                      variant="primary"
                      type="button"
                      action={() => {
                        router.push("/recruiter");
                        setInitialState();
                      }}
                    >
                      Go to Dashboard
                    </Button>
                  )}
                  {pathname === "/login" && user?.type === "recruiter" && (
                    <Button
                      variant="primary"
                      type="button"
                      action={() => {
                        router.push("/recruiter");
                        setInitialState();
                      }}
                    >
                      Go to Dashboard
                    </Button>
                  )}
                </div>
              </div>
            )}
            {error && error}
          </div>
        </div>
      )}
    </>
  );
}

////////////////////////////////////////
// EXTENDED COMPONENTS /////////////////
