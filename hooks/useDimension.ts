"use client";

import { useEffect, useState } from "react";

export const useDimension = () => {
	const [dimension, setDimension] = useState({
		width: 0,
		height: 0,
	});

	const updateDim = () => {
		const { innerHeight, innerWidth } = window;

		setDimension({
			height: innerHeight,
			width: innerWidth,
		});
	};

	useEffect(() => {
		updateDim();
		window.addEventListener("resize", updateDim);

		return () => window.removeEventListener("resize", updateDim);
	}, []);

	return dimension;
};
