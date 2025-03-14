import {ButtonProps} from "@/components/button/utils";
import React from "react";

export const SolidButton: React.FC<ButtonProps> = ({bSize, bStyle, disabled, loading, label, icon, ...props}) => {
	return (
		<button className={`btn ${bSize} ${bStyle}`} disabled={disabled} {...props}>
			{loading && <i className="fas fa-spinner fa-spin"/>}
			{icon && <i className={`${icon} mr-1`}/>}
			{label}
			{props.children}
		</button>
	);
}

export default SolidButton;