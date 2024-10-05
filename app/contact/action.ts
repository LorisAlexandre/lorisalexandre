"use server";

import { ContactEmail } from "@/components/emails";
import { send } from "@/lib/resend";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
	name: z
		.string()
		.min(3, "Ce champ ne doit être vide")
		.max(100, "Le texte est trop long"),
	email: z
		.string()
		.min(3, "Ce champ ne doit être vide")
		.max(100, "Le texte est trop long"),
	subject: z
		.string()
		.min(3, "Ce champ ne doit être vide")
		.max(100, "Le texte est trop long"),
	message: z
		.string()
		.min(3, "Ce champ ne doit être vide")
		.max(500, "Le texte est trop long"),
});

export async function sendRequest(
	_: undefined,
	formData: FormData
): Promise<any> {
	const validatedFields = formSchema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		subject: formData.get("subject"),
		message: formData.get("message"),
	});

	if (!validatedFields.success) {
		return {
			success: false,
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { email, message, name, subject } = validatedFields.data;

	try {
		// send email to me
		await send({
			from: process.env.DOMAIN_EMAIL!,
			to: [process.env.MY_EMAIL!],
			subject,
			react: ContactEmail({
				email,
				message,
				name,
				subject,
			}),
		});
	} catch (error) {
		console.log(error);

		return {
			success: false,
		};
	}

	return redirect("/contact?success=true");
}
