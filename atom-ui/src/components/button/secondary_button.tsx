import {toSizeClass, toStateClass} from "@/components/button/utils";
import React from "react";
import {Size, State} from "@/components/common";

/*** In contrast to primary button, secondary button is used for secondary actions.
    So it doesn't need to have state, component and loading.
 ***/
interface SecondaryButtonProps {
	size?: Size;
	disabled?: boolean;
	label?: string;
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
	if (!label && !icon) {
		throw new Error("Button must have either label or icon");
	}
	return (
		<button className={`btn
						${toSizeClass(size)}
						bg-transparent hover:bg-primary hover:text-primary-content
						border border-secondary border-opacity-50 hover:border-opacity-100`
				}
		        onClick={onClick}
		        disabled={disabled}
		>
			{icon && <i className={`${icon} mr-1`}/>}
			{label}
		</button>
	);
}

export default SecondaryButton;