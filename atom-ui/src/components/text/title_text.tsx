import React from "react";


interface TitleTextProps {
	children: React.ReactNode;
	className?: string;
}


export const TitleText: React.FC<TitleTextProps> = ({children, className}) => {
	return <h4 className={`text-3xl font-bold text-wrap text-base-content ${className}`}>{children}</h4>;
}

export default TitleText;

