import React from "react";
import {Size, State} from "@/components/types";

export function toSizeClass(size: Size): string {
	switch (size) {
		case Size.ExtraSmall:
			return "btn-xs";
		case Size.Small:
			return "btn-sm";
		case Size.Medium:
			return "";
		case Size.Large:
			return "btn-lg";
		case Size.ExtraLarge:
			return "btn-xl";
		default:
			return "";
	}
}


export function toStateClass(state: State): string {
	switch (state) {
		case State.Primary:
			return `btn-primary hover:btn-secondary active:btn-secondary
			bg-opacity-50 hover:bg-opacity-100`;
		case State.Secondary:
			return `btn-secondary border-none`;
		case State.Success:
			return `btn-success border-none bg-opacity-100`;
		case State.Info:
			return `btn-info border-none bg-opacity-100`;
		case State.Error:
			return `btn-error border-none bg-opacity-100`;
		case State.Warning:
			return `btn-warning border-none bg-opacity-100`;
	}
}

export interface ButtonProps {
	size?: Size;
	state?: State;
	disabled?: boolean;
	loading?: boolean;
	label?: string;
	icon?: string;
	component?: React.ReactNode;
	onClick: () => void;
}
