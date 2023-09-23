import React, { useState } from "react";
import { Button, Input } from "./component-index";
import { useProfile } from "../context/add-profile-context";
import { v4 as uuid } from "uuid";

export const Modal = ({ isOpen, onClose }) => {
  const { state, dispatch } = useProfile();
  const [toggleBetweenSocialBasic, setToggleBetweenSocialBasic] =
    useState(true);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [Youtube, setYoutube] = useState("");

  const handleSubmit = () => {
    const profileDetail = {
      id: uuid(),
      Name: Name,
      Email: Email,
      Contact: Contact,
      Instagram: Instagram,
      Youtube: Youtube,
    };
    // console.log("Name", profileDetail);
    dispatch({ type: "Add_Profile", payload: profileDetail });
    setName("");
    setEmail("");
    setContact("");
    setInstagram("");
    setYoutube("");
  };
  //   console.log("state", state);
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
        {/* modal window */}
        <div className=" bg-white w-1/3  flex flex-wrap rounded-lg shadow-lg z-50 overflow-y-auto">
          <div className=" flex flex-col py-4 text-left  w-full  px-6">
            <div
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            ></div>
            <div className="flex  justify-between border-line  ">
              <p className="text-sm font-bold">Add New Profile</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 24 25"
                fill="none"
                onClick={onClose}
                className="cursor-pointer"
              >
                <path
                  d="M5.25 5.75L12 12.5M12 12.5L5.25 19.25M12 12.5L18.75 19.25M12 12.5L18.75 5.75"
                  stroke="#999CA0"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="  mt-6 max-lg:mt-4 h-full">
              <div className="flex  mt-2 gap-4">
                <div
                  className={`w-1/2 flex justify-center  p-4 ${
                    toggleBetweenSocialBasic
                      ? "border-b-4 border-assignBlue"
                      : "border-b-4 border-gray-100"
                  } `}
                >
                  <h6
                    className={`flex items-center justify-center font-bold text-sm cursor-pointer w-28`}
                    onClick={() => setToggleBetweenSocialBasic(true)}
                  >
                    Basic
                  </h6>
                </div>
                <div
                  className={`w-1/2 flex justify-center p-4 ${
                    toggleBetweenSocialBasic
                      ? "border-b-4 border-gray-100"
                      : "border-b-4 border-assignBlue"
                  }`}
                >
                  <h6
                    className="flex items-center justify-center font-bold text-sm cursor-pointer "
                    onClick={() => setToggleBetweenSocialBasic(false)}
                  >
                    Contact
                  </h6>
                </div>

                {/* contact page */}
              </div>
              {toggleBetweenSocialBasic ? (
                <div className="mt-7 flex flex-col gap-4">
                  <Input
                    label="Enter Name*"
                    type="text"
                    placeholder="John Doe"
                    className="border rounded-md  p-2 text-sm"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label="Enter Email*"
                    type="email"
                    placeholder="John@xyz.com"
                    className="border rounded-md  p-2 text-sm"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label="Enter Phone*"
                    type="tel"
                    placeholder="9123445677"
                    className="border rounded-md  p-2 text-sm"
                    value={Contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <Button
                      className="rounded-md   h-8 w-12 p-1 text-white text-xs bg-assignBlue "
                      onClick={() => setToggleBetweenSocialBasic(false)}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mt-7 flex flex-col gap-4">
                  <Input
                    label="Instagram Link (Optional)"
                    type="text"
                    placeholder="Eg. ..instagram.com/username"
                    className="border rounded-md  p-2 text-sm"
                    value={Instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                  <Input
                    label="Youtube Link (Optional)"
                    type="email"
                    placeholder="Eg. ..youtube/username"
                    className="border rounded-md p-2 text-sm"
                    value={Youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                  />

                  <div className="flex justify-end gap-2">
                    <Button
                      className="rounded-md   h-8 w-12 p-1 text-black font-bold text-xs bg-white border border-gray-400 "
                      onClick={() => setToggleBetweenSocialBasic(true)}
                    >
                      Back
                    </Button>
                    <Button
                      className="rounded-md   h-8 w-12 p-1 text-white text-xs bg-assignBlue "
                      onClick={() => handleSubmit()}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              )}

              {/* social Page */}
            </div>
            <div className="flex items-end justify-end w-full">
              {/* <button>Next</button> */}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
