import React from "react";
import {ElementLocation, ElementSize, TW_PrimaryBorder} from "@/components/common";
import {SecondaryText} from "@/components/text";
import Col from "@/components/layout/col";


interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
	label: string;
	className?: string;
	children: React.ReactNode; // Explicit need
}


export const Group: React.FC<GroupProps> = ({label, className, children, ...rest}) => {
	return (
		<Col spacing={ElementSize.ExtraSmall}
		     hAlign={ElementLocation.Start}
		     vAlign={ElementLocation.Start}
		>
			<SecondaryText>{label}</SecondaryText>
			<div className={`${TW_PrimaryBorder} p-8 rounded-lg ${className}`} {...rest}>
				{children}
			</div>
		</Col>
	);
}

export default Group;