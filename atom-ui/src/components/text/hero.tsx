import {FC} from "react";
import {ElementColor} from "@/components/common";
import {toTextColor} from "@/components/text/utils";

interface HeroTextProps {
	color?: ElementColor;
	children: string;
	className?: string;
}

export const HeroText: FC<HeroTextProps> = ({color, children, className}) => {
	return <h1
		className={`text-7xl font-bold uppercase
				${toTextColor(color)} ${className}`}>{children}</h1>;
}


export default HeroText;

