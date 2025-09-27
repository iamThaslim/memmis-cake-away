import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
	title: "Gallery | Memmis Cake",
	description: "Hand-crafted custom cake gallery – explore themes and designs by Sharmeena Ranees.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
	return children;
}

