import React, {FC} from "react";

interface HeroTextProps {
	children: React.ReactNode;
	className?: string;
}

export const HeroText: FC<HeroTextProps> = ({children, className}) => {
	return <h1 className={`text-7xl font-bold uppercase ${className}`}>{children}</h1>;
}


export default HeroText;

