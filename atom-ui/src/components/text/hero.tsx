import {FC} from "react";

interface TextProps {
	style?: "primary" | "secondary" | "accent" | "white" | "black";
	children: string;
}


export const HeroText: FC<TextProps> = ({style = "primary", children}) => {
	return <h1 className={`text-info font-bold uppercase text-7xl`}>{children}</h1>;
}


