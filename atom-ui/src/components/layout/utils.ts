import {ElementLocation, ElementSize} from "@/components/common/element";


export const toVAlign = (verticalAlignment: ElementLocation) => {
	switch (verticalAlignment) {
		case ElementLocation.Start:
			return "items-start";
		case ElementLocation.End:
			return "items-end";
		default:
			return "items-center";
	}
}


export const toHAlign = (horizontalAlignment: ElementLocation) => {
	switch (horizontalAlignment) {
		case ElementLocation.Start:
			return "justify-start";
		case ElementLocation.End:
			return "justify-end";
		default:
			return "justify-center";
	}
}

export const toGap = (spacing: ElementSize) => {
	switch (spacing) {
		case ElementSize.ExtraSmall:
			return "gap-1";
		case ElementSize.Small:
			return "gap-2";
		case ElementSize.Medium:
			return "gap-4";
		case ElementSize.Large:
			return "gap-8";
		case ElementSize.ExtraLarge:
			return "gap-16";
		default:
			return "gap-4";
	}
}