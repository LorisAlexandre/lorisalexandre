import { Button } from "@/components/shadcn/ui/button";
import { Separator } from "@/components/shadcn/ui/separator";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="flex flex-col border-t border-primary items-center justify-center gap-12 px-4 py-16 bg-white dark:bg-background">
			<h3
				className="scroll-m-20 text-xl flex gap-1 font-thin font-serif italic tracking-tight underline mb-4"
				style={{
					textDecorationStyle: "double",
					textDecorationColor: "rgb(var(--primary))",
					textDecorationThickness: "2px",
				}}
			>
				Créons ton site main dans la main avec des possibilités de design
				infinie, la seule limite est ta créativité.
			</h3>

			<Button variant={"link"} size={"link"} asChild>
				<Link href="/contact">
					<span>Plonge dans mon univers</span>
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

			<div className="flex flex-col gap-4"></div>

			<div className="w-full space-y-3">
				<div className="w-full text-foreground/70 space-y-1">
					<p>Contact</p>
					<Separator />
					{/* Line */}
				</div>
				<ul className="flex flex-wrap gap-4 items-center">
					<li>
						<Button variant={"link"} size={"link"} asChild>
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<span>Instagram</span>
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
							</a>
						</Button>
					</li>
					<li>
						<Button variant={"link"} size={"link"} asChild>
							<a href="mailto:lorisalexandre.dev@gmail.com">
								<span>lorisalexandre.dev@gmail.com</span>
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
							</a>
						</Button>
					</li>
					<li>
						<Button variant={"link"} size={"link"} asChild>
							<a href="tel:+33769395249">
								<span>+33 (0)7 69 39 52 49</span>
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
							</a>
						</Button>
					</li>
				</ul>
			</div>
		</footer>
	);
};
