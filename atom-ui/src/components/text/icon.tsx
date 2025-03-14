import React from "react";


interface IconProps {
	icon: string;
	size?: string;
	color?: string;
}


export const Icon: React.FC<IconProps> = ({icon, size, color}) => {
	return <i className={`fas ${icon} ${size} ${color}`}/>
}


