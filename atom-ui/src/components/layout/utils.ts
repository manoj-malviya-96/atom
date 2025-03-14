import {Location, Size} from "@/components/common";


export const toVAlign = (verticalAlignment: Location) => {
	switch (verticalAlignment) {
		case Location.Start:
			return "items-start";
		case Location.End:
			return "items-end";
		default:
			return "items-center";
	}
}


export const toHAlign = (horizontalAlignment: Location) => {
	switch (horizontalAlignment) {
		case Location.Start:
			return "justify-start";
		case Location.End:
			return "justify-end";
		default:
			return "justify-center";
	}
}

export const toGap = (spacing: Size) => {
	switch (spacing) {
		case Size.ExtraSmall:
			return "gap-1";
		case Size.Small:
			return "gap-2";
		case Size.Medium:
			return "gap-4";
		case Size.Large:
			return "gap-8";
		case Size.ExtraLarge:
			return "gap-16";
		default:
			return "gap-4";
	}
}