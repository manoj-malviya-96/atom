import React, {HTMLAttributes} from "react";
import {Spacing, HorizontalAlignment, VerticalAlignment} from "@/components/layout/types";


interface ColProps extends HTMLAttributes<HTMLDivElement> {
	spacing?: Spacing;
	horizontalAlignment?: HorizontalAlignment;
	verticalAlignment?: VerticalAlignment;
	className?: string;
}

export const Col: React.FC<ColProps> = React.memo(
	({
		 children,
		 spacing = Spacing.Medium,
		 horizontalAlignment = HorizontalAlignment.Center,
		 verticalAlignment = VerticalAlignment.Center,
		 className,
		 ...props
	 }) => {
		return (
			<div className={`flex flex-col
						${spacing}
						${horizontalAlignment}
						${verticalAlignment}
						${className}`}
			     {...props}>
				{children}
			</div>
		);
	});

export default Col;