import type { Metadata } from "next";
import RootLayoutClient from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "laftel",
  description: "laftel animation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
