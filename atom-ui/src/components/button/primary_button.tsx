import {toSizeClass, toStateClass} from "@/components/button/utils";
import React from "react";
import {MotionScaleActive, Size, State} from "@/components/common";
import {motion} from "motion/react";

interface PrimaryButtonProps {
	size?: Size;
	state?: State;
	disabled?: boolean;
	loading?: boolean;
	label?: string;
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
	if (!label && !icon) {
		throw new Error("Button must have either label or icon");
	}
	return (
		<motion.button
			className={`btn hover:shadow-sm rounded-full
						${toSizeClass(size)}
						${toStateClass(state)}`}
			onClick={onClick}
			disabled={disabled}
			whileTap={{scale: MotionScaleActive}}
		>
			{loading && <i className="fas fa-spinner fa-spin"/>}
			{icon && <i className={`${icon}`}/>}
			{label}
			{component}
		</motion.button>
	);
}

export default PrimaryButton;