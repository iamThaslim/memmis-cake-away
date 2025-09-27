import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
	title: "Contact | Memmis Cakes",
	description: "Learn about Memmis—our story, craft philosophy and small-batch custom cake process.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
