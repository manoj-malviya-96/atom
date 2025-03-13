import {FC} from "react";

interface TextProps {
	style?: "primary" | "secondary" | "accent" | "white" | "black";
	content: string;
}


export const HeroText: FC<TextProps> = ({style = "primary", content}) => {
	return <h1 className={`text-7xl font-bold uppercase text-${style}`}>{content}</h1>;
}


