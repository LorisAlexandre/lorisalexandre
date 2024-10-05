"use client";

import { useEffect, useRef, useState } from "react";
import {
	MotionValue,
	useScroll,
	useTransform,
	motion,
	useInView,
} from "framer-motion";

export const Marquee = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const isInView = useInView(container, { amount: 0.3 });

	return (
		<section ref={container} className="py-16 flex flex-col">
			<Slider
				isInview={isInView}
				range={[-250, 250]}
				progress={scrollYProgress}
				left="-35%"
				color="primary"
			/>
			<Slider
				isInview={isInView}
				range={[198, -300]}
				progress={scrollYProgress}
				left="-75%"
				color="yellow"
			/>
			<Slider
				isInview={isInView}
				range={[-178, 92]}
				progress={scrollYProgress}
				left="-48%"
				color="primary"
			/>
		</section>
	);
};

interface SliderProps {
	left: string;
	progress: MotionValue<number>;
	range: [min: number, max: number];
	isInview?: boolean;
	color: string;
}

const Slider = ({ left, progress, range, isInview, color }: SliderProps) => {
	const x = useTransform(progress, [0, 1], range);
	const [colors, setColors] = useState({
		primary: `rgb(var(--${color}-dark))`,
		secondary: `rgb(var(--${color}))`,
	});

	useEffect(() => {
		if (color === "yellow") {
			setColors({
				primary: `rgb(var(--${color}))`,
				secondary: `rgb(var(--${color}-light))`,
			});
		}
	}, [color]);

	return (
		<motion.div style={{ left, x }} className="flex whitespace-nowrap relative">
			<div
				className="flex gap-5 items-center px-5 relative py-1"
				style={{ color: colors.primary }}
			>
				<span className="h-[7.5vw] aspect-[2/1] rounded-full">
					<motion.div
						className="h-full aspect-[2/1] rounded-full absolute top-0 left-0 flex items-center justify-center"
						style={{
							width: isInview ? "15vw" : "100%",
							borderRadius: isInview ? "9999px" : "0px",
							backgroundColor: isInview ? colors.primary : colors.secondary,
							transitionDuration: "0.5s",
							transitionDelay: "0.2s",
						}}
					>
						<a
							className="h-full w-full flex items-center justify-center"
							href="mailto:lorisalexandre.dev@gmail.com"
						>
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
									stroke={colors.secondary}
									strokeWidth="2"
									strokeLinecap="square"
								/>
								<path
									d="M6.29289 16.2929L5.58579 17L7 18.4142L7.70711 17.7071L6.29289 16.2929ZM17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L17.7071 7.70711ZM7.70711 17.7071L17.7071 7.70711L16.2929 6.29289L6.29289 16.2929L7.70711 17.7071Z"
									fill={colors.secondary}
								/>
							</svg>
						</a>
					</motion.div>
				</span>
				<p className="text-[7.5vw]">independant developper & designer</p>
			</div>

			<div
				className="flex gap-5 items-center px-5 relative py-1"
				style={{ color: colors.primary }}
			>
				<span className="h-[7.5vw] aspect-[2/1] rounded-full">
					<motion.div
						className="h-full aspect-[2/1] rounded-full absolute top-0 left-0 flex items-center justify-center"
						style={{
							width: isInview ? "15vw" : "100%",
							borderRadius: isInview ? "9999px" : "0px",
							backgroundColor: isInview ? colors.primary : colors.secondary,
							transitionDuration: "0.5s",
							transitionDelay: "0.2s",
						}}
					>
						<a
							className="h-full w-full flex items-center justify-center"
							href="mailto:lorisalexandre.dev@gmail.com"
						>
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
									stroke={colors.secondary}
									strokeWidth="2"
									strokeLinecap="square"
								/>
								<path
									d="M6.29289 16.2929L5.58579 17L7 18.4142L7.70711 17.7071L6.29289 16.2929ZM17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L17.7071 7.70711ZM7.70711 17.7071L17.7071 7.70711L16.2929 6.29289L6.29289 16.2929L7.70711 17.7071Z"
									fill={colors.secondary}
								/>
							</svg>
						</a>
					</motion.div>
				</span>
				<p className="text-[7.5vw]">independant developper & designer</p>
			</div>

			<div
				className="flex gap-5 items-center px-5 relative py-1"
				style={{ color: colors.primary }}
			>
				<span className="h-[7.5vw] aspect-[2/1] rounded-full">
					<motion.div
						className="h-full aspect-[2/1] rounded-full absolute top-0 left-0 flex items-center justify-center"
						style={{
							width: isInview ? "15vw" : "100%",
							borderRadius: isInview ? "9999px" : "0px",
							backgroundColor: isInview ? colors.primary : colors.secondary,
							transitionDuration: "0.5s",
							transitionDelay: "0.2s",
						}}
					>
						<a
							className="h-full w-full flex items-center justify-center"
							href="mailto:lorisalexandre.dev@gmail.com"
						>
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
									stroke={colors.secondary}
									strokeWidth="2"
									strokeLinecap="square"
								/>
								<path
									d="M6.29289 16.2929L5.58579 17L7 18.4142L7.70711 17.7071L6.29289 16.2929ZM17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L17.7071 7.70711ZM7.70711 17.7071L17.7071 7.70711L16.2929 6.29289L6.29289 16.2929L7.70711 17.7071Z"
									fill={colors.secondary}
								/>
							</svg>
						</a>
					</motion.div>
				</span>
				<p className="text-[7.5vw]">independant developper & designer</p>
			</div>
		</motion.div>
	);
};
