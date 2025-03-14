import "@fortawesome/fontawesome-free/css/all.css";

export enum Size {
	ExtraSmall,
	Small,
	Medium,
	Large,
	ExtraLarge
}

export enum State {
	Nominal,
	Success,
	Info,
	Warning,
	Error
}

export enum Location {
	Start,
	Center,
	End
}

export enum Box {
	Fit, // Fit to content
	Full, // Fit to parent
	Screen, // Fit to screen
	ViewPort // Fit to viewport
}

// Defaults
export const MotionScaleActive = 0.95;


