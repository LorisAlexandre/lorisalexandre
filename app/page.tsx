import { About, Herobanner, Marquee } from "@/components/HomePage";

export default async function Home() {
	return (
		<div>
			<main className="font-syne">
				<Herobanner />
				<Marquee />
				<About />
				{/* <PortFolio /> */}
			</main>
		</div>
	);
}
