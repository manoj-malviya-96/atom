import {ElementColor, ElementSize} from "@/components/common/element";

export function toSizeClass(size: ElementSize, isIconOnly: boolean = false): string {
	let result = "";
	switch (size) {
		case ElementSize.ExtraSmall:
			result += "btn-xs p-4";
			break;
		case ElementSize.Small:
			result += "btn-sm p-4";
			break;
		case ElementSize.Large:
			result += "btn-lg p-4";
			break;
		case ElementSize.ExtraLarge:
			result += "btn-xl p-4";
			break;
		case ElementSize.Medium:
		default:
			result += "p-4";
			break;
	}
	result += isIconOnly ? " btn-circle" : "";
	return result;
}


export function toColorClass(state: ElementColor): string {
	switch (state) {
		case ElementColor.Base:
			return `btn-ghost border-none shadow-base/20`;
		case ElementColor.Primary:
		case ElementColor.Secondary:
			return `btn-primary hover:btn-secondary active:btn-secondary shadow-primary/20`;
		case ElementColor.Success:
			return `btn-success border-none shadow-success/20`;
		case ElementColor.Info:
			return `btn-info border-none shadow-info/20`;
		case ElementColor.Error:
			return `btn-error border-none shadow-error/20`;
		case ElementColor.Warning:
			return `btn-warning border-none shadow-warning/20`;
	}
}
