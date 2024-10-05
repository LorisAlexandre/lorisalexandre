import { Construction } from "lucide-react";

export default async function PortfolioPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center">
			<Construction size={64} className="text-orange-400" />
			<p className="font-brico text-3xl text-center max-w-lg">
				Cette section du site est toujours en construction
			</p>
		</main>
	);
}
