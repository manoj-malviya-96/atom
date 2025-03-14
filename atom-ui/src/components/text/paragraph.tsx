import {ElementColor} from "@/components/common";
import React from "react";
import {toTextColor} from "@/components/text/utils";


interface ParagraphProps {
	color?: ElementColor;
	children: string;
	className?: string;
}


export const Paragraph: React.FC<ParagraphProps> = ({color, children, className}) => {
	return <p className={`text-wrap
					${toTextColor(color)}
					${className}`}>{children}</p>;
}

export default Paragraph;

