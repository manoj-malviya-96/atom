import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: string;
	className?: string;
}

export const AtomPrimaryText: React.FC<TextProps> = ({ children, className }) => {
	return (
		<p className={`text-primary ${className}`}>{children}</p>
	);
};

export default AtomPrimaryText;