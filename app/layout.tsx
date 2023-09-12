import { EB_Garamond } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

const eB_Garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Bitloanscapital",
  description: "Unlock the Potential of Bitcoin Lending.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${eB_Garamond.className} text-black`}>
        {/* <Header /> */}
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
