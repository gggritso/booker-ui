import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Booker",
	description: "Woops!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-white">{children}</body>
		</html>
	);
}
