import type { Metadata } from "next";
import styles from "@/app/_styles/globals.module.scss";

export const metadata: Metadata = {
  title: "NextJS Template",
  description: "A template for NextJS projects",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={styles["page-body"]}>{children}</body>
  </html>
);

export default RootLayout;
