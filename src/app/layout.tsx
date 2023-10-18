import type { Metadata } from "next";
import Navbar from "@/app/_components/Navbar/Navbar";
import "@/app/_scss/main.scss";

export const metadata: Metadata = {
  title: "NextJS Template",
  description: "A template for NextJS projects",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;
