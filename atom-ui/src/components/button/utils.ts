import {ElementSize, ElementColor} from "@/components/common/element";

export function toSizeClass(size: ElementSize): string {
	switch (size) {
		case ElementSize.ExtraSmall:
			return "btn-xs p-4";
		case ElementSize.Small:
			return "btn-sm p-4";
		case ElementSize.Medium:
			return "p-4";
		case ElementSize.Large:
			return "btn-lg p-4";
		case ElementSize.ExtraLarge:
			return "btn-xl p-4";
		default:
			return "p-4";
	}
}


export function toColorClass(state: ElementColor): string {
	switch (state) {
		case ElementColor.Nominal:
			return `btn-primary hover:btn-secondary active:btn-secondary
			bg-opacity-50 hover:bg-opacity-100 shadow-primary`;
		case ElementColor.Success:
			return `btn-success border-none bg-opacity-100 shadow-success`;
		case ElementColor.Info:
			return `btn-info border-none bg-opacity-100 shadow-info`;
		case ElementColor.Error:
			return `btn-error border-none bg-opacity-100 shadow-error`;
		case ElementColor.Warning:
			return `btn-warning border-none bg-opacity-100 shadow-warning`;
	}
}
