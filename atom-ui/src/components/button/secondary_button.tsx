import {toSizeClass, toStateClass} from "@/components/button/utils";
import React from "react";
import {Size, State} from "@/components/types";

/*** In contrast to primary button, secondary button is used for secondary actions.
    So it doesn't need to have state, component and loading.
 ***/
interface SecondaryButtonProps {
	size?: Size;
	disabled?: boolean;
	label: string;
	icon?: string;
	onClick?: () => void;
}


export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
	                                                                size = Size.Medium,
	                                                                disabled = false,
	                                                                label,
	                                                                icon,
	                                                                onClick
                                                                }) => {
	return (
		<button className={`btn
						${toSizeClass(size)}
						btn-outline border-primary border-opacity-50 hover:border-opacity-100`}
		        onClick={onClick}
		        disabled={disabled}
		>
			{icon && <i className={`${icon} mr-1`}/>}
			{label}
		</button>
	);
}

export default SecondaryButton;