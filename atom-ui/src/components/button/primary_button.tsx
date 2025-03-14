import {toSizeClass, toStateClass} from "@/components/button/utils";
import React from "react";
import {Size, State} from "@/components/common";

interface PrimaryButtonProps {
	size?: Size;
	state?: State;
	disabled?: boolean;
	loading?: boolean;
	label: string;
	icon?: string;
	component?: React.ReactNode;
	onClick?: () => void;
}


export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	                                                            size = Size.Medium,
	                                                            state = State.Nominal,
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

export default PrimaryButton;