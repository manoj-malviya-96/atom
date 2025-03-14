import {toSizeClass} from "@/components/button/utils";
import React from "react";
import {MotionScaleActive, ElementSize, TW_TransitionDuration, TW_PrimaryBorderStyled} from "@/components/common";
import {motion} from "motion/react";

/*** In contrast to primary button, secondary button is used for secondary actions.
    So it doesn't need to have state, component and loading.
 ***/
interface SecondaryButtonProps {
	size?: ElementSize;
	disabled?: boolean;
	label?: string;
	icon?: string;
	onClick?: () => void;
}


export const SecondaryButton: React.FC<SecondaryButtonProps> = React.memo(({
	                                                                           size = ElementSize.Medium,
	                                                                           disabled = false,
	                                                                           label,
	                                                                           icon,
	                                                                           onClick
                                                                           }) => {
	if (!label && !icon) {
		throw new Error("Button must have either label or icon");
	}
	return (
		<motion.button
			whileTap={{scale: MotionScaleActive}}
			className={`btn
						${toSizeClass(size)}
						rounded-full
						${TW_PrimaryBorderStyled} ${TW_TransitionDuration}`
			}
			onClick={onClick}
			disabled={disabled}
		>
			{icon && <i className={`${icon} mr-1`}/>}
			{label}
		</motion.button>
	);
});

export default SecondaryButton;