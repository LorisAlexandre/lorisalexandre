"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@/components/shadcn/ui/button";
import { Loader2 } from "lucide-react";

interface Props extends ButtonProps {
	label: string;
}
export const SubmitBtn = ({ label, ...props }: Props) => {
	const { pending } = useFormStatus();

	return (
		<Button {...props} disabled={pending} className="cursor-pointer">
			{pending ? <Loader2 className="animate-spin" /> : label}
		</Button>
	);
};
