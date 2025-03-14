import React, {HTMLAttributes} from "react";
import {Size, Location} from "@/components/types";
import {toGap, toHAlign, toVAlign} from "@/components/layout/utils";


interface ColProps extends HTMLAttributes<HTMLDivElement> {
	spacing?: Size;
	hAlign?: Location;
	vAlign?: Location;
}

export const Col: React.FC<ColProps> = React.memo(
	({
		 children,
		 spacing = Size.Medium,
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