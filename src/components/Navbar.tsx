"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Simple utility to combine class names
function cn(...classes: (string | false | null | undefined)[]) {
	return classes.filter(Boolean).join(" ");
}

const navItems = [
	{ name: "Gallery", href: "/gallery" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 4);
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Close menu on route change
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full ",
				scrolled ? "shadow-sm" : ""
			)}
		>
			<nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-6">
					<Link
						href="/"
						className="text-xl font-bold tracking-tight text-accent hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2A13] rounded-sm"
					>
						Memmis
					</Link>
				</div>
				{/* Desktop Menu */}
				<ul className="hidden items-center gap-8 text-sm font-medium md:flex">
					{navItems.map((item) => {
						const active = pathname === item.href;
						return (
							<li key={item.name}>
								<Link
									href={item.href}
									className={cn(
										"relative block rounded-md px-2 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2A13]",
										active
											? "text-accent-2"
											: "text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white"
									)}
									aria-current={active ? "page" : undefined}
								>
									{item.name}
									{active && (
										<span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-[#5D2A13]" />
									)}
								</Link>
							</li>
						);
					})}
				</ul>
				{/* Mobile toggle */}
				<div className="md:hidden">
					<button
						type="button"
						aria-label="Toggle menu"
						aria-expanded={open}
						onClick={() => setOpen((o) => !o)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#5D2A13]/30 bg-[rgba(255,255,255,0.7)] text-[#5D2A13] shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2A13] dark:border-[#5D2A13]/40 dark:bg-[#1a1a1a]/70 dark:text-[#EBC1AE] dark:hover:bg-[#1a1a1a]"
					>
						<span className="sr-only">Menu</span>
						<svg
							className={cn("h-5 w-5 transition-transform", open && "rotate-90")}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							{open ? (
								<path d="M6 18L18 6M6 6l12 12" />
							) : (
								<>
									<line x1="3" y1="6" x2="21" y2="6" />
									<line x1="3" y1="12" x2="21" y2="12" />
									<line x1="3" y1="18" x2="21" y2="18" />
								</>
							)}
						</svg>
					</button>
				</div>
			</nav>
			{/* Mobile panel */}
			<div
				className={cn(
					"md:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
					open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
				)}
			>
				<ul className="space-y-1 px-4 pb-4 pt-2 text-sm font-medium">
					{navItems.map((item) => {
						const active = pathname === item.href;
						return (
							<li key={item.name}>
								<Link
									href={item.href}
									className={cn(
										"block rounded-md px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2A13]",
										active
											? "bg-[#5D2A13]/10 text-[#5D2A13] dark:bg-[#5D2A13]/30 dark:text-[#EBC1AE]"
											: "text-gray-800 hover:bg-black/5 dark:text-gray-300 dark:hover:bg-gray-800"
									)}
									aria-current={active ? "page" : undefined}
								>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</header>
	);
}
