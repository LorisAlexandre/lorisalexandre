"use client";

import { Button } from "./Button";
import { Nav } from "./Nav";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
// import styles from "./"styles.module".scss";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const variants: Variants = {
		open: {
			width: "90vw",
			height: "90vh",
			borderWidth: "1px",
			borderColor: "rgb(var(--yellow))",
		},
		closed: {
			width: "80px",
			height: "28px",
			transition: { delay: 0.5, ease: "easeInOut" },
			borderWidth: "0px",
			borderColor: "rgb(var(--yellow))",
			backgroundColor: "rgb(var(--background) / 55%)",
		},
	};

	return (
		<header className="fixed top-0 w-full flex justify-end items-start p-4 z-[1000]">
			<div
				className={cn("relative flex", isOpen ? "justify-end size-full" : "")}
			>
				<div
					className={cn(
						!isOpen
							? "pointer-events-none"
							: "pointer-events-auto flex-1 size-full"
					)}
					onClick={() => setIsOpen(false)}
				>
					<motion.div
						className="absolute top-0 right-0 rounded-3xl lg:max-w-[60vw] flex flex-col justify-between items-start backdrop-blur-md shadow-[0_0_200px_rgb(var(--primary-light)/50%)]"
						variants={variants}
						initial={"closed"}
						animate={isOpen ? "open" : "closed"}
						transition={{ duration: 0.7, ease: "easeInOut" }}
					>
						<AnimatePresence mode="wait">
							{isOpen && <Nav setIsOpen={setIsOpen} />}
						</AnimatePresence>
					</motion.div>
				</div>
				<Button isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</header>
	);
};
