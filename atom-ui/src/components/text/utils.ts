import {ElementColor} from "@/components/common";

export function toTextColor(color: ElementColor) {
	switch (color) {
		case ElementColor.Nominal:
			return "text-primary-content";
		case ElementColor.Error:
			return "text-error";
		case ElementColor.Warning:
			return "text-warning";
		case ElementColor.Success:
			return "text-success";
	}
}