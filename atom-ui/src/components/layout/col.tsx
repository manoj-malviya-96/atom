import React, {HTMLAttributes} from "react";
import {ElementSize, ElementLocation} from "@/components/common/element";
import {toGap, toHAlign, toVAlign} from "@/components/layout/utils";


interface ColProps extends HTMLAttributes<HTMLDivElement> {
	spacing?: ElementSize;
	hAlign?: ElementLocation;
	vAlign?: ElementLocation;
}

export const Col: React.FC<ColProps> = React.memo(
	({
		 children,
		 spacing = ElementSize.Medium,
		 hAlign = ElementLocation.Center,
		 vAlign = ElementLocation.Center,
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