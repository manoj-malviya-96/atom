import React, {HTMLAttributes} from "react";
import {Spacing, HorizontalAlignment, VerticalAlignment} from "@/components/layout/types";


interface RowProps extends HTMLAttributes<HTMLDivElement> {
	spacing: Spacing;
	horizontalAlignment: HorizontalAlignment;
	verticalAlignment: VerticalAlignment;
	className?: string;
	smallDeviceWrap: "none" | "col" | "wrap"; //! If small device, make it column
}

export const Row: React.FC<RowProps> = React.memo(
	({
		 children,
		 spacing = Spacing.Medium,
		 horizontalAlignment = HorizontalAlignment.Center,
		 verticalAlignment = VerticalAlignment.Center,
		 smallDeviceWrap = "none",
		 className,
		 ...props
	 }) => {
		const smallDeviceWrapClass = smallDeviceWrap === "none" ? "flex-row" :
			smallDeviceWrap === "col" ? "flex-col md:flex-row" :
				"flex-row flex-wrap";
		return (
			<div className={`flex
						${smallDeviceWrapClass}
						${spacing}
						${horizontalAlignment}
						${verticalAlignment}
						${className}`}
			     {...props}>
				{children}
			</div>
		);
	});

export default Row;