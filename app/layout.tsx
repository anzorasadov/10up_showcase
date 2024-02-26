import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";
import Navigation from "./components/Navigation/Navigation";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "10up Technical Submission",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={workSans.className} suppressHydrationWarning={true}>
        <header>
          <div className="container">
            <div className="logo">
              <Image src="/10up.svg" alt="10up Logo" width={100} height={100} priority />
              <div>
                Technical Submission <br />
                <span className="author">by Anzor Asadov</span>
              </div>
            </div>
            <Navigation />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
