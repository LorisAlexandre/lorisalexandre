import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcn/ui/card";
import { Form } from "./Form";
import { Check } from "lucide-react";

export default async function ContactPage({
	searchParams,
}: {
	searchParams: {
		[key: string]: string;
	};
}) {
	const success = !!searchParams.success;

	return (
		<main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 mb-32">
			{/* Mettre vidéo de moi ou CTA ... */}
			<div />
			{success ? (
				<Card className="flex items-center justify-center">
					<CardContent className="flex flex-col items-center justify-center gap-4 text-green-500">
						<div className="aspect-square size-fit p-8 rounded-full border-2 border-green-500">
							<Check size={64} />
						</div>
						<p>Le message a bien été envoyé</p>
					</CardContent>
				</Card>
			) : (
				<Form />
			)}
		</main>
	);
}
