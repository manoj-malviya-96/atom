import {ElementSize, TW_PrimaryBorderStyled} from "@/components/common";
import React, {useEffect} from "react";
import {toSizeClass} from "@/components/button/utils";


interface ToggleButtonProps {
	size?: ElementSize;
	disabled?: boolean;
	onLabel?: string;
	onIcon?: string;
	offLabel?: string;
	offIcon?: string;
	initValue: boolean;
	onChange: (value: boolean) => void;
}


export const ToggleButton: React.FC<ToggleButtonProps> =
	React.memo(
		({size, disabled, onLabel, onIcon, offLabel, offIcon, initValue, onChange}) => {
			if (!onLabel && !onIcon) {
				throw new Error("Button must have either label or icon");
			}
			const [value, setValue] = React.useState<boolean>(!!initValue);
			const handleToggle = () => {
				setValue(!value);
			}
			useEffect(() => {
				onChange(value);
			}, [value]);
			
			return (
				<label
					className={`btn rounded-full
								${TW_PrimaryBorderStyled}
								${toSizeClass(size, !onLabel || !offLabel)}
								${disabled ? "disabled" : ""}
								swap swap-rotate`}
				>
					<input type="checkbox"
					       checked={value}
					       onChange={handleToggle}
					/>
					<span className="swap-on flex flex-row gap-1">
						{onIcon && <i className={onIcon}/>}
						{onLabel}
					</span>
					
					<span className="swap-off flex flex-row gap-1">
						{offIcon && <i className={offIcon}/>}
						{offLabel}
					</span>
				</label>
			)
		}
	);

export default ToggleButton;
