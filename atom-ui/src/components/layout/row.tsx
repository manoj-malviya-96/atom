import React, {HTMLAttributes} from "react";
import {Location, Spacing} from "@/components/types";
import {toGap, toHAlign, toVAlign} from "@/components/layout/utils";


interface RowProps extends HTMLAttributes<HTMLDivElement> {
	spacing: Spacing;
	hAlign: Location;
	vAlign: Location;
	smallDeviceWrap: "none" | "col" | "wrap"; //! If small device, make it column
}


export const Row: React.FC<RowProps> = React.memo(
	({
		 children,
		 spacing = Spacing.Medium,
		 hAlign = Location.Center,
		 vAlign = Location.Center,
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