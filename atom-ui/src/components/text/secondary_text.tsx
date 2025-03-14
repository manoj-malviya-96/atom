import React from "react";


interface SecondaryTextProps {
	children: React.ReactNode;
	className?: string;
}

export const SecondaryText: React.FC<SecondaryTextProps> = ({children, className}) => {
	return <span className={`text-wrap text-sm text-base-content/30 ${className}`}>{children}</span>;
}

export default SecondaryText;

