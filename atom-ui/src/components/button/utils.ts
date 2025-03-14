import {Size, State} from "@/components/common";

export function toSizeClass(size: Size): string {
	switch (size) {
		case Size.ExtraSmall:
			return "btn-xs p-4";
		case Size.Small:
			return "btn-sm p-4";
		case Size.Medium:
			return "p-4";
		case Size.Large:
			return "btn-lg p-4";
		case Size.ExtraLarge:
			return "btn-xl p-4";
		default:
			return "p-4";
	}
}


export function toStateClass(state: State): string {
	switch (state) {
		case State.Nominal:
			return `btn-primary hover:btn-secondary active:btn-secondary
			bg-opacity-50 hover:bg-opacity-100 shadow-primary`;
		case State.Success:
			return `btn-success border-none bg-opacity-100 shadow-success`;
		case State.Info:
			return `btn-info border-none bg-opacity-100 shadow-info`;
		case State.Error:
			return `btn-error border-none bg-opacity-100 shadow-error`;
		case State.Warning:
			return `btn-warning border-none bg-opacity-100 shadow-warning`;
	}
}
