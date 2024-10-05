"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcn/ui/card";
import { SubmitBtn } from "@/components/ui";
import { useFormState } from "react-dom";
import { sendRequest } from "./action";
import Image from "next/image";
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Form = () => {
	const [state, action] = useFormState(sendRequest, undefined);
	const [textarea, setTextarea] = useState("");

	return (
		<Card className="pt-8">
			<CardHeader className="space-y-4">
				<div className="flex justify-between items-center">
					<CardTitle className="font-brico">
						Ton idée, mon expertise - ensemble, tout est possible !
					</CardTitle>
					<Image src={""} alt="" className="size-10 rounded-full bg-primary" />
				</div>
				<CardDescription className="font-mono">
					Développe des sites web uniques et sur-mesure, alliant design moderne
					et performance. Boostez votre présence en ligne avec une solution
					créative.
				</CardDescription>
			</CardHeader>
			<form action={action}>
				<CardContent className="space-y-1.5">
					<div>
						<Label htmlFor="">Nom</Label>
						<Input
							type="text"
							maxLength={100}
							id="name"
							name="name"
							placeholder="Nom Prénom"
						/>
						{state?.errors && state.errors["name"] && (
							<p className="text-sm text-destructive">
								* {state.errors["name"]}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							name="email"
							type="email"
							maxLength={100}
							placeholder="monemail@gmail.com"
						/>
						{state?.errors && state.errors["email"] && (
							<p className="text-sm text-destructive">
								* {state.errors["email"]}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor="subject">Objet</Label>
						<Input
							id="subject"
							name="subject"
							type="text"
							maxLength={100}
							placeholder="Demande de collaboration"
						/>
						{state?.errors && state.errors["subject"] && (
							<p className="text-sm text-destructive">
								* {state.errors["subject"]}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor="message">Message</Label>
						<Textarea
							id="message"
							name="message"
							maxLength={500}
							placeholder={`Bonjour, je suis photographe et je souhaiterais en savoir plus sur ...`}
							onChange={(e) => setTextarea(e.target.value)}
							className={cn(textarea.length >= 500 && "ring-destructive")}
						/>
						{state?.errors && state.errors["message"] && (
							<p className="text-sm text-destructive">
								* {state.errors["message"]}
							</p>
						)}
						{textarea.length >= 500 && (
							<p className="text-sm text-destructive">
								* Le message est trop long
							</p>
						)}
					</div>
				</CardContent>
				<CardFooter>
					<SubmitBtn label="Envoyer" />
				</CardFooter>
			</form>
		</Card>
	);
};
