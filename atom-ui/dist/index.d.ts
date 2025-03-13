import { FC } from 'react';

interface TextProps {
    style?: "primary" | "secondary" | "accent" | "white" | "black";
    children: string;
}
declare const HeroText: FC<TextProps>;

export { HeroText };
