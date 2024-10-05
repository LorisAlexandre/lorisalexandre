export const Herobanner = () => {
	return (
		<section className="h-screen flex flex-col items-center justify-between relative">
			<div className="flex-1 relative flex flex-col gap-12 items-center justify-center max-w-md">
				<div className="absolute inset-0 top-12 bg-primary dark:bg-secondary/90 blur-2xl max-w-sm aspect-square -z-10" />
				<h1 className="text-5xl lg:text-8xl text-center">
					<pre className="mix-blend-darken dark:mix-blend-screen">
						<code>Développeur</code>
					</pre>{" "}
					<span className="font-brico">&</span>{" "}
					<strong className="bg-yellow font-serif font-thin">
						<em>designer</em>
					</strong>{" "}
					<span className="text-primary-dark font-brico">freelance</span>
				</h1>
				<h2 className="text-3xl lg:text-4xl">Loris Alexandre</h2>
				{/* <p className="text-primary-light lg:text-xl">
					Based @{" "}
					<a
						href="https://maps.app.goo.gl/cxVKX2dHjKBJQVSdA"
						target="_blank"
						rel="noopener noreferrer"
					>
						Marrakech
					</a>
				</p> */}
				{/* <p className="{styles.github}">
          Last commit
        </p> */}
			</div>
			{/* <a
				className="w-full flex items-center justify-between p-4 text-3xl md:text-[3.5vw] bg-background/50 shadow-[0_0_25px-rgb(var(--background))]"
				href="mailto:lorisalexandre.dev@gmail.com"
			>
				<span>available now</span>
				<span />
			</a> */}
		</section>
	);
};
