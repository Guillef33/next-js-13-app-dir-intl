"use client";
import { useTranslations } from "next-intl";

import { useState } from "react";

function Form() {
  const t = useTranslations("Index");

  const [email, setEmail] = useState("");

  const onLoginWithEmail = (e) => {
    e.preventDefault();
    signIn("email", { email });
  };

  return (
    <form className="w-full max-w-sm" onSubmit={onLoginWithEmail}>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className="appearance-none border-b-2 border-gray-300 focus:border-[#828ab9] bg-white w-full h-12 mb-3 py-1 px-2 focus:outline-none text-dark-color"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-primary-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-3 text-center"
      >
        {t("HomeSignInButtonLabel")}
      </button>
    </form>
  );
}

export default Form;
