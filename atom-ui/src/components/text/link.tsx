import React from "react";

interface LinkProps {
	href: string;
	children: string;
	className?: string;
}

export const Link: React.FC<LinkProps> = ({href, children, className}) => {
	return <a href={href} className={`text-info underline ${className}`}>{children}</a>;
};

export default Link;