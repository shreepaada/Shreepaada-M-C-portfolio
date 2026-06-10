import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

config.autoAddCss = false;

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	title: "Shreepaada M C | UX Designer",

	description:
		"UX Designer focused on user research, wireframing, prototyping, usability testing, and creating user-centered digital experiences.",

	applicationName: "Shreepaada Portfolio",

	keywords: [
		"Shreepaada",
		"Shreepaada M C",
		"UX Designer",
		"UI UX Designer",
		"Product Designer",
		"User Research",
		"Wireframing",
		"Prototyping",
		"Figma",
		"UX Case Study",
		"Portfolio",
	],

	
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Shreepaada M C",
	jobTitle: "UX Designer",

	sameAs: [
		"http://linkedin.com/in/shreepaada-m-c-520702285",
		"https://github.com/shreepaada",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>

				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}