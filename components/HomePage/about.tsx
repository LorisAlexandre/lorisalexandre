"use client";

import { Button } from "@/components/shadcn/ui/button";
import { Sparkles } from "lucide-react";
// import {
// 	AnimatePresence,
// 	motion,
// 	useInView,
// 	useScroll,
// 	useTransform,
// 	Variants,
// } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";
import Link from "next/link";

export const About = () => {
	// const section = useRef<HTMLDivElement>(null);
	// const isInView = useInView(section, { amount: 0.2 });
	// const { scrollYProgress } = useScroll();
	// const MImage = motion.create(Image);
	// const rotate = useTransform(scrollYProgress, [0, 1], [180, -180]);

	// const animLogo: Variants = {
	// 	initial: {
	// 		opacity: 0,
	// 	},
	// 	animate: {
	// 		opacity: 1,

	// 		transition: {
	// 			duration: 0.5,
	// 		},
	// 	},
	// 	exit: {
	// 		opacity: 0,

	// 		transition: { duration: 0.3 },
	// 	},
	// };

	return (
		<section
			// ref={section}
			className="flex flex-col items-center justify-center gap-16 px-4 py-16 lg:p-16 relative overflow-clip"
		>
			{/* <AnimatePresence>
				{isInView && (
					<motion.div
						className="{styles.imgContainer}"
						variants={animLogo}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<MImage
							style={{
								rotate: rotate as any,
							}}
							className="{styles.img}"
							src={"/assets/Logo.svg"}
							alt=""
							width={100}
							height={100}
						/>
					</motion.div>
				)}
			</AnimatePresence> */}

			<div className="max-w-xl w-full flex flex-col max-lg:items-center gap-3 z-10 text-foreground">
				<h3
					className="scroll-m-20 text-3xl flex gap-1 font-thin font-serif italic tracking-tight underline mb-4"
					style={{
						textDecorationStyle: "wavy",
						textDecorationColor: "rgb(var(--yellow-light))",
						textDecorationThickness: "8px",
					}}
				>
					Création de site internet sur mesure
				</h3>
				<p className="ml-6 text-lg">
					En tant que développeur web & designer web des métiers créatifs, mon
					objectif est de te concevoir un site qui reflète entièrement{" "}
					<strong>TA</strong> vision et de mettre en avant ton art, quel qu'il
					soit.
				</p>
				<p className="ml-6 text-lg">
					Ton site est ton moyen d'expression et te permet de te démarquer sur
					internet. Que ce soit pour mettre en avant tes services, vendre tes
					produits, ou encore organiser tes prises de rendez-vous, tu es au bon
					endroit.
				</p>
				<p className="ml-6 text-lg">
					Je suis là pour créer le site de tes rêves.
				</p>
			</div>
			<Button variant={"link"} className="backdrop-blur-sm" asChild>
				<Link href={"/about"} className="text-xl">
					<span>L'histoire derrière</span>
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
		</section>
	);
};
