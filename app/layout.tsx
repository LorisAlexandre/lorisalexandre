import type { Metadata } from "next";
import { Syne, Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header, Footer, LenisProvider, ThemeProvider } from "@/components/ui";
import "./globals.css";
import { BASE_URL } from "@/lib/definitions";

const syne = Syne({
	subsets: ["latin"],
	weight: "variable",
	preload: true,
	variable: "--font-syne",
});

const brico = Bricolage_Grotesque({
	preload: true,
	subsets: ["latin"],
	weight: "variable",
	variable: "--font-brico",
});

export const metadata: Metadata = {
	title:
		"Création de sites web sur mesure pour créatifs | Développeur & Designer",
	description:
		"Développeur & designer web spécialisé dans les métiers créatifs, je crée des sites sur mesure qui reflètent ta vision et mettent en avant ton art et services.",
	keywords: [
		"développeur web créatif",
		"designer web sur mesure",
		"création site internet",
		"site pour artistes",
		"site pour créatifs",
		"développeur freelance",
		"site vitrine créatif",
		"conception web",
		"service web personnalisé",
		"création site internet créatif",
	],
	authors: {
		name: "Loris Alexandre",
		url: BASE_URL,
	},
	creator: "Loris Alexandre",
	robots: "index, follow",
	openGraph: {
		type: "website",
		title:
			"Création de sites web sur mesure pour créatifs | Développeur & Designer",
		description:
			"Développeur & designer web spécialisé dans les métiers créatifs, je crée des sites sur mesure qui reflètent ta vision et mettent en avant ton art et services.",
		url: BASE_URL,
		// images: [
		// 	{
		// 		url: "",
		// 		alt: "",
		// 	},
		// ],
	},
	twitter: {
		title: "Développeur & Designer Web pour créatifs",
		description:
			"Sites web personnalisés pour les créatifs : exprime ton art et fais-toi connaître grâce à un site qui te ressemble.",
		// images: [
		// 	{
		// 		url: "",
		// 		alt: "",
		// 	},
		// ],
	},
	alternates: {
		canonical: BASE_URL,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={cn(
					"min-h-screen antialiased overflow-clip",
					syne.variable,
					brico.variable
				)}
			>
				<LenisProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
						<Footer />
					</ThemeProvider>
				</LenisProvider>
			</body>
		</html>
	);
}
