import * as React from "react";

interface ContactEmailProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
	email,
	message,
	name,
	subject,
}) => (
	<div>
		<h1>
			{name}: {email}
		</h1>
		<p>{subject}</p>
		<br />
		<p>{message}</p>
	</div>
);
