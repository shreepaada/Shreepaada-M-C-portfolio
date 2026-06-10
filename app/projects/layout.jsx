import Footer from "@/components/Footer";

export const metadata = {
	title: "Projects & Case Studies | Shreepaada M C",
	description:
		"A collection of UX case studies, research projects, and software products. Explore LifeLink, Fam Manager, AgroVision.",
};

export default function Layout({ children }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}