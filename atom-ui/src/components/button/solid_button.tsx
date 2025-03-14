import {ButtonProps, toSizeClass, toStateClass} from "@/components/button/utils";
import React from "react";
import {Size, State} from "@/components/types";



export const SolidButton: React.FC<ButtonProps> = ({
	                                                   size = Size.Medium,
	                                                   state = State.Primary,
	                                                   disabled = false,
	                                                   loading = false,
	                                                   label,
	                                                   icon,
	                                                   component,
	                                                   onClick
                                                   }) => {
	return (
		<button className={`btn
						${toSizeClass(size)}
						${toStateClass(state)}`}
		        onClick={onClick}
		        disabled={disabled}
		>
		        {loading && <i className="fas fa-spinner fa-spin"/>}
		        {icon && <i className={`${icon} mr-1`}/>}
		        {label}
		        {component}
		</button>
	);
}

export default SolidButton;