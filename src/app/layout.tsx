import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS Template",
  description: "A template for NextJS projects",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
