"use client";
import { useState, useEffect, useRef } from "react";
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

function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: React.RefObject<T | null>, handler: () => void) {
	useEffect(() => {
		function listener(e: MouseEvent) {
			if (!ref.current || ref.current.contains(e.target as Node)) {
				return;
			}
			handler();
		}
		window.addEventListener("mousedown", listener);
		return () => window.removeEventListener("mousedown", listener);
	}, [ref, handler]);
}

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	useOnClickOutside(menuRef, () => setOpen(false));

	// Close on route change
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<nav className="relative z-50 border-b border-[--color-border] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4 lg:px-8">
				{/* Brand */}
				<Link
					href="/"
					className="group inline-flex items-center gap-2 font-semibold tracking-tight"
					style={{ fontFamily: 'var(--font-display)' }}
				>
					<span className="text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
						Memmis Cake Away
					</span>
				</Link>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main navigation">
					{navItems.map(item => {
						const active = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"relative transition-colors hover:text-teal-600",
									active ? "text-teal-600" : "text-zinc-700"
								)}
							>
								<span>{item.name}</span>
								{active && (
									<span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-teal-600" />
								)}
							</Link>
						);
					})}
				</div>

				{/* Mobile hamburger */}
				<div className="md:hidden flex items-center">
					<button
						onClick={() => setOpen(o => !o)}
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label="Toggle navigation menu"
						className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-[--color-border] bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50"
					>
						<svg
							className="h-5 w-5"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							fill="none"
						>
							{open ? (
								<path d="M6 18L18 6M6 6l12 12" />
							) : (
								<>
									<path d="M3 6h18" />
									<path d="M3 12h18" />
									<path d="M3 18h18" />
								</>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile dropdown */}
			<div
				ref={menuRef}
				id="mobile-menu"
				className={cn(
					"md:hidden overflow-hidden border-b border-[--color-border] bg-white shadow-sm transition-[max-height,opacity] duration-300 ease-out",
					open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
				)}
			>
				<div className="space-y-1 px-4 py-4">
					{navItems.map(item => {
						const active = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
									className={cn(
										"block rounded-md px-3 py-2 text-base font-medium transition-colors",
										active ? "bg-teal-50 text-teal-700" : "text-zinc-700 hover:bg-zinc-50 hover:text-teal-600"
									)}
							>
								{item.name}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
