import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "devicon/devicon.min.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Corey Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}
