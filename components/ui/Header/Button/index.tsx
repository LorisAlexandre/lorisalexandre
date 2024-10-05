"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";

interface Props {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	isOpen: boolean;
}

export const Button = ({ isOpen, setIsOpen }: Props) => {
	return (
		<motion.div
			className={styles.btn}
			onClick={() => setIsOpen(!isOpen)}
			animate={{ left: isOpen ? "-20px" : "0", top: isOpen ? "20px" : "0" }}
			transition={{ duration: 0.7, ease: "easeInOut" }}
		>
			<div className={styles.slider}>
				<motion.div
					className={styles.el}
					animate={{
						rotateY: isOpen ? "90deg" : "0deg",
						translateX: isOpen ? "-50%" : "0%",
					}}
					transition={{ duration: 0.7, ease: "easeInOut" }}
				>
					<PerspectiveText label="menu" />
				</motion.div>
				<motion.div
					initial={{
						rotateY: "90deg",
						translateX: "50%",
					}}
					animate={{
						rotateY: isOpen ? "0deg" : "90deg",
						translateX: isOpen ? "0%" : "50%",
					}}
					transition={{ duration: 0.7, ease: "easeInOut" }}
					className={styles.el}
				>
					<PerspectiveText label="close" />
				</motion.div>
			</div>
		</motion.div>
	);
};

const PerspectiveText = ({ label }: { label: string }) => {
	return (
		<div className={styles.bg}>
			<div className={styles.perspectiveText}>
				<p>{label}</p>
				<p>{label}</p>
			</div>
		</div>
	);
};
