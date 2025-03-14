import React from "react";


interface PrimaryTextProps {
	children: React.ReactNode;
	className?: string;
}


export const PrimaryText: React.FC<PrimaryTextProps> = ({children, className}) => {
	return <p className={`text-wrap text-base-content ${className}`}>{children}</p>;
}

export default PrimaryText;

