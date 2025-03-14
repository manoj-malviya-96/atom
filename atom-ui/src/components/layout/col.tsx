import React, {HTMLAttributes} from "react";
import {Spacing, Location} from "@/components/types";
import {toGap, toHAlign, toVAlign} from "@/components/layout/utils";


interface ColProps extends HTMLAttributes<HTMLDivElement> {
	spacing?: Spacing;
	hAlign?: Location;
	vAlign?: Location;
}

export const Col: React.FC<ColProps> = React.memo(
	({
		 children,
		 spacing = Spacing.Medium,
		 hAlign = Location.Center,
		 vAlign = Location.Center,
		 className,
		 ...props
	 }) => {
		return (
			<div className={`flex flex-col
						${toGap(spacing)}
						${toHAlign(hAlign)}
						${toVAlign(vAlign)}
						${className}`}
			     {...props}>
				{children}
			</div>
		);
	});

export default Col;