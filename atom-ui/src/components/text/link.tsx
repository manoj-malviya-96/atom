import React from "react";

interface LinkProps {
	href: string;
	children: string;
}

export const Link: React.FC<LinkProps> = ({href, children}) => {
	return <a href={href} className="text-info underline">{children}</a>;
};

export default Link;