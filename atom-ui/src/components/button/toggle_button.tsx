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
					className={`btn
								${TW_PrimaryBorderStyled} p-0
								${toSizeClass(size)}
								${disabled ? "disabled" : ""}
								swap swap-rotate`}
				>
					<input type="checkbox"
					       checked={value}
					       onChange={handleToggle}
					/>
					<span className="swap-on">
						{onIcon && <i className={`${onIcon} mr-1`}/>}
						{onLabel}
					</span>
					
					<span className="swap-off">
						{offIcon && <i className={`${offIcon} mr-1`}/>}
						{offLabel}
					</span>
				</label>
			)
		}
	);

export default ToggleButton;
