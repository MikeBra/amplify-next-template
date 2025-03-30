import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { configureAmplify } from "@/config/amplify"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Todo App",
	description: "A simple todo application built with Next.js and AWS Amplify",
	viewport: "width=device-width, initial-scale=1",
	icons: {
		icon: "/favicon.ico",
	},
}

// Configure Amplify at the root level
configureAmplify()

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
