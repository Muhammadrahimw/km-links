import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Keng Makon",
	description:
		"Все официальные ссылки Keng Makon в одном месте. Каталог, социальные сети и контакты.",
	keywords: [
		"Keng Makon",
		"Мебель",
		"Мебель в Узбекистане",
		"Мебельная фабрика",
		"Каталог мебели",
	],
	authors: [{name: "Keng Makon"}],
	icons: {
		icon: "/km.png",
	},
	openGraph: {
		title: "Keng Makon",
		siteName: "Keng Makon",
		url: "https://kengmakon.uz",
		description:
			"Все официальные ссылки Keng Makon в одном месте. Каталог, соцсети и контакты.",
		locale: "ru_RU",
		type: "website",
	},
	twitter: {
		title: "Keng Makon",
		description:
			"Все официальные ссылки Keng Makon в одном месте. Каталог, социальные сети и контакты.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
