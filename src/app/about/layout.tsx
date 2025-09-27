import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Memmis Cakes",
	description: "Learn about Memmis—our story, craft philosophy and small-batch custom cake process.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return children;
}

