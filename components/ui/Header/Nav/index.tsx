"use client";

import {
	AnchorHTMLAttributes,
	Dispatch,
	ForwardRefExoticComponent,
	SetStateAction,
} from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Separator } from "@/components/shadcn/ui/separator";
import { ThemeToggle } from "@/components/ui";

const navLinks = [
	{
		link: "/",
		label: "Accueil",
	},
	{
		link: "/portfolio",
		label: "Portfolio",
	},
	{
		link: "/about",
		label: "À propos",
	},
	{
		link: "/contact",
		label: "Contact",
	},
];
const navFooterLinks: AnchorHTMLAttributes<HTMLAnchorElement>[] = [
	{
		children: "LinkedIn",
		href: "",
		target: "_blank",
	},
	{
		children: "Instagram",
		href: "https://www.instagram.com/loris.developpeurweb",
		target: "_blank",
	},
	{
		children: "+33 (0)7 69 39 52 49",
		href: "tel:+33769395249",
	},
];

export const Nav = ({
	setIsOpen,
}: {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const MThemeToggle = motion.create(ThemeToggle);
	const MSeparator = motion.create(Separator);
	const navLinksAppear: Variants = {
		initial: {
			opacity: 0,
			translateY: -36,
			rotate: -3,
		},
		enter: (charI: number) => ({
			opacity: 1,
			translateY: -0,
			rotate: -0,
			transition: {
				duration: 0.7,
				delay: 0.5 + charI * 0.02,
			},
		}),
		exit: (charI: number) => ({
			opacity: 0,
			transition: {
				duration: 0.35,
				delay: 0.1 + -charI * 0.02,
			},
		}),
	};
	const navFooterAppear: Variants = {
		initial: {
			opacity: 0,
			translateX: "-100%",
		},
		enter: {
			opacity: 1,
			translateX: 0,
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
		},
		exit: {
			opacity: 0,
			translateX: "-100%",
			transition: {
				duration: 0.35,
			},
		},
	};
	const themeBtnAppear: Variants = {
		initial: {
			opacity: 0,
			x: "100%",
		},
		enter: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
		},
		exit: {
			opacity: 0,
			x: "100%",
			transition: {
				duration: 0.35,
			},
		},
	};
	const separatorAppear: Variants = {
		initial: {
			opacity: 0,
		},
		enter: {
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.35,
			},
		},
	};

	return (
		<nav className="flex flex-col items-start justify-center flex-1 w-full p-4 lg:p-8">
			<div className="flex justify-center items-center flex-1 w-full">
				<ul className="flex flex-col items-start justify-center flex-1 gap-1">
					{navLinks.map(({ label, link }, i) => (
						<li
							key={i}
							className="text-5xl overflow-hidden"
							onClick={() => setIsOpen(false)}
						>
							<Link href={link} className="relative">
								{label.split("").map((char, charI) => (
									<motion.span
										className="inline-flex"
										key={charI}
										custom={charI}
										variants={navLinksAppear}
										initial="initial"
										animate="enter"
										exit="exit"
									>
										{char === " " ? "\u00A0" : char}
									</motion.span>
								))}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<MSeparator
				variants={separatorAppear}
				initial="initial"
				animate="enter"
				exit="exit"
				orientation="horizontal"
				className="mb-12 bg-yellow"
			/>
			<div className="w-full flex items-end justify-between">
				<ul className="flex flex-col gap-1 overflow-hidden">
					{navFooterLinks.map((link, i) => (
						<motion.li
							variants={navFooterAppear}
							initial="initial"
							animate="enter"
							exit="exit"
							key={i}
						>
							<a {...link}></a>
						</motion.li>
					))}
				</ul>
				<MThemeToggle
					variants={themeBtnAppear}
					initial="initial"
					animate="enter"
					exit="exit"
				/>
			</div>
		</nav>
	);
};
