import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";
import Image from "next/image";
import Form from "../components/Form";
import SliderHome from "../components/PublicHome/swiper";
import LoginGoogleButton from "../components/Global/Buttons/LoginGoogleButton";
import LoginMicrosoftButton from "../components/Global/Buttons/LoginMicrosoftButton";
import "./globals.css";

export default function Home() {
  const t = useTranslations("Index");

  const onLoginWithMicrosoft = () => {
    signIn("azure-ad");
  };

  return (
    <div>
      {/* <Head>
        <title>{t("HomeTitleSEO")}</title>
        <link rel="canonical" href="https://app.gdpr.direct/" key="canonical" />
      </Head> */}
      <div className="grid grid-cols-1 xl:grid-cols-3 min-h-screen max-h-screen bg-gradient-to-br from-white via-gray-200 to-gray-100">
        <div className="rounded-t-[40px] xl:rounded-r-[60px] xl:rounded-tl-none xl:col-span-2 flex flex-col justify-center bg-gradient-to-tr  from-primary-color via-[#6074cb] to-primary-color order-2 xl:order-1">
          <SliderHome />
        </div>
        <div className="flex justify-center order-1 xl:order-2">
          <div className="flex flex-col justify-center items-center py-4 xl:py-6 px-6">
            <div className="flex mt-2 ml-[-0.75rem] items-end justify-center">
              <div className="flex items-center justify-center font-bold mb-6">
                <Image
                  src={"images/gdprDirectSmallLogo.svg"}
                  width={90}
                  height={55}
                  alt="logo"
                />
                <div className="ml-2">
                  <h2 className="text-4xl text-primary-color">
                    GDPR.<sup className="text-2xl">®</sup>
                  </h2>
                  <h2 className="text-4xl font-['Rockwell'] text-secondary-color leading-8">
                    direct
                  </h2>
                </div>
              </div>
            </div>
            <h3 className="text-center font-bold text-3xl">
              {t("HomeWelcome")}
            </h3>
            <p className="text-center text-black mb-6">
              {t("HomeSignInDetails")}
            </p>
            <div className="flex">
              <div className="mx-1">
                <LoginGoogleButton />
              </div>
              <div className="mx-1">
                <LoginMicrosoftButton />
              </div>
            </div>
            <div className="flex items-center w-10/12">
              <div className="bg-[#afafaf] h-px w-full"></div>
              <span className="m-4">or</span>
              <div className="bg-[#afafaf] h-px w-full"></div>
            </div>
            <Form />

            {/* <form className="w-full max-w-sm" onSubmit={onLoginWithEmail}>
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
            </form> */}

            <div className="mt-12 mb-4">{/* <LegalLinks /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
