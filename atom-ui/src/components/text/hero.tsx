import {FC} from "react";

interface TextProps {
	style?: "primary" | "secondary" | "accent" | "white" | "black";
	children: string;
}


export const HeroText: FC<TextProps> = ({style = "primary", children}) => {
	return <h1 className={`text-7xl bg-red-300 font-bold uppercase text-${style}`}>{children}</h1>;
}


