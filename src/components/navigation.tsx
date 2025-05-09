"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navigation = [
		{ href: "", label: "About" },
		{ href: "#projects", label: "Projects" },
		{ href: "#education", label: "Education" },
		{ href: "#techstack", label: "Technology" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
					: "bg-transparent py-6"
			}`}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<div className="text-xl font-bold">
					<span className="text-gradient">Corey</span>
					Portfolio
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex gap-8">
					{navigation.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className="hover:text-cyan-400 transition-colors"
						>
							{item.label}
						</Link>
					))}
				</div>

				{/* Resume Button */}
				<div className="gap-4 hidden md:flex">
					<Button
						variant="outline"
						className="border-violet-500/30 hover:bg-violet-500/10 gap-2"
					>
						<i className="devicon-github-original text-xl"></i>
					</Button>
					<Button
						variant="outline"
						className="border-violet-500/30 hover:bg-violet-500/10 gap-2"
					>
						<i className="devicon-linkedin-plain text-xl"></i>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-white"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md p-4 flex flex-col gap-4 border-t border-zinc-800">
					{navigation.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className="px-4 py-2 hover:bg-zinc-800/50 rounded-md"
							onClick={() => setMobileMenuOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
};

export default NavBar;
