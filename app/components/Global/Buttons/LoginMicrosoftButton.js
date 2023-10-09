"use client";
import Image from "next/image";
import MicrosoftIcon from "../Icons/MicrosoftIcon";

function LoginMicrosoftButton() {
  const onLoginWithMicrosoft = () => {
    signIn("azure-ad");
  };
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-10 border border-gray-300 rounded w-full h-full"
      onClick={onLoginWithMicrosoft}
    >
      <MicrosoftIcon />
    </button>
  );
}

export default LoginMicrosoftButton;
