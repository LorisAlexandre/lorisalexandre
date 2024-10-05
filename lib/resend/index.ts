import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function send({
	from,
	react,
	subject,
	to,
}: {
	from: string;
	to: string[];
	subject: string;
	react: ReactNode;
}) {
	const { error } = await resend.emails.send({
		from,
		to,
		subject,
		react,
	});

	throw new Error(JSON.stringify(error));
}
