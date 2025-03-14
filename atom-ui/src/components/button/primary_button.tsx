import {toSizeClass, toColorClass} from "@/components/button/utils";
import React from "react";
import {MotionScaleActive, ElementSize, ElementColor, TransitionDurationTW} from "@/components/common";
import {motion} from "motion/react";

interface PrimaryButtonProps {
	size?: ElementSize;
	color?: ElementColor;
	disabled?: boolean;
	loading?: boolean;
	label?: string;
	icon?: string;
	component?: React.ReactNode;
	onClick?: () => void;
}


export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	                                                            size = ElementSize.Medium,
	                                                            color = ElementColor.Nominal,
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
			className={`btn rounded-full
						hover:shadow-lg transition
						${TransitionDurationTW}
						${toSizeClass(size)}
						${toColorClass(color)}`}
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