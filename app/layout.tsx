import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";
import Link from "next/link";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "10up Technical Submission",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <header>
          <div className="container">
            <div className="logo">
              <Image src="/10up.svg" alt="10up Logo" width={100} height={100} priority />
              <div>
                Technical Submission <br />
                <span className="hint">by Anzor Asadov</span>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/ui-architecture">UI Architecture</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
