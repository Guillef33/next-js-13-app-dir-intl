import "./globals.css";
// import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://app.gdpr.direct/"),
  title: {
    default: "GDPR compliance? Problem solved. For free.",
    template: `%s | GDPR.Direct`,
  },
  description:
    "GDPR.direct creates for you a repository of all the legal documents you need, ready for the footer of your website. And it is free. Full privacy compliance.",
};
export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
