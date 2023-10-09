"use client";
import GoogleIcon from "../Icons/GoogleIcon";

function LoginGoogleButton() {
  const onLoginWithGoogle = () => {
    signIn("google");
  };

  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-10 border border-gray-300 rounded w-full h-full"
      onClick={onLoginWithGoogle}
    >
      <GoogleIcon />
    </button>
  );
}

export default LoginGoogleButton;
