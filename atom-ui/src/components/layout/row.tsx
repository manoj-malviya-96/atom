import React, {HTMLAttributes} from "react";
import {ElementLocation, ElementSize} from "@/components/common";
import {toGap, toHAlign, toVAlign} from "@/components/layout/utils";


interface RowProps extends HTMLAttributes<HTMLDivElement> {
	spacing?: ElementSize;
	hAlign?: ElementLocation;
	vAlign?: ElementLocation;
	smallDeviceWrap?: "none" | "col" | "wrap"; //! If small device, make it column
}


export const Row: React.FC<RowProps> = React.memo(
	({
		 children,
		 spacing = ElementSize.Medium,
		 hAlign = ElementLocation.Center,
		 vAlign = ElementLocation.Center,
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
						${toGap(spacing)}
						${toHAlign(hAlign)}
						${toVAlign(vAlign)}
						${className}`}
			     {...props}>
				{children}
			</div>
		);
	});

export default Row;