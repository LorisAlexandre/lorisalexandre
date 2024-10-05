"use client";

import { useDimension } from "@/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const PortFolio = () => {
	const { width, height } = useDimension();
	const target = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target,
		offset: ["start start", "end end"],
		layoutEffect: false,
	});
	const svg = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 1], [-height, height * 0.9]);
	const y2 = useTransform(
		scrollYProgress,
		[0, 1],
		[-(height - 10), height * 0.9 - 10]
	);
	const y3 = useTransform(
		scrollYProgress,
		[0, 1],
		[-(height - 20), height * 0.9 - 20]
	);

	return (
		<section className="min-h-screen relative">
			<motion.svg
				className="z-[1] absolute top-0 w-full h-full mix-blend-color-dodge"
				width={width}
				height={height}
				viewBox={`0 0 ${width} 836`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ y }}
			>
				<motion.path
					d={`M6.5 6.5V436C6.5 446.493 15.0066 455 25.5 455C35.9934 455 44.5 446.493 44.5 436V263C44.5 255.268 50.768 249 58.5 249C66.232 249 72.5 255.268 72.5 263V694.5C72.5 705.546 63.5457 714.5 52.5 714.5H45C33.9543 714.5 25 705.546 25 694.5V609.75C25 604.365 29.3652 600 34.75 600C40.1348 600 44.5 595.635 44.5 590.25V521C44.5 510.507 35.9934 502 25.5 502C15.0066 502 6.5 510.507 6.5 521V781C6.5 792.046 15.4543 801 26.5 801H${
						width * 1.5
					}`}
					stroke="rgb(var(--yellow) / 30%)"
					strokeWidth="12"
					strokeLinecap="round"
					pathLength={svg}
				/>
			</motion.svg>
			<motion.svg
				className="z-[1] absolute top-0 w-full h-full mix-blend-color-dodge"
				width={width}
				height={height}
				viewBox={`0 0 ${width} 836`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ y: y2, x: 6 }}
			>
				<motion.path
					d={`M6.5 6.5V436C6.5 446.493 15.0066 455 25.5 455C35.9934 455 44.5 446.493 44.5 436V263C44.5 255.268 50.768 249 58.5 249C66.232 249 72.5 255.268 72.5 263V694.5C72.5 705.546 63.5457 714.5 52.5 714.5H45C33.9543 714.5 25 705.546 25 694.5V609.75C25 604.365 29.3652 600 34.75 600C40.1348 600 44.5 595.635 44.5 590.25V521C44.5 510.507 35.9934 502 25.5 502C15.0066 502 6.5 510.507 6.5 521V781C6.5 792.046 15.4543 801 26.5 801H${
						width * 1.5
					}`}
					stroke="rgb(var(--yellow) / 50%)"
					strokeWidth="12"
					strokeLinecap="round"
					pathLength={svg}
				/>
			</motion.svg>
			<motion.svg
				className="z-[1] absolute top-0 w-full h-full mix-blend-color-dodge"
				width={width}
				height={height}
				viewBox={`0 0 ${width} 836`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ y: y3, x: 12 }}
			>
				<motion.path
					d={`M6.5 6.5V436C6.5 446.493 15.0066 455 25.5 455C35.9934 455 44.5 446.493 44.5 436V263C44.5 255.268 50.768 249 58.5 249C66.232 249 72.5 255.268 72.5 263V694.5C72.5 705.546 63.5457 714.5 52.5 714.5H45C33.9543 714.5 25 705.546 25 694.5V609.75C25 604.365 29.3652 600 34.75 600C40.1348 600 44.5 595.635 44.5 590.25V521C44.5 510.507 35.9934 502 25.5 502C15.0066 502 6.5 510.507 6.5 521V781C6.5 792.046 15.4543 801 26.5 801H${
						width * 1.5
					}`}
					stroke="rgb(var(--yellow) / 70%)"
					strokeWidth="12"
					strokeLinecap="round"
					pathLength={svg}
				/>
			</motion.svg>

			<div className="bg-primary h-screen flex items-center justify-center text-center sticky top-0 z-0">
				<p>Des sites internets inoubliables</p>
			</div>
			<div className="bg-primary h-screen flex items-center justify-center text-center sticky top-0 z-0">
				<p>Vivant</p>
			</div>
			<div className="bg-primary h-screen flex items-center justify-center text-center sticky top-0 z-0">
				<p>
					<span>
						<span className="font-brico">&</span> basé sur une
					</span>
					<br />
					<span>expérience utilisateur</span>
				</p>
			</div>
		</section>
	);
};
