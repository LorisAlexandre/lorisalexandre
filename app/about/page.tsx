import { Button } from "@/components/shadcn/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
	return (
		<main className="flex flex-col items-center justify-center gap-16 px-6 py-32">
			<h2 className="text-3xl pt-4 font-brico">
				Lorem, ipsum dolor sit amet consectetur adipisicing.
			</h2>
			<div className="space-y-4 [&_p]:text-lg">
				<h3 className="font-serif italic text-2xl">
					Ce serait vous mentir que de dire que j'ai eu un parcours linéaire et
					organisé...
				</h3>
				<p>
					Depuis petit, j'étais destiné à suivre un schéma classique et
					sécuritaire pour "assuer mon avenir". Après de nombreuses années à
					essayer de rentrer dans le moule, en ayant de bonnes notes mais en
					m'ennuyant en cours, c'est en première année de médecine que j'ai tout
					arrêté.
				</p>
			</div>
			<div className="space-y-4 [&_p]:text-lg">
				<h3 className="font-serif italic text-2xl">
					Mon aventure de développeur a débuté en autodidacte.
				</h3>
				<p>
					Entre deux petits boulots, j'apprenais des langages de programmation
					puis j'ai commencé à concevoir un site, puis deux...
					<br />
					Début 2023, j'ai suivi une formation intensive de développement web
					afin de m'améliorer et perfectionner mes compétences.
					<br />
					Depuis, je ne cese de me former et de me renseigner chaque jour sur
					les nouvelles techniques et tendances. Mon objectif est simple:
					m'améliorer constamment pour vous offrir le meilleur.
				</p>
			</div>
			<div className="space-y-4 [&_p]:text-lg">
				<h3 className="font-serif italic text-2xl">Avec l'expérience,</h3>
				<p>
					je me suis rendu compte que ce qui me passionnait était de vous
					proposer un design toujours plus esthétique et innovant. Parce que
					pour moi, chaque projet est une opportunité de réaliser quelque chose
					d'unique et de se dépasser.
					<br />
					<br />
					Étant très sociable et adorant le contact humain, c'est à chaque fois
					un plaisir pour moi d'échanger au sujet de vos idées, et de mener
					votre projet à bien.
				</p>

				<p className="text-center pt-4 max-w-lg mx-auto">
					<strong className="font-mono font-thin">
						Et si je réussis à vous mettre des étoiles pleins les yeux, j'aurai
						réussi mon job.
					</strong>
				</p>
			</div>

			<Button variant={"link"} className="backdrop-blur-sm" asChild>
				<Link href={"/contact"} className="text-xl">
					<span>Travaillons ensemble</span>
					<svg
						className="h-full w-full"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 7H17V17"
							stroke="rgb(var(--primary-dark))"
							strokeWidth="2"
							strokeLinecap="square"
						/>
						<path
							d="M6.29289 16.2929L5.58579 17L7 18.4142L7.70711 17.7071L6.29289 16.2929ZM17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L17.7071 7.70711ZM7.70711 17.7071L17.7071 7.70711L16.2929 6.29289L6.29289 16.2929L7.70711 17.7071Z"
							fill="rgb(var(--primary-dark))"
						/>
					</svg>
				</Link>
			</Button>
		</main>
	);
}
